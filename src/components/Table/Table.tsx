import React, { useState, useEffect } from 'react';
import { FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';

export interface Column {
  id: string;
  name: string;
  type: 'text' | 'number' | 'select' | 'checkbox' | 'date' | 'email' | 'formula' | 'place' | 'url' | 'id' | 'createdTime' | 'lastEditedTime' | 'button' | 'files';
  options?: { value: string; color: string }[];
  color?: string;
}

export interface RowData {
  id: string;
  [key: string]: any;
}

export interface TableProps {
  columns: Column[];
  initialData: RowData[];
}

const styles: { [key: string]: React.CSSProperties } = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    color: '#333333',
    border: '2px solid #e1e5e9',
  },
  th: {
    padding: '8px 12px',
    textAlign: 'left',
    cursor: 'pointer',
    color: '#666666',
    backgroundColor: '#f8f9fa',
    borderRight: '1px solid #e1e5e9',
    borderBottom: '2px solid #e1e5e9',
    fontWeight: '600',
    fontSize: '13px',
    maxWidth: "100px"
  },
  td: {
    padding: '8px 12px',
    border: "1px solid #cececeff",
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    backgroundColor: '#ffffff',
    color: '#333333',
    fontSize: '14px',
    maxWidth: "200px",
    verticalAlign: 'top'
  },
  tr: {
    transition: 'background-color 0.1s',
    cursor: 'pointer'
  },
  trHover: {
    backgroundColor: '#f5f5f5',
  },
  button: {
    borderRadius: '8px',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: 'inherit',
    backgroundColor: '#989898',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
  },
};

const getISTTime = () => {
  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
};

const evaluateFormula = (formula: string, rowData: RowData, columns: Column[]): string => {
  if (!formula || typeof formula !== 'string') return '';
  
  try {
    let expression = formula;
    const columnRefs = expression.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    
    if (columnRefs) {
      columnRefs.forEach(ref => {
        const columnName = ref.slice(1, -1);
        const column = columns.find(col => col.name === columnName);
        if (column && rowData[column.id] !== null && rowData[column.id] !== undefined) {
          const value = parseFloat(rowData[column.id]) || 0;
          expression = expression.replace(ref, value.toString());
        } else {
          expression = expression.replace(ref, '0');
        }
      });
    }
    
    if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
      return 'Invalid formula';
    }
    
    const result = Function('"use strict"; return (' + expression + ')')();
    return isNaN(result) ? 'Error' : result.toString();
  } catch (error) {
    return 'Error';
  }
};

