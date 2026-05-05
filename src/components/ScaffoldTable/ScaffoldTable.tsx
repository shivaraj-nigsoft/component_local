import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { MdViewColumn, MdTableRows } from 'react-icons/md';

export interface ScaffoldColumn {
  id: string;
  name: string;
  type: 'text' | 'number' | 'select' | 'date' | 'checkbox';
  options?: string[];
  width?: number;
}

export interface ScaffoldRowData {
  id: string;
  [key: string]: any;
}

export interface ScaffoldTableProps {
  initialRows?: number;
  initialCols?: number;
  rows?: number;
  cols?: number;
}

const ScaffoldTable: React.FC<ScaffoldTableProps> = ({
  initialRows = 3,
  initialCols = 4,
  rows: propRows,
  cols: propCols
}) => {
  const [rows, setRows] = useState(propRows || initialRows);
  const [cols, setCols] = useState(propCols || initialCols);
  const [cellData, setCellData] = useState<{ [key: string]: string }>({});
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [editingCell, setEditingCell] = useState<{ row: number; col: number } | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

  const getCellKey = (row: number, col: number) => `${row}-${col}`;
  const getCellValue = (row: number, col: number) => cellData[getCellKey(row, col)] || '';

  const updateCell = (row: number, col: number, value: string) => {
    setCellData(prev => ({ ...prev, [getCellKey(row, col)]: value }));
  };

  const addRow = () => setRows(prev => prev + 1);
  const addColumn = () => setCols(prev => prev + 1);
  const deleteRow = () => rows > 1 && setRows(prev => prev - 1);
  const deleteColumn = () => cols > 1 && setCols(prev => prev - 1);

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({ row, col });
  };

  const handleCellDoubleClick = (row: number, col: number) => {
    setEditingCell({ row, col });
  };

  const handleInputBlur = () => {
    setEditingCell(null);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setEditingCell(null);
    }
  };

  const renderCell = (row: number, col: number) => {
    const isEditing = editingCell?.row === row && editingCell?.col === col;
    const value = getCellValue(row, col);

    if (isEditing) {
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => updateCell(row, col, e.target.value)}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          autoFocus
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: '14px',
            padding: '8px',
            textAlign: 'center'
          }}
        />
      );
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px',
          fontSize: '14px',
          color: value ? '#1a1a1a' : '#9ca3af',
          cursor: 'pointer',
          position: 'relative',
          minHeight: '60px'
        }}
      >
        {value || (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaPlus size={10} style={{ opacity: 0.5 }} />
            <span style={{ fontSize: '12px' }}>Click to edit</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
        padding: '12px 16px',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <button
          onClick={addRow}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          <MdTableRows size={14} />
          Add Row
        </button>
        
        <button
          onClick={addColumn}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
        >
          <MdViewColumn size={14} />
          Add Column
        </button>

        <div style={{ width: '1px', height: '24px', backgroundColor: '#e2e8f0' }} />

        <button
          onClick={deleteRow}
          disabled={rows <= 1}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            backgroundColor: rows <= 1 ? '#f1f5f9' : '#ef4444',
            color: rows <= 1 ? '#94a3b8' : 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: rows <= 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if (rows > 1) e.currentTarget.style.backgroundColor = '#dc2626';
          }}
          onMouseLeave={(e) => {
            if (rows > 1) e.currentTarget.style.backgroundColor = '#ef4444';
          }}
        >
          <FaTrash size={12} />
          Delete Row
        </button>

        <button
          onClick={deleteColumn}
          disabled={cols <= 1}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            backgroundColor: cols <= 1 ? '#f1f5f9' : '#ef4444',
            color: cols <= 1 ? '#94a3b8' : 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: cols <= 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if (cols > 1) e.currentTarget.style.backgroundColor = '#dc2626';
          }}
          onMouseLeave={(e) => {
            if (cols > 1) e.currentTarget.style.backgroundColor = '#ef4444';
          }}
        >
          <FaTrash size={12} />
          Delete Column
        </button>

        <div style={{ marginLeft: 'auto', fontSize: '13px', color: '#64748b' }}>
          {rows} × {cols} grid
        </div>
      </div>

      {/* Table Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: '2px',
        backgroundColor: '#e2e8f0',
        borderRadius: '8px',
        padding: '2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        {Array.from({ length: rows * cols }, (_, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          const isSelected = selectedCell?.row === row && selectedCell?.col === col;
          const isHovered = hoveredCell?.row === row && hoveredCell?.col === col;
          
          return (
            <div
              key={getCellKey(row, col)}
              onClick={() => handleCellClick(row, col)}
              onDoubleClick={() => handleCellDoubleClick(row, col)}
              onMouseEnter={() => setHoveredCell({ row, col })}
              onMouseLeave={() => setHoveredCell(null)}
              style={{
                backgroundColor: isSelected ? '#dbeafe' : isHovered ? '#f1f5f9' : '#ffffff',
                borderRadius: '6px',
                border: isSelected ? '2px solid #3b82f6' : '2px solid transparent',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {renderCell(row, col)}
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div style={{
        marginTop: '16px',
        padding: '12px 16px',
        backgroundColor: '#f8fafc',
        borderRadius: '6px',
        fontSize: '13px',
        color: '#64748b',
        textAlign: 'center'
      }}>
        Click to select • Double-click to edit • Use toolbar to modify structure
      </div>
    </div>
  );
};

export default ScaffoldTable;