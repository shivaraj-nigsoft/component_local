import React, { useMemo } from 'react';

export interface PivotTableProps {
  data: Record<string, any>[];
  rowField: string;
  columnField: string;
  valueField: string;
  aggregation?: 'sum' | 'avg' | 'count' | 'min' | 'max';
  title?: string;
}

const PivotTable: React.FC<PivotTableProps> = ({
  data,
  rowField,
  columnField,
  valueField,
  aggregation = 'sum',
  title
}) => {
  const pivotData = useMemo(() => {
    const rows = new Set<string>();
    const cols = new Set<string>();
    const matrix: Record<string, Record<string, number[]>> = {};

    data.forEach(item => {
      const row = String(item[rowField]);
      const col = String(item[columnField]);
      const val = Number(item[valueField]) || 0;

      rows.add(row);
      cols.add(col);

      if (!matrix[row]) matrix[row] = {};
      if (!matrix[row][col]) matrix[row][col] = [];
      matrix[row][col].push(val);
    });

    const aggregate = (values: number[]) => {
      if (values.length === 0) return 0;
      switch (aggregation) {
        case 'sum': return values.reduce((a, b) => a + b, 0);
        case 'avg': return values.reduce((a, b) => a + b, 0) / values.length;
        case 'count': return values.length;
        case 'min': return Math.min(...values);
        case 'max': return Math.max(...values);
        default: return 0;
      }
    };

    const result: Record<string, Record<string, number>> = {};
    rows.forEach(row => {
      result[row] = {};
      cols.forEach(col => {
        result[row][col] = matrix[row]?.[col] ? aggregate(matrix[row][col]) : 0;
      });
    });

    return { rows: Array.from(rows), cols: Array.from(cols), result };
  }, [data, rowField, columnField, valueField, aggregation]);

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}>
      {title && <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold', color: '#003357' }}>{title}</h3>}
      <div style={{ overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#003357', color: '#fff' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', position: 'sticky', left: 0, backgroundColor: '#003357' }}>
                {rowField}
              </th>
              {pivotData.cols.map(col => (
                <th key={col} style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pivotData.rows.map((row, idx) => (
              <tr key={row} style={{ backgroundColor: idx % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={{ padding: '12px', color: '#000000', fontWeight: '600', borderBottom: '1px solid #e0e0e0', position: 'sticky', left: 0, backgroundColor: idx % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  {row}
                </td>
                {pivotData.cols.map(col => (
                  <td key={col} style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e0e0e0', color: '#333' }}>
                    {pivotData.result[row][col].toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PivotTable;