export default function Table({ columns: initialColumns, initialData }: TableProps) {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [data, setData] = useState<RowData[]>(initialData);
  const [editCell, setEditCell] = useState<{ rowId: string; colId: string } | null>(null);
  const [editHeader, setEditHeader] = useState<string | null>(null);
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(new Set());
  const [showColumnMenu, setShowColumnMenu] = useState(false);
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const [emailErrors, setEmailErrors] = useState<Set<string>>(new Set());
  const [columnHeaderMenu, setColumnHeaderMenu] = useState<string | null>(null);
  const [newColumnName, setNewColumnName] = useState('');
  const [copiedCell, setCopiedCell] = useState<{ rowId: string; colId: string; value: any } | null>(null);
  const [addingOption, setAddingOption] = useState<{ columnId: string; rowId: string } | null>(null);
  const [newOptionValue, setNewOptionValue] = useState('');
  const [columnFilters, setColumnFilters] = useState<{ [columnId: string]: string }>({});
  const [showFilterMenu, setShowFilterMenu] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: 'ascending' | 'descending' }>({ key: null, direction: 'ascending' });
  const [columnWidths] = useState<{ [columnId: string]: number }>({});

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowTypeMenu(false);
      setShowColumnMenu(false);
      setColumnHeaderMenu(null);
      setShowFilterMenu(null);
      setCopiedCell(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setCopiedCell(null);
        setEditCell(null);
      } else if (editCell && (e.ctrlKey || e.metaKey)) {
        if (e.key === 'c') {
          e.preventDefault();
          const rowData = data.find(row => row.id === editCell.rowId);
          if (rowData) {
            setCopiedCell({ 
              rowId: editCell.rowId, 
              colId: editCell.colId, 
              value: rowData[editCell.colId] 
            });
          }
        } else if (e.key === 'v' && copiedCell) {
          e.preventDefault();
          updateCell(editCell.rowId, editCell.colId, copiedCell.value);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [editCell, copiedCell, data]);

  const addRow = () => {
    const currentTime = getISTTime();
    const rowId = `row-${Date.now()}`;
    const newRow: RowData = {
      id: rowId,
      ...columns.reduce((acc, col) => ({ 
        ...acc, 
        [col.id]: col.type === 'createdTime' ? currentTime : 
                 col.type === 'lastEditedTime' ? currentTime : 
                 col.type === 'formula' ? '' : 
                 col.type === 'id' ? rowId : null 
      }), {})
    };
    setData([...data, newRow]);
  };

  const deleteRow = (rowId: string) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      setData(data.filter(row => row.id !== rowId));
    }
  };

  const updateCell = (rowId: string, colId: string, value: any) => {
    const currentTime = getISTTime();
    const column = columns.find(col => col.id === colId);
    
    if (column?.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const cellKey = `${rowId}-${colId}`;
      if (!emailRegex.test(value)) {
        setEmailErrors(prev => new Set(prev).add(cellKey));
      } else {
        setEmailErrors(prev => {
          const newSet = new Set(prev);
          newSet.delete(cellKey);
          return newSet;
        });
      }
    }
    
    setData(data.map(row => {
      if (row.id === rowId) {
        const updatedRow = { ...row, [colId]: value };
        columns.forEach(col => {
          if (col.type === 'lastEditedTime') {
            updatedRow[col.id] = currentTime;
          }
        });
        return updatedRow;
      }
      return row;
    }));
    setEditCell(null);
  };

  const addColumn = (type: Column['type'] = 'text', defaultName?: string) => {
    const newColId = `col-${Date.now()}`;
    const currentTime = getISTTime();
    const typeName = defaultName || type.charAt(0).toUpperCase() + type.slice(1);
    const newColumn: Column = {
      id: newColId,
      name: newColumnName.trim() || typeName,
      type,
      options: type === 'select' ? [
        { value: 'To Do', color: '#ff6b6b' },
        { value: 'In Progress', color: '#ffd93d' },
        { value: 'Done', color: '#6bcf7f' }
      ] : undefined
    };
    setColumns([...columns, newColumn]);
    setData(data.map(row => ({ 
      ...row, 
      [newColId]: type === 'createdTime' || type === 'lastEditedTime' ? currentTime : 
                 type === 'formula' ? '' : 
                 type === 'id' ? row.id : null 
    })));
    
    setShowTypeMenu(false);
    setNewColumnName('');
  };

  const updateColumnName = (colId: string, newName: string) => {
    setColumns(columns.map(col => col.id === colId ? { ...col, name: newName } : col));
    setEditHeader(null);
  };

  const toggleColumnVisibility = (colId: string) => {
    setHiddenColumns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(colId)) {
        newSet.delete(colId);
      } else {
        newSet.add(colId);
      }
      return newSet;
    });
    setColumnHeaderMenu(null);
  };

  const deleteColumn = (colId: string) => {
    setColumns(columns.filter(col => col.id !== colId));
    setData(data.map(row => {
      const { [colId]: _, ...rest } = row;
      return rest as RowData;
    }));
    setColumnHeaderMenu(null);
  };

  const duplicateColumn = (colId: string) => {
    const originalColumn = columns.find(col => col.id === colId);
    if (!originalColumn) return;
    
    const originalIndex = columns.findIndex(col => col.id === colId);
    const newColId = `col-${Date.now()}`;
    const duplicatedColumn: Column = {
      ...originalColumn,
      id: newColId,
      name: `${originalColumn.name} Copy`
    };
    
    const newColumns = [...columns];
    newColumns.splice(originalIndex + 1, 0, duplicatedColumn);
    setColumns(newColumns);
    
    setData(data.map(row => ({ 
      ...row, 
      [newColId]: row[colId] 
    })));
    
    setColumnHeaderMenu(null);
  };

  const addOptionToColumn = (columnId: string, optionValue: string, rowId: string) => {
    if (!optionValue.trim()) return;
    
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    setColumns(columns.map(col => {
      if (col.id === columnId && col.type === 'select') {
        const existingOptions = col.options || [];
        const optionExists = existingOptions.some(opt => opt.value.toLowerCase() === optionValue.toLowerCase());
        
        if (!optionExists) {
          return {
            ...col,
            options: [...existingOptions, { value: optionValue, color: randomColor }]
          };
        }
      }
      return col;
    }));
    
    updateCell(rowId, columnId, optionValue);
    setAddingOption(null);
    setNewOptionValue('');
  };



  const visibleColumns = columns.filter(col => !hiddenColumns.has(col.id));

  const filteredData = sortedData.filter(row => {
    return Object.entries(columnFilters).every(([columnId, filterValue]) => {
      if (!filterValue.trim()) return true;
      const cellValue = row[columnId];
      if (cellValue === null || cellValue === undefined) return false;
      return String(cellValue).toLowerCase().includes(filterValue.toLowerCase());
    });
  });

  const getSortIndicator = (columnId: string) => {
    if (sortConfig.key === columnId) {
      return sortConfig.direction === 'ascending' ? '▲' : '▼';
    }
    return '↕';
  };

  const getColumnStyles = (column: Column) => {
    const baseColor = column.color || '#f8f9fa';
    const width = columnWidths[column.id] || 150;
    return {
      th: {
        ...styles.th,
        backgroundColor: baseColor,
        color: column.color && column.color !== '#f8f9fa' ? '#ffffff' : '#666666',
        width: `${width}px`,
        minWidth: `${width}px`,
        maxWidth: `${width}px`
      },
      td: {
        ...styles.td,
        backgroundColor: column.color ? `${baseColor}33` : '#ffffff',
        width: `${width}px`,
        minWidth: `${width}px`,
        maxWidth: `${width}px`
      }
    };
  };

  const renderCellContent = (column: Column, value: any, rowId: string, isEditing: boolean) => {
    const cellKey = `${rowId}-${column.id}`;
    const hasEmailError = emailErrors.has(cellKey);
    
    if (isEditing) {
      switch (column.type) {
        case 'checkbox':
          return <input type="checkbox" checked={!!value} onChange={(e) => updateCell(rowId, column.id, e.target.checked)} autoFocus style={{ outline: 'none', accentColor: '#d3d3d3' }} />;
        case 'select':
          return (
            <div style={{ position: 'relative' }}>
              <select 
                value={value || ''} 
                onChange={(e) => {
                  if (e.target.value === '__add_new__') {
                    setAddingOption({ columnId: column.id, rowId });
                    setNewOptionValue('');
                  } else if (e.target.value === '__manage_options__') {
                    // Options management removed for simplicity
                  } else {
                    updateCell(rowId, column.id, e.target.value);
                  }
                }} 
                autoFocus 
                onBlur={() => setEditCell(null)} 
                style={{ border: 'none', backgroundColor: '#ffffff', color: '#000000', outline: 'none', width: '100%' }}
              >
                <option value="">Select...</option>
                {column.options?.map(opt => <option key={opt.value} value={opt.value}>{opt.value}</option>)}
                <option value="__add_new__" style={{ color: '#007bff', fontStyle: 'italic' }}>+ Add option</option>
                <option value="__manage_options__" style={{ color: '#ff6b6b', fontStyle: 'italic' }}> Edit options</option>
              </select>
            </div>
          );
        case 'date':
          return (
            <input 
              type="date" 
              defaultValue={value || ''} 
              onBlur={(e) => updateCell(rowId, column.id, e.target.value)} 
              autoFocus 
              style={{outline: 'none', color: '#000000', backgroundColor: '#ffffff', border: 'none' }}
            />
          );
        case 'email':
          return (
            <div>
              <input 
                type="email" 
                defaultValue={value || ''} 
                onBlur={(e) => updateCell(rowId, column.id, e.target.value)} 
                autoFocus 
                style={{ 
                  width: '100%', 
                  border: 'none', 
                  backgroundColor: '#ffffff', 
                  color: '#000000', 
                  outline: 'none'
                }} 
              />
              {hasEmailError && (
                <span style={{ color: '#ff6b6b', fontSize: '11px' }}>⚠ Invalid email</span>
              )}
            </div>
          );
        case 'number':
          return (
            <input 
              type="text" 
              defaultValue={value || ''} 
              onBlur={(e) => updateCell(rowId, column.id, e.target.value)} 
              autoFocus 
              style={{ 
                width: '100%', 
                border: 'none', 
                backgroundColor: '#ffffff', 
                color: '#000000', 
                outline: 'none'
              }} 
            />
          );
        default:
          return (
            <input 
              type="text" 
              defaultValue={value || ''} 
              onBlur={(e) => updateCell(rowId, column.id, e.target.value)} 
              autoFocus 
              style={{ 
                width: '100%', 
                border: 'none', 
                backgroundColor: '#ffffff', 
                color: '#000000', 
                outline: 'none'
              }} 
            />
          );
      }
    }

    if (value === null || value === undefined) return <span style={{ color: '#aaa' }}></span>;

    switch (column.type) {
      case 'checkbox':
        return <input type="checkbox" checked={!!value} readOnly style={{ accentColor: '#d3d3d3' }} />;
      case 'date':
        return new Date(value).toLocaleDateString('en-GB');
      case 'createdTime':
      case 'lastEditedTime':
        return <span style={{ color: '#888' }}>{value}</span>;
      case 'select':
        const option = column.options?.find(opt => opt.value === value);
        return option ? (
          <span style={{
            backgroundColor: option.color + '33',
            color: option.color,
            padding: '2px 6px',
            borderRadius: '4px',
            fontWeight: '600',
          }}>
            {value}
          </span>
        ) : (
          value
        );
      case 'number':
        return <span style={{ textAlign: 'right', display: 'block' }}>{Number(value).toLocaleString()}</span>;
      case 'email':
        return (
          <div>
            {value}
            {hasEmailError && (
              <span style={{ color: '#ff6b6b', fontSize: '11px', marginLeft: '5px' }}>⚠ Invalid email</span>
            )}
          </div>
        );
      case 'formula':
        const currentRow = data.find(row => row.id === rowId);
        const formulaResult = currentRow ? evaluateFormula(value, currentRow, columns) : 'Error';
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#007bff', fontWeight: '500' }}>{formulaResult}</span>
            <span style={{ color: '#888', fontSize: '10px' }} title={value}>Σ</span>
          </div>
        );
      case 'id':
        return <span style={{ color: '#888', fontFamily: 'monospace', fontSize: '12px' }}>{value}</span>;
      default:
        return value;
    }
  };

  return (
    <>
      {addingOption && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            minWidth: '300px'
          }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>Add new option</h3>
            <input
              type="text"
              value={newOptionValue}
              onChange={(e) => setNewOptionValue(e.target.value)}
              placeholder="Enter option name"
              autoFocus
              style={{
                width: '90%',
                padding: '8px 12px',
                border: '1px solid #e1e5e9',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                marginBottom: '15px'
              }}
            />
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setAddingOption(null);
                  setNewOptionValue('');
                }}
                style={{
                  padding: '6px 12px',
                  border: '1px solid #e1e5e9',
                  borderRadius: '4px',
                  backgroundColor: 'red',
                  color: '#ffffffff',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => addOptionToColumn(addingOption.columnId, newOptionValue, addingOption.rowId)}
                disabled={!newOptionValue.trim()}
                style={{
                  padding: '6px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: newOptionValue.trim() ? '#007bff' : '#ccc',
                  color: 'white',
                  cursor: newOptionValue.trim() ? 'pointer' : 'not-allowed',
                  fontSize: '14px'
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ 
              ...styles.th, 
              width: '40px'
            }}></th>
            {visibleColumns.map((column) => {
              const isEditingHeader = editHeader === column.id;
              return (
                <th
                  key={column.id}
                  style={{ 
                    ...getColumnStyles(column).th,
                    position: 'relative'
                  }}
                  title={`Sort by ${column.name}`}
                >
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (e.detail === 1) {
                        setShowTypeMenu(false);
                        setShowColumnMenu(false);
                        setColumnHeaderMenu(columnHeaderMenu === column.id ? null : column.id);
                      } else if (e.detail === 2) {
                        setEditHeader(column.id);
                        setColumnHeaderMenu(null);
                      }
                    }}
                  >
                    {isEditingHeader ? (
                      <input
                        type="text"
                        defaultValue={column.name}
                        onBlur={(e) => updateColumnName(column.id, e.target.value)}
                        autoFocus
                        style={{ width: '100%', border: 'none', background: 'transparent', color: 'inherit', fontWeight: '500', outline: 'none' }}
                      />
                    ) : (
                      <>
                        <span style={{ cursor: 'pointer', flex: 1, paddingRight: "2px" }}>
                          {column.name}
                        </span>
                        <span 
                          style={{ fontSize: '12px', cursor: 'pointer' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            requestSort(column.id);
                          }}
                        >
                          {getSortIndicator(column.id)}
                        </span>
                      </>
                    )}
                  </div>
                  {columnHeaderMenu === column.id && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#ffffff',
                      border: '1px solid #e1e5e9',
                      borderRadius: '4px',
                      padding: '4px',
                      zIndex: 1000,
                      minWidth: '120px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      <div 
                        style={{ padding: '6px 8px', cursor: 'pointer', color: '#333333' }} 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowFilterMenu(showFilterMenu === column.id ? null : column.id);
                        }}
                      >
                        Filter
                        {showFilterMenu === column.id && (
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: '100%',
                            backgroundColor: '#ffffff',
                            border: '1px solid #e1e5e9',
                            borderRadius: '4px',
                            padding: '8px',
                            minWidth: '200px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            zIndex: 1001
                          }}>
                            <input
                              type="text"
                              placeholder={`Filter ${column.name}...`}
                              value={columnFilters[column.id] || ''}
                              onChange={(e) => {
                                setColumnFilters(prev => ({
                                  ...prev,
                                  [column.id]: e.target.value
                                }));
                              }}
                              style={{
                                width: '90%',
                                padding: '6px 8px',
                                border: '1px solid #e1e5e9',
                                borderRadius: '4px',
                                fontSize: '14px',
                                outline: 'none'
                              }}
                              autoFocus
                            />
                          </div>
                        )}
                      </div>
                      <div 
                        style={{ padding: '6px 8px', cursor: 'pointer', color: '#333333' }} 
                        onClick={(e) => {
                          e.stopPropagation();
                          duplicateColumn(column.id);
                        }}
                      >
                        Duplicate
                      </div>
                      <div 
                        style={{ padding: '6px 8px', cursor: 'pointer', color: '#333333' }} 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleColumnVisibility(column.id);
                        }}
                      >
                        Hide
                      </div>
                      <div 
                        style={{ padding: '6px 8px', cursor: 'pointer', color: '#ff6b6b' }} 
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteColumn(column.id);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  )}
                </th>
              );
            })}
            <th
              style={{ 
                ...styles.th, 
                color: '#aaa', 
                cursor: 'pointer', 
                position: 'relative',
                minWidth: '100px'
              }}
            >
              <button onClick={(e) => { e.stopPropagation(); setColumnHeaderMenu(null); setShowColumnMenu(false); setShowTypeMenu(!showTypeMenu); }} title="Add column" style={{...styles.button, marginRight: '5px', cursor: 'pointer', color: '#000000ff', backgroundColor: '#cbc9c9ff' }}>+</button>
              <button onClick={(e) => { e.stopPropagation(); setColumnHeaderMenu(null); setShowTypeMenu(false); setShowColumnMenu(!showColumnMenu); }} style={{ ...styles.button, cursor: 'pointer', color: '#000000ff', backgroundColor: '#cbc9c9ff' }}>...</button>
              {showTypeMenu && (
                <div onClick={(e) => e.stopPropagation()} style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  backgroundColor: '#ffffff',
                  border: '1px solid #e1e5e9',
                  borderRadius: '4px',
                  padding: '8px',
                  zIndex: 1000,
                  minWidth: '180px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <input
                    type="text"
                    placeholder="Column name"
                    value={newColumnName}
                    onChange={(e) => setNewColumnName(e.target.value)}
                    style={{
                      width: '90%',
                      padding: '6px 8px',
                      marginBottom: '8px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e1e5e9',
                      borderRadius: '4px',
                      color: '#333333',
                      fontSize: '14px'
                    }}
                  />
                  <div style={{ padding: '4px 8px', color: '#666666', fontSize: '12px' }}>Select type</div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('text')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>≡</span> Text
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('number')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>#</span> Number
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('select')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>⊙</span> Select
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('checkbox')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>☑</span> Checkbox
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('date')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>📅</span> Date
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('email')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>@</span> Email
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('formula', 'Formula')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>Σ</span> Formula
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('id', 'ID')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>№</span> ID
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('createdTime', 'Created time')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>🕐</span> Created time
                  </div>
                  <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('lastEditedTime', 'Last edited time')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ marginRight: '8px' }}>🕐</span> Last edited time
                  </div>
                </div>
              )}
              {showColumnMenu && (
                <div onClick={(e) => e.stopPropagation()} style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  backgroundColor: '#ffffff',
                  border: '1px solid #e1e5e9',
                  borderRadius: '4px',
                  padding: '8px',
                  zIndex: 1000,
                  minWidth: '200px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Columns</div>
                  {columns.map(col => (
                    <div 
                      key={col.id} 
                      style={{ 
                        padding: '4px 8px', 
                        cursor: 'pointer', 
                        color: '#333333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '13px'
                      }} 
                      onClick={() => toggleColumnVisibility(col.id)}
                    >
                      <span>{col.name}</span>
                      <span style={{ fontSize: '14px' }}>
                        {hiddenColumns.has(col.id) ? <FaEyeSlash/> : <FaEye/>}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </th>
          </tr>
          <tr>
            <th style={{ 
              ...styles.th, 
              width: '40px',
              padding: '4px'
            }}></th>
            {visibleColumns.map((column) => (
              <th
                key={`search-${column.id}`}
                style={{ 
                  ...getColumnStyles(column).th, 
                  padding: '4px 8px'
                }}
              >
                <input
                  type="text"
                  placeholder={`Search...`}
                  value={columnFilters[column.id] || ''}
                  onChange={(e) => {
                    setColumnFilters(prev => ({
                      ...prev,
                      [column.id]: e.target.value
                    }));
                  }}
                  style={{
                    width: '90%',
                    padding: '4px 6px',
                    border: '1px solid #e1e5e9',
                    borderRadius: '4px',
                    fontSize: '12px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    color: '#333333'
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </th>
            ))}
            <th style={{ 
              ...styles.th, 
              padding: '4px'
            }}></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr
              key={row.id}
              style={{
                ...styles.tr,
                backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor!;
              }}
              onMouseLeave={(e) => {
                const originalColor = index % 2 === 0 ? '#f8f9fa' : '#ffffff';
                e.currentTarget.style.backgroundColor = originalColor;
              }}
            >
              <td style={{ 
                ...styles.td, 
                textAlign: 'center', 
                color: '#aaa'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ cursor: 'grab', fontSize: '12px', color: '#999' }}>⋮⋮</span>
                  <button onClick={(e) => { e.stopPropagation(); deleteRow(row.id); }} style={{...styles.button, cursor: 'pointer', color: '#c80000ff', backgroundColor: '#cbc9c9ff' }} title="Delete row"><FaTrash/></button>
                </div>
              </td>
              {visibleColumns.map((column) => {
                const isEditing = editCell?.rowId === row.id && editCell?.colId === column.id;
                return (
                  <td
                    key={column.id}
                    style={{
                      ...getColumnStyles(column).td,
                      userSelect: 'none',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditCell({ rowId: row.id, colId: column.id });
                    }}
                  >
                    {renderCellContent(column, row[column.id], row.id, isEditing)}
                  </td>
                );
              })}
              <td style={styles.td}></td>
            </tr>
          ))}
          <tr>
            <td colSpan={visibleColumns.length + 2} style={{ 
              ...styles.td, 
              textAlign: 'center', 
              color: '#aaa', 
              cursor: 'pointer'
            }} onClick={addRow}>
              + Add Row
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}