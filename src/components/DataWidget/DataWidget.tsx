import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface DataWidgetProps {
  data: Record<string, any>[];
  title?: string;
  maxHeight?: number;
}

const DataWidget: React.FC<DataWidgetProps> = ({ data, title, maxHeight = 400 }) => {
  const { ref, fs } = useContainerSize();

  const outerStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    width: '100%',
    boxSizing: 'border-box'
  };

  if (!data || data.length === 0) {
    return (
      <div ref={ref} style={outerStyle}>
        {title && <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357' }}>{title}</h3>}
        <p style={{ color: '#666', textAlign: 'center', fontSize: fs(14) }}>No data available</p>
      </div>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div ref={ref} style={outerStyle}>
      {title && <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357' }}>{title}</h3>}
      <div style={{ maxHeight, overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ position: 'sticky', top: 0, backgroundColor: '#003357', color: '#fff', zIndex: 1 }}>
            <tr>
              {columns.map((col) => (
                <th key={col} style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: fs(13), borderBottom: '2px solid #002a45' }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                {columns.map((col) => (
                  <td key={col} style={{ padding: '12px', borderBottom: '1px solid #e0e0e0', color: '#333', fontSize: fs(13) }}>
                    {row[col] !== null && row[col] !== undefined ? String(row[col]) : '-'}
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

export default DataWidget;
