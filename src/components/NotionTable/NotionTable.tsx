import React, { useState, useEffect } from 'react';
import { FaTrash ,FaEye, FaEyeSlash } from 'react-icons/fa';
import { SlArrowDownCircle,SlArrowRightCircle } from "react-icons/sl";
import { FiDownload } from "react-icons/fi";
import {
  Column,
  RowData,
  NotionTableProps,
//   SortConfig,
} from './types'; // Assuming you put interfaces in types.ts
import { useSortableData } from './sortable-hook'; // Assuming you put the hook in sortable-hook.ts

// --- Inline CSS for a minimal, Notion-like look ---
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
    maxWidth:"100px"
  },
  td: {
    padding: '8px 12px',
    border:"1px solid #cececeff",
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    backgroundColor: '#ffffff',
    color: '#333333',
    fontSize: '14px',
    maxWidth:"200px",
    verticalAlign: 'top'
  },
  tr: {
    transition: 'background-color 0.1s',
      cursor: 'pointer'
  },
  trHover: {
    backgroundColor: '#f5f5f5',
  },
  // Basic icon for sort direction
  sortIcon: {
    marginLeft: '5px',
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

// Simple formula evaluator for mathematical expressions
const evaluateFormula = (formula: string, rowData: RowData, columns: Column[]): string => {
  if (!formula || typeof formula !== 'string') return '';
  
  try {
    // Replace column references with actual values
    let expression = formula;
    
    // Find column references in format [ColumnName] or {ColumnName}
    const columnRefs = expression.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    
    if (columnRefs) {
      columnRefs.forEach(ref => {
        const columnName = ref.slice(1, -1); // Remove brackets
        const column = columns.find(col => col.name === columnName);
        if (column && rowData[column.id] !== null && rowData[column.id] !== undefined) {
          const value = parseFloat(rowData[column.id]) || 0;
          expression = expression.replace(ref, value.toString());
        } else {
          expression = expression.replace(ref, '0');
        }
      });
    }
    
    // Basic math operations - only allow safe characters
    if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
      return 'Invalid formula';
    }
    
    // Evaluate the expression
    const result = Function('"use strict"; return (' + expression + ')')();
    return isNaN(result) ? 'Error' : result.toString();
  } catch (error) {
    return 'Error';
  }
};

const NotionTable: React.FC<NotionTableProps> = ({ columns: initialColumns, initialData }) => {
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartCell, setDragStartCell] = useState<{ rowId: string; colId: string; value: any } | null>(null);
  const [draggedCells, setDraggedCells] = useState<Set<string>>(new Set());
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);
  const [draggedRow, setDraggedRow] = useState<string | null>(null);
  const [dragOverRow, setDragOverRow] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [subRows, setSubRows] = useState<{ [parentId: string]: RowData[] }>({});
  const [draggedSubRow, setDraggedSubRow] = useState<{ subRowId: string; parentId: string } | null>(null);
  const [dragOverSubRow, setDragOverSubRow] = useState<string | null>(null);
  const [copiedCell, setCopiedCell] = useState<{ rowId: string; colId: string; value: any } | null>(null);
  const [isSubRowDragging, setIsSubRowDragging] = useState(false);
  const [dragStartSubCell, setDragStartSubCell] = useState<{ rowId: string; colId: string; value: any; parentId: string } | null>(null);
  const [draggedSubCells, setDraggedSubCells] = useState<Set<string>>(new Set());
  const [addingOption, setAddingOption] = useState<{ columnId: string; rowId: string } | null>(null);
  const [newOptionValue, setNewOptionValue] = useState('');
  const [showOptionsMenu, setShowOptionsMenu] = useState<{ columnId: string; rowId: string } | null>(null);
  const [showColorPicker, setShowColorPicker] = useState<string | null>(null);
  const [columnFilters, setColumnFilters] = useState<{ [columnId: string]: string }>({});
  const [showFilterMenu, setShowFilterMenu] = useState<string | null>(null);
  const [oddRowColor, setOddRowColor] = useState<string>('#ffffff');
  const [evenRowColor, setEvenRowColor] = useState<string>('#f8f9fa');
  const [showOddColorPicker, setShowOddColorPicker] = useState(false);
  const [showEvenColorPicker, setShowEvenColorPicker] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [columnWidths, setColumnWidths] = useState<{ [columnId: string]: number }>({});
  const [isResizing, setIsResizing] = useState<string | null>(null);
  const [resizeStartX, setResizeStartX] = useState(0);
  const [resizeStartWidth, setResizeStartWidth] = useState(0);
  
  const {
    items: sortedData,
    sortConfig,
    requestSort,
  } = useSortableData(data, { key: null, direction: 'ascending' });

  useEffect(() => {
    const handleClickOutside = () => {
      setShowTypeMenu(false);
      setShowColumnMenu(false);
      setColumnHeaderMenu(null);
      setShowFilterMenu(null);
      setShowOddColorPicker(false);
      setShowEvenColorPicker(false);
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
          const rowData = data.find(row => row.id === editCell.rowId) || 
                         Object.values(subRows).flat().find(row => row.id === editCell.rowId);
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
          // Don't clear copiedCell to allow pasting to multiple cells
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [editCell, copiedCell, data, subRows]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (addingOption && e.key === 'Enter') {
        e.preventDefault();
        addOptionToColumn(addingOption.columnId, newOptionValue, addingOption.rowId);
      } else if (addingOption && e.key === 'Escape') {
        setAddingOption(null);
        setNewOptionValue('');
      }
    };

    if (addingOption) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [addingOption, newOptionValue]);

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
    
    // Check if it's a sub-row
    if (rowId.startsWith('subrow-')) {
      const parentId = rowId.split('-')[1];
      setSubRows(prev => ({
        ...prev,
        [parentId]: prev[parentId]?.map(subRow => {
          if (subRow.id === rowId) {
            const updatedSubRow = { ...subRow, [colId]: value };
            columns.forEach(col => {
              if (col.type === 'lastEditedTime') {
                updatedSubRow[col.id] = currentTime;
              }
            });
            return updatedSubRow;
          }
          return subRow;
        }) || []
      }));
    } else {
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
    }
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
    
    // Update existing sub-rows with the new column
    const updatedSubRows = { ...subRows };
    Object.keys(updatedSubRows).forEach(parentId => {
      updatedSubRows[parentId] = updatedSubRows[parentId].map(subRow => ({
        ...subRow,
        [newColId]: type === 'createdTime' || type === 'lastEditedTime' ? currentTime : 
                   type === 'formula' ? '' : 
                   type === 'id' ? subRow.id : null
      }));
    });
    setSubRows(updatedSubRows);
    
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
    
    // Duplicate data in sub-rows too
    const updatedSubRows = { ...subRows };
    Object.keys(updatedSubRows).forEach(parentId => {
      updatedSubRows[parentId] = updatedSubRows[parentId].map(subRow => ({
        ...subRow,
        [newColId]: subRow[colId]
      }));
    });
    setSubRows(updatedSubRows);
    
    setColumnHeaderMenu(null);
  };

  const handleDragStart = (rowId: string, colId: string, value: any) => {
    setIsDragging(true);
    setDragStartCell({ rowId, colId, value });
    setDraggedCells(new Set([`${rowId}-${colId}`]));
  };

  const handleDragEnter = (rowId: string, colId: string) => {
    if (isDragging && dragStartCell && dragStartCell.colId === colId) {
      setDraggedCells(prev => new Set(prev).add(`${rowId}-${colId}`));
    }
  };

  const handleDragEnd = () => {
    if (isDragging && dragStartCell) {
      const updatedData = data.map(row => {
        const cellKey = `${row.id}-${dragStartCell.colId}`;
        if (draggedCells.has(cellKey)) {
          return { ...row, [dragStartCell.colId]: dragStartCell.value };
        }
        return row;
      });
      setData(updatedData);
    }
    setIsDragging(false);
    setDragStartCell(null);
    setDraggedCells(new Set());
  };

  const handleColumnDragStart = (columnId: string) => {
    setDraggedColumn(columnId);
  };

  const handleColumnDragOver = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    setDragOverColumn(columnId);
  };

  const handleColumnDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    if (draggedColumn && draggedColumn !== targetColumnId) {
      const draggedIndex = columns.findIndex(col => col.id === draggedColumn);
      const targetIndex = columns.findIndex(col => col.id === targetColumnId);
      
      const newColumns = [...columns];
      const [draggedCol] = newColumns.splice(draggedIndex, 1);
      newColumns.splice(targetIndex, 0, draggedCol);
      
      setColumns(newColumns);
    }
    setDraggedColumn(null);
    setDragOverColumn(null);
  };

  const handleColumnDragEnd = () => {
    setDraggedColumn(null);
    setDragOverColumn(null);
  };

  const handleRowDragStart = (rowId: string) => {
    setDraggedRow(rowId);
  };

  const handleRowDragOver = (e: React.DragEvent, rowId: string) => {
    e.preventDefault();
    setDragOverRow(rowId);
  };

  const handleRowDrop = (e: React.DragEvent, targetRowId: string) => {
    e.preventDefault();
    if (draggedRow && draggedRow !== targetRowId) {
      const draggedIndex = data.findIndex(row => row.id === draggedRow);
      const targetIndex = data.findIndex(row => row.id === targetRowId);
      
      const newData = [...data];
      const [draggedRowData] = newData.splice(draggedIndex, 1);
      newData.splice(targetIndex, 0, draggedRowData);
      
      setData(newData);
    }
    setDraggedRow(null);
    setDragOverRow(null);
  };

  const handleRowDragEnd = () => {
    setDraggedRow(null);
    setDragOverRow(null);
  };

  const toggleRowExpansion = (rowId: string) => {
    const isCurrentlyExpanded = expandedRows.has(rowId);
    
    if (isCurrentlyExpanded) {
      setExpandedRows(prev => {
        const newSet = new Set(prev);
        newSet.delete(rowId);
        return newSet;
      });
    } else {
      setExpandedRows(prev => {
        const newSet = new Set(prev);
        newSet.add(rowId);
        return newSet;
      });
      
      if (!subRows[rowId] || subRows[rowId].length === 0) {
        addSubRow(rowId);
      }
    }
  };

  const addSubRow = (parentId: string) => {
    const currentTime = getISTTime();
    const subRowId = `subrow-${parentId}-${Date.now()}`;
    const newSubRow: RowData = {
      id: subRowId,
      ...columns.reduce((acc, col) => ({ 
        ...acc, 
        [col.id]: col.type === 'createdTime' ? currentTime : 
                 col.type === 'lastEditedTime' ? currentTime : 
                 col.type === 'formula' ? '' : 
                 col.type === 'id' ? subRowId : null 
      }), {})
    };
    setSubRows(prev => ({
      ...prev,
      [parentId]: [...(prev[parentId] || []), newSubRow]
    }));
  };

  const deleteSubRow = (parentId: string, subRowId: string) => {
    if (window.confirm('Are you sure you want to delete this sub-row?')) {
      setSubRows(prev => ({
        ...prev,
        [parentId]: prev[parentId]?.filter(row => row.id !== subRowId) || []
      }));
    }
  };

  const handleSubRowDragStart = (subRowId: string, parentId: string) => {
    setDraggedSubRow({ subRowId, parentId });
  };

  const handleSubRowDragOver = (e: React.DragEvent, subRowId: string) => {
    e.preventDefault();
    setDragOverSubRow(subRowId);
  };

  const handleSubRowDrop = (e: React.DragEvent, targetSubRowId: string, targetParentId: string) => {
    e.preventDefault();
    if (draggedSubRow && draggedSubRow.subRowId !== targetSubRowId && draggedSubRow.parentId === targetParentId) {
      const parentSubRows = subRows[targetParentId] || [];
      const draggedIndex = parentSubRows.findIndex(row => row.id === draggedSubRow.subRowId);
      const targetIndex = parentSubRows.findIndex(row => row.id === targetSubRowId);
      
      const newSubRows = [...parentSubRows];
      const [draggedSubRowData] = newSubRows.splice(draggedIndex, 1);
      newSubRows.splice(targetIndex, 0, draggedSubRowData);
      
      setSubRows(prev => ({
        ...prev,
        [targetParentId]: newSubRows
      }));
    }
    setDraggedSubRow(null);
    setDragOverSubRow(null);
  };

  const handleSubRowDragEnd = () => {
    setDraggedSubRow(null);
    setDragOverSubRow(null);
  };

  const handleSubCellDragStart = (rowId: string, colId: string, value: any, parentId: string) => {
    setIsSubRowDragging(true);
    setDragStartSubCell({ rowId, colId, value, parentId });
    setDraggedSubCells(new Set([`${rowId}-${colId}`]));
  };

  const handleSubCellDragEnter = (rowId: string, colId: string, parentId: string) => {
    if (isSubRowDragging && dragStartSubCell && dragStartSubCell.colId === colId && dragStartSubCell.parentId === parentId) {
      setDraggedSubCells(prev => new Set(prev).add(`${rowId}-${colId}`));
    }
  };

  const handleSubCellDragEnd = () => {
    if (isSubRowDragging && dragStartSubCell) {
      const parentId = dragStartSubCell.parentId;
      const currentTime = getISTTime();
      const updatedSubRows = {
        ...subRows,
        [parentId]: subRows[parentId]?.map(subRow => {
          const cellKey = `${subRow.id}-${dragStartSubCell.colId}`;
          if (draggedSubCells.has(cellKey)) {
            const updatedSubRow = { ...subRow, [dragStartSubCell.colId]: dragStartSubCell.value };
            columns.forEach(col => {
              if (col.type === 'lastEditedTime') {
                updatedSubRow[col.id] = currentTime;
              }
            });
            return updatedSubRow;
          }
          return subRow;
        }) || []
      };
      setSubRows(updatedSubRows);
    }
    setIsSubRowDragging(false);
    setDragStartSubCell(null);
    setDraggedSubCells(new Set());
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

  const deleteOptionFromColumn = (columnId: string, optionValue: string) => {
    setColumns(columns.map(col => {
      if (col.id === columnId && col.type === 'select') {
        return {
          ...col,
          options: col.options?.filter(opt => opt.value !== optionValue) || []
        };
      }
      return col;
    }));
    
    // Clear the value from all cells that have this option
    setData(data.map(row => {
      if (row[columnId] === optionValue) {
        return { ...row, [columnId]: null };
      }
      return row;
    }));
    
    // Clear from sub-rows too
    const updatedSubRows = { ...subRows };
    Object.keys(updatedSubRows).forEach(parentId => {
      updatedSubRows[parentId] = updatedSubRows[parentId].map(subRow => {
        if (subRow[columnId] === optionValue) {
          return { ...subRow, [columnId]: null };
        }
        return subRow;
      });
    });
    setSubRows(updatedSubRows);
  };

  const updateColumnColor = (columnId: string, color: string) => {
    setColumns(columns.map(col => 
      col.id === columnId ? { ...col, color } : col
    ));
    setShowColorPicker(null);
    setColumnHeaderMenu(null);
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

  const handleResizeStart = (e: React.MouseEvent, columnId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(columnId);
    setResizeStartX(e.clientX);
    setResizeStartWidth(columnWidths[columnId] || 150);
  };

  const handleResizeMove = (e: MouseEvent) => {
    if (!isResizing) return;
    const diff = e.clientX - resizeStartX;
    const newWidth = Math.max(50, resizeStartWidth + diff);
    setColumnWidths(prev => ({ ...prev, [isResizing]: newWidth }));
  };

  const handleResizeEnd = () => {
    setIsResizing(null);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
      return () => {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [isResizing, resizeStartX, resizeStartWidth]);

  const visibleColumns = columns.filter(col => !hiddenColumns.has(col.id));

  // Filter data based on column filters
  const filteredData = sortedData.filter(row => {
    return Object.entries(columnFilters).every(([columnId, filterValue]) => {
      if (!filterValue.trim()) return true;
      const cellValue = row[columnId];
      if (cellValue === null || cellValue === undefined) return false;
      return String(cellValue).toLowerCase().includes(filterValue.toLowerCase());
    });
  });

  const clearColumnFilter = (columnId: string) => {
    setColumnFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[columnId];
      return newFilters;
    });
  };

  // Function to determine the sort indicator
  const getSortIndicator = (columnId: string) => {
    if (sortConfig.key === columnId) {
      return sortConfig.direction === 'ascending' ? '▲' : '▼';
    }
    return '↕'; // Always show sort icon for unsorted columns
  };

  // --- RENDERING LOGIC (Cell Content based on Type) ---
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
                    setShowOptionsMenu({ columnId: column.id, rowId });
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
        case 'createdTime':
        case 'lastEditedTime':
          return <span style={{ color: '#888' }}>{value}</span>;
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
        case 'button':
          return (
            <input 
              type="text" 
              defaultValue={value || 'Click me'} 
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
        case 'files':
          return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => {
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.multiple = true;
                  input.accept = 'image/*,video/*';
                  input.onchange = (e) => {
                    const files = Array.from((e.target as HTMLInputElement).files || []);
                    const fileData = files.map(file => ({
                      name: file.name,
                      url: URL.createObjectURL(file),
                      type: file.type
                    }));
                    updateCell(rowId, column.id, fileData);
                  };
                  input.click();
                }}
                style={{
                  background: 'transparent',
                  color:"black",
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  padding: '4px',
                  outline: 'none'
                }}
                title="Upload files"
              >
               <FiDownload />
              </button>
            </div>
          );
        case 'number':
          return (
            <div>
              <input 
                type="text" 
                defaultValue={value || ''} 
                onBlur={(e) => updateCell(rowId, column.id, e.target.value)} 
                onKeyPress={(e) => {
                  if (column.name === 'Phone') {
                    const allowedChars = /[0-9]/;
                    if (!allowedChars.test(e.key) || e.currentTarget.value.replace(/\D/g, '').length >= 10) {
                      e.preventDefault();
                    }
                  } else {
                    const allowedChars = /[0-9\-+.,\s]/;
                    if (!allowedChars.test(e.key)) {
                      e.preventDefault();
                    }
                  }
                }}
                autoFocus 
                style={{ 
                  width: '100%', 
                  border: 'none', 
                  backgroundColor: '#ffffff', 
                  color: '#000000', 
                  outline: 'none'
                }} 
              />
            </div>
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
        case 'formula':
          return (
            <div>
              <input 
                type="text" 
                defaultValue={value || ''} 
                placeholder="e.g., [Column1] + [Column2] * 2"
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
            </div>
          );
        case 'place':
          return (
            <input 
              type="text" 
              defaultValue={value || ''} 
              placeholder="Enter location"
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
        case 'url':
          return (
            <input 
              type="url" 
              defaultValue={value || ''} 
              placeholder="Enter URL"
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
        case 'action':
          return (
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <button
                onClick={() => window.print()}
                style={{
                  padding: '4px 6px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '10px'
                }}
                title="Print"
              >
                🖨️
              </button>
              <button
                onClick={() => alert(`Viewing row ${rowId}`)}
                style={{
                  padding: '4px 6px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '10px'
                }}
                title="View"
              >
                👁️
              </button>
              <button
                onClick={() => alert(`Calling for row ${rowId}`)}
                style={{
                  padding: '4px 6px',
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '10px'
                }}
                title="Call"
              >
                📞
              </button>
            </div>
          );
        case 'id':
          return <span style={{ color: '#888', fontFamily: 'monospace' }}>{value}</span>;
        case 'text':
        default:
          return (
            <div>
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
              {hasEmailError && column.name === 'Email' && (
                <span style={{ color: '#ff6b6b', fontSize: '11px' }}>⚠ Invalid email</span>
              )}
            </div>
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
        return <span style={{ textAlign: 'right', display: 'block' }}>{column.name === 'Phone' ? value : Number(value).toLocaleString()}</span>;
      case 'button':
        return (
          <button 
            onClick={() => alert(`Button clicked in row ${rowId}!`)} 
            style={{
              padding: '4px 8px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            {value || 'Click me'}
          </button>
        );
      case 'files':
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', maxWidth: '200px', alignItems: 'center' }}>
            {Array.isArray(value) && value.length > 0 ? (
              value.map((file: any, index: number) => (
                <div key={index} style={{ position: 'relative' }}>
                  {file.type?.startsWith('image/') ? (
                    <img 
                      src={file.url} 
                      alt={file.name} 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        objectFit: 'cover', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }} 
                      onClick={() => window.open(file.url, '_blank')}
                      title={file.name}
                    />
                  ) : file.type?.startsWith('video/') ? (
                    <video 
                      src={file.url} 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        objectFit: 'cover', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }} 
                      onClick={() => window.open(file.url, '_blank')}
                      title={file.name}
                    />
                  ) : (
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        backgroundColor: '#f0f0f0', 
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        cursor: 'pointer'
                      }}
                      onClick={() => window.open(file.url, '_blank')}
                      title={file.name}
                    >
                      📄
                    </div>
                  )}
                </div>
              ))
            ) : null}
            <FiDownload 
              style={{ 
                fontSize: '16px', 
                color: '#666', 
                cursor: 'pointer',
                marginLeft: Array.isArray(value) && value.length > 0 ? '4px' : '0'
              }} 
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.multiple = true;
                input.accept = 'image/*,video/*';
                input.onchange = (e) => {
                  const files = Array.from((e.target as HTMLInputElement).files || []);
                  const fileData = files.map(file => ({
                    name: file.name,
                    url: URL.createObjectURL(file),
                    type: file.type
                  }));
                  const existingFiles = Array.isArray(value) ? value : [];
                  updateCell(rowId, column.id, [...existingFiles, ...fileData]);
                };
                input.click();
              }}
              title="Upload files"
            />
          </div>
        );
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
        const currentRow = data.find(row => row.id === rowId) || Object.values(subRows).flat().find(row => row.id === rowId);
        const formulaResult = currentRow ? evaluateFormula(value, currentRow, columns) : 'Error';
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#007bff', fontWeight: '500' }}>{formulaResult}</span>
            <span style={{ color: '#888', fontSize: '10px' }} title={value}>Σ</span>
          </div>
        );
      case 'place':
        return (
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              position: 'relative',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (value) {
                const tooltip = document.createElement('div');
                tooltip.innerHTML = `<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-y931Pk&q=${encodeURIComponent(value)}" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
                tooltip.style.cssText = 'position: absolute; top: -210px; left: 0; background: white; border: 1px solid #ccc; border-radius: 4px; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1000;';
                tooltip.id = `map-tooltip-${rowId}-${column.id}`;
                e.currentTarget.appendChild(tooltip);
              }
            }}
            onMouseLeave={() => {
              const tooltip = document.getElementById(`map-tooltip-${rowId}-${column.id}`);
              if (tooltip) {
                tooltip.remove();
              }
            }}
          >
            <span style={{ marginRight: '4px' }}>📍</span>
            <span>{value || 'No location'}</span>
          </div>
        );
      case 'url':
        return value ? (
          <a 
            href={value.startsWith('http') ? value : `https://${value}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#007bff',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            {value}
          </a>
        ) : (
          <span style={{ color: '#aaa' }}>No URL</span>
        );
      case 'action':
        return (
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <button
              onClick={() => window.print()}
              style={{
                padding: '4px 6px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '10px'
              }}
              title="Print"
            >
              🖨️
            </button>
            <button
              onClick={() => alert(`Viewing row ${rowId}`)}
              style={{
                padding: '4px 6px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '10px'
              }}
              title="View"
            >
              👁️
            </button>
            <button
              onClick={() => alert(`Calling for row ${rowId}`)}
              style={{
                padding: '4px 6px',
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '10px'
              }}
              title="Call"
            >
              📞
            </button>
          </div>
        );
      case 'id':
        return <span style={{ color: '#888', fontFamily: 'monospace', fontSize: '12px' }}>{value}</span>;
      case 'text':
      default:
        return (
          <div>
            {value}
            {hasEmailError && column.name === 'Email' && (
              <span style={{ color: '#ff6b6b', fontSize: '11px', marginLeft: '5px' }}>⚠ Invalid email</span>
            )}
          </div>
        );
    }
  };

  // --- COMPONENT RENDER ---
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
      {showOptionsMenu && (
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
            minWidth: '300px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>Manage Options</h3>
            <div style={{ marginBottom: '15px' }}>
              {columns.find(col => col.id === showOptionsMenu.columnId)?.options?.map(option => (
                <div key={option.value} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  marginBottom: '4px',
                  backgroundColor: option.color + '33',
                  borderRadius: '4px',
                  border: `1px solid ${option.color}44`
                }}>
                  <span style={{ color: option.color, fontWeight: '500' }}>{option.value}</span>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete option "${option.value}"? This will clear the value from all cells using this option.`)) {
                        deleteOptionFromColumn(showOptionsMenu.columnId, option.value);
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff6b6b',
                      cursor: 'pointer',
                      fontSize: '14px',
                      padding: '2px'
                    }}
                    title="Delete option"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowOptionsMenu(null)}
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
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            opacity: 1;
            width: 16px;
            height: 16px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="%23000000" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>');
            background-repeat: no-repeat;
            background-position:center;
            background-size: 12px 12px;
            outline: none;
            border: none;
           
          }
        
        `}
      </style>
      <table style={{
        ...styles.table,
        backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#333333',
        border: isDarkMode ? '2px solid #333' : '2px solid #e1e5e9'
      }}>
      <thead>
        <tr>
          <th style={{ 
            ...styles.th, 
            width: '40px',
            backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
            borderRight: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
            borderBottom: isDarkMode ? '2px solid #444' : '2px solid #e1e5e9'
          }}></th>
          {visibleColumns.map((column) => {
            const isEditingHeader = editHeader === column.id;
            return (
              <th
                key={column.id}
                draggable={!isResizing}
                onDragStart={() => !isResizing && handleColumnDragStart(column.id)}
                onDragOver={(e) => handleColumnDragOver(e, column.id)}
                onDrop={(e) => handleColumnDrop(e, column.id)}
                onDragEnd={handleColumnDragEnd}
                style={{ 
                  ...getColumnStyles(column).th, 
                  position: 'relative',
                  backgroundColor: dragOverColumn === column.id ? (isDarkMode ? '#444' : '#e3f2fd') : 
                                 isDarkMode ? '#2a2a2a' : getColumnStyles(column).th.backgroundColor,
                  color: isDarkMode ? '#ffffff' : getColumnStyles(column).th.color,
                  borderRight: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
                  borderBottom: isDarkMode ? '2px solid #444' : '2px solid #e1e5e9',
                  opacity: draggedColumn === column.id ? 0.5 : 1,
                  cursor: isResizing ? 'col-resize' : 'move'
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
                      <span style={{ cursor: 'pointer', flex: 1,paddingRight:"2px" }}>
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
                <div
                  onMouseDown={(e) => handleResizeStart(e, column.id)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '4px',
                    height: '100%',
                    cursor: 'col-resize',
                    backgroundColor: 'transparent',
                    zIndex: 10
                  }}
                  onMouseEnter={(e) => {
                    if (!isResizing) {
                      e.currentTarget.style.backgroundColor = isDarkMode ? '#666' : '#ccc';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                />
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
                          {columnFilters[column.id] && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                clearColumnFilter(column.id);
                              }}
                              style={{
                                marginTop: '8px',
                                padding: '4px 8px',
                                backgroundColor: '#ff6b6b',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px'
                              }}
                            >
                              Clear Filter
                            </button>
                          )}
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
                                        <div 
                      style={{ padding: '6px 8px', cursor: 'pointer', color: '#333333', position: 'relative' }} 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowColorPicker(showColorPicker === column.id ? null : column.id);
                      }}
                    >
                      Column Color
                      {showColorPicker === column.id && (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: '100%',
                          backgroundColor: '#ffffff',
                          border: '1px solid #e1e5e9',
                          borderRadius: '4px',
                          padding: '8px',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(5, 1fr)',
                          gap: '4px',
                          minWidth: '120px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                          {['#ff6b6b', '#ffd93d', '#6bcf7f', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#f8f9fa'].map(color => (
                            <div
                              key={color}
                              onClick={(e) => {
                                e.stopPropagation();
                                updateColumnColor(column.id, color);
                              }}
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: color,
                                borderRadius: '3px',
                                cursor: 'pointer',
                                border: column.color === color ? '2px solid #333' : '1px solid #ddd'
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </th>
            );
          })}
          <th
            style={{ 
              ...styles.th, 
              color: isDarkMode ? '#888' : '#aaa', 
              cursor: 'pointer', 
              position: 'relative',
              minWidth: '100px',
              backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
              borderRight: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
              borderBottom: isDarkMode ? '2px solid #444' : '2px solid #e1e5e9'
            }}
          >
            <button onClick={(e) => { e.stopPropagation(); setColumnHeaderMenu(null); setShowColumnMenu(false); setShowTypeMenu(!showTypeMenu); }} title="Add column" style={{...styles.button, marginRight: '5px', cursor: 'pointer',color: '#000000ff', backgroundColor:  '#cbc9c9ff' }}>+</button>
            <button onClick={(e) => { e.stopPropagation(); setColumnHeaderMenu(null); setShowTypeMenu(false); setShowColumnMenu(!showColumnMenu); }} style={{ ...styles.button,cursor: 'pointer', color: '#000000ff', backgroundColor:  '#cbc9c9ff' }}>...</button>
            {showTypeMenu && (
              <div onClick={(e) => e.stopPropagation()} style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
                border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
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
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('text')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>≡</span> Text
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('number')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>#</span> Number
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('select')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>⊙</span> Select
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('checkbox')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>☑</span> Checkbox
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('date')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>📅</span> Date
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('number', 'Phone')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>📞</span> Phone
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('email')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>@</span> Email
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('place', 'Place')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>📍</span> Place
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('url', 'URL')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>🔗</span> URL
                </div>
                {/* <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('text', 'Relation')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>↗</span> Relation
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('text', 'Rollup')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>🔍</span> Rollup
                </div> */}
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('formula', 'Formula')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>Σ</span> Formula
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('button', 'Button')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>🖱️</span> Button
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('files', 'Files')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>📎</span> Files
                </div>
               <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('id', 'ID')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>№</span> ID
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('action', 'Action')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>⚡</span> Action
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('createdTime', 'Created time')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>🕐</span> Created time
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: isDarkMode ? '#ffffff' : '#333333' }} onClick={() => addColumn('lastEditedTime', 'Last edited time')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#444' : '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>🕐</span> Last edited time
                </div>
                {/* <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('text', 'Created by')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>👤</span> Created by
                </div>
                <div style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#333333' }} onClick={() => addColumn('text', 'Last edited by')} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d3d3d3ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <span style={{ marginRight: '8px' }}>👤</span> Last edited by
                </div> */}
              </div>
            )}
            {showColumnMenu && (
              <div onClick={(e) => e.stopPropagation()} style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
                border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
                borderRadius: '4px',
                padding: '8px',
                zIndex: 1000,
                minWidth: '200px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{ padding: '4px 0', borderBottom: '1px solid #e1e5e9', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', color: isDarkMode ? '#ccc' : '#666' }}>Dark Mode</span>
                    <div
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      style={{
                        width: '40px',
                        height: '20px',
                        borderRadius: '10px',
                        backgroundColor: isDarkMode ? '#007bff' : '#ccc',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: '#fff',
                          position: 'absolute',
                          top: '2px',
                          left: isDarkMode ? '22px' : '2px',
                          transition: 'left 0.3s'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: isDarkMode ? '#ccc' : '#666', marginBottom: '4px' }}>Row Colors</div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', position: 'relative' }}>
                    <span style={{ fontSize: '12px', marginRight: '8px', minWidth: '40px' }}>Odd:</span>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowOddColorPicker(!showOddColorPicker);
                        setShowEvenColorPicker(false);
                      }}
                      style={{
                        width: '30px',
                        height: '20px',
                        backgroundColor: oddRowColor,
                        border: '1px solid #ddd',
                        borderRadius: '3px',
                        cursor: 'pointer'
                      }}
                    />
                    {showOddColorPicker && (
                      <div style={{
                        position: 'absolute',
                        top: '25px',
                        left: '50px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e1e5e9',
                        borderRadius: '4px',
                        padding: '8px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '4px',
                        minWidth: '120px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        zIndex: 1002
                      }}>
                        {['#ffffff', '#f8f9fa', '#f0f8ff', '#f5f5dc', '#faf0e6', '#e6e6fa', '#f0fff0', '#fff0f5', '#f5fffa', '#fffaf0', '#f0f0f0'].map(color => (
                          <div
                            key={color}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOddRowColor(color);
                              setShowOddColorPicker(false);
                            }}
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: color,
                              borderRadius: '3px',
                              cursor: 'pointer',
                              border: oddRowColor === color ? '2px solid #333' : '1px solid #ddd'
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                   <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <span style={{ fontSize: '12px', marginRight: '8px', minWidth: '40px' }}>Even:</span>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowEvenColorPicker(!showEvenColorPicker);
                        setShowOddColorPicker(false);
                      }}
                      style={{
                        width: '30px',
                        height: '20px',
                        backgroundColor: evenRowColor,
                        border: '1px solid #ddd',
                        borderRadius: '3px',
                        cursor: 'pointer'
                      }}
                    />
                    {showEvenColorPicker && (
                      <div style={{
                        position: 'absolute',
                        top: '25px',
                        left: '50px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e1e5e9',
                        borderRadius: '4px',
                        padding: '8px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '4px',
                        minWidth: '120px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        zIndex: 1002
                      }}>
                        {['#ffffff', '#f8f9fa', '#f0f8ff', '#f5f5dc', '#faf0e6', '#e6e6fa', '#f0fff0', '#fff0f5', '#f5fffa', '#fffaf0', '#f0f0f0'].map(color => (
                          <div
                            key={color}
                            onClick={(e) => {
                              e.stopPropagation();
                              setEvenRowColor(color);
                              setShowEvenColorPicker(false);
                            }}
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: color,
                              borderRadius: '3px',
                              cursor: 'pointer',
                              border: evenRowColor === color ? '2px solid #333' : '1px solid #ddd'
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #e1e5e9', marginTop: '8px', paddingTop: '8px' }}>
                  <div style={{ fontSize: '12px', color: isDarkMode ? '#ccc' : '#666', marginBottom: '8px', fontWeight: '500' }}>Active Users</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', borderRadius: '4px', backgroundColor: isDarkMode ? '#333' : '#f8f9fa' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#28a745' }} />
                      <span style={{ fontSize: '12px', color: isDarkMode ? '#fff' : '#333' }}>Current User</span>
                      <span style={{ fontSize: '10px', color: isDarkMode ? '#888' : '#666', marginLeft: 'auto' }}>Online</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', borderRadius: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#dc3545' }} />
                      <span style={{ fontSize: '12px', color: isDarkMode ? '#fff' : '#333' }}>Admin</span>
                      <span style={{ fontSize: '10px', color: isDarkMode ? '#888' : '#666', marginLeft: 'auto' }}>Away</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', borderRadius: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6c757d' }} />
                      <span style={{ fontSize: '12px', color: isDarkMode ? '#fff' : '#333' }}>Guest</span>
                      <span style={{ fontSize: '10px', color: isDarkMode ? '#888' : '#666', marginLeft: 'auto' }}>Offline</span>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: isDarkMode ? '#ccc' : '#666', marginBottom: '4px' }}>Columns</div>
                {columns.map(col => (
                  <div 
                    key={col.id} 
                    style={{ 
                      padding: '4px 8px', 
                      cursor: 'pointer', 
                      color: isDarkMode ? '#ffffff' : '#333333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '13px'
                    }} 
                    onClick={() => toggleColumnVisibility(col.id)}
                  >
                    <span>{col.name}</span>
                    <span style={{ fontSize: '14px' }}>
                      {hiddenColumns.has(col.id) ? <FaEyeSlash/> :  <FaEye/>}
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
            backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
            borderRight: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
            borderBottom: isDarkMode ? '2px solid #444' : '2px solid #e1e5e9',
            padding: '4px'
          }}></th>
          {visibleColumns.map((column) => (
            <th
              key={`search-${column.id}`}
              style={{ 
                ...getColumnStyles(column).th, 
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
                color: isDarkMode ? '#ffffff' : '#666666',
                borderRight: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
                borderBottom: isDarkMode ? '2px solid #444' : '2px solid #e1e5e9',
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
                  border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
                  borderRadius: '4px',
                  fontSize: '12px',
                  outline: 'none',
                  backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#333333'
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </th>
          ))}
          <th style={{ 
            ...styles.th, 
            backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
            borderRight: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
            borderBottom: isDarkMode ? '2px solid #444' : '2px solid #e1e5e9',
            padding: '4px'
          }}></th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row) => (
          <React.Fragment key={row.id}>
            <tr
              draggable
              onDragStart={() => handleRowDragStart(row.id)}
              onDragOver={(e) => handleRowDragOver(e, row.id)}
              onDrop={(e) => handleRowDrop(e, row.id)}
              onDragEnd={handleRowDragEnd}
              style={{
                ...styles.tr,
                backgroundColor: dragOverRow === row.id ? (isDarkMode ? '#444' : '#e3f2fd') : 
                               isDarkMode ? (filteredData.indexOf(row) % 2 === 0 ? '#2a2a2a' : '#1a1a1a') :
                               (filteredData.indexOf(row) % 2 === 0 ? evenRowColor : oddRowColor),
                opacity: draggedRow === row.id ? 0.5 : 1,
                cursor: 'move'
              }}
              onMouseEnter={(e) => {
                if (!draggedRow && !isDarkMode) {
                  e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor!;
                }
              }}
              onMouseLeave={(e) => {
                if (!draggedRow) {
                  const rowIndex = filteredData.indexOf(row);
                  const originalColor = isDarkMode ? 
                    (rowIndex % 2 === 0 ? '#2a2a2a' : '#1a1a1a') :
                    (rowIndex % 2 === 0 ? evenRowColor : oddRowColor);
                  e.currentTarget.style.backgroundColor = dragOverRow === row.id ? 
                    (isDarkMode ? '#444' : '#e3f2fd') : originalColor;
                }
              }}
            >
              <td style={{ 
                ...styles.td, 
                textAlign: 'center', 
                color: isDarkMode ? '#888' : '#aaa',
                backgroundColor: 'inherit',
                border: isDarkMode ? '1px solid #444' : '1px solid #cececeff'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ cursor: 'grab', fontSize: '12px', color: isDarkMode ? '#888' : '#999' }}>⋮⋮</span>
                  <button onClick={(e) => { e.stopPropagation(); deleteRow(row.id); }} style={{...styles.button, cursor: 'pointer', color: '#c80000ff', backgroundColor: '#cbc9c9ff' }} title="Delete row"><FaTrash/></button>
                  <button onClick={(e) => { e.stopPropagation(); toggleRowExpansion(row.id); }} style={{...styles.button, cursor: 'pointer', color: '#242424ff', backgroundColor: 'transparent', fontSize: '12px' }} title="Toggle sub-rows">
                    {expandedRows.has(row.id) ? <SlArrowDownCircle /> : <SlArrowRightCircle />}
                  </button>
                </div>
              </td>
            {visibleColumns.map((column) => {
              const isEditing = editCell?.rowId === row.id && editCell?.colId === column.id;
              const cellKey = `${row.id}-${column.id}`;
              const isDraggedCell = draggedCells.has(cellKey);
              return (
                <td
                  key={column.id}
                  style={{
                    ...getColumnStyles(column).td,
                    backgroundColor: isDraggedCell ? (isDarkMode ? '#444' : '#f0f0f0') : 
                                   (copiedCell?.rowId === row.id && copiedCell?.colId === column.id) ? (isDarkMode ? '#444' : '#e3f2fd') : 
                                   column.color ? getColumnStyles(column).td.backgroundColor : 'inherit',
                    color: isDarkMode ? '#ffffff' : '#333333',
                    border: (copiedCell?.rowId === row.id && copiedCell?.colId === column.id) ? '2px dashed #007bff' : 
                           isDarkMode ? '1px solid #444' : '1px solid #cececeff',
                    userSelect: 'none',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditCell({ rowId: row.id, colId: column.id });
                  }}
                  draggable={!isEditing}
                  onDragStart={(e) => {
                    e.stopPropagation();
                    handleDragStart(row.id, column.id, row[column.id]);
                  }}
                  onDragEnter={(e) => {
                    e.stopPropagation();
                    handleDragEnter(row.id, column.id);
                  }}
                  onDragEnd={(e) => {
                    e.stopPropagation();
                    handleDragEnd();
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  {renderCellContent(column, row[column.id], row.id, isEditing)}
                </td>
              );
            })}
            <td style={{
              ...styles.td,
              backgroundColor: 'inherit',
              border: isDarkMode ? '1px solid #444' : '1px solid #cececeff'
            }}></td>
          </tr>
          {expandedRows.has(row.id) && (
            <>
              {subRows[row.id]?.map((subRow) => (
                
                <tr 
                  key={subRow.id} 
                  draggable
                  onDragStart={() => handleSubRowDragStart(subRow.id, row.id)}
                  onDragOver={(e) => handleSubRowDragOver(e, subRow.id)}
                  onDrop={(e) => handleSubRowDrop(e, subRow.id, row.id)}
                  onDragEnd={handleSubRowDragEnd}
                  style={{ 
                    ...styles.tr, 
                    backgroundColor: dragOverSubRow === subRow.id ? '#d1ecf1' : '#e9ecef',
                    opacity: draggedSubRow?.subRowId === subRow.id ? 0.5 : 1,
                    cursor: 'move'
                  }}
                >
              
                  <td style={{ ...styles.td, textAlign: 'center', color: '#aaa', backgroundColor: '#e9ecef' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingLeft: '20px' }}>
                      <span style={{ cursor: 'grab', fontSize: '10px', color: '#999' }}>⋮⋮</span>
                      <button onClick={(e) => { e.stopPropagation(); deleteSubRow(row.id, subRow.id); }} style={{ ...styles.button,cursor: 'pointer', color: '#c80000ff', backgroundColor: '#cbc9c9ff', fontSize: '10px' }} title="Delete sub-row"><FaTrash/></button>
                    </div>
                  </td>
                  {visibleColumns.map((column) => {
                    const isEditing = editCell?.rowId === subRow.id && editCell?.colId === column.id;
                    return (
                      
                      <td
                        key={column.id}
                        style={{
                          ...getColumnStyles(column).td,
                          backgroundColor: draggedSubCells.has(`${subRow.id}-${column.id}`) ? '#f0f0f0' : 
                                         (copiedCell?.rowId === subRow.id && copiedCell?.colId === column.id) ? '#e3f2fd' : 
                                         column.color ? `${column.color}22` : '#ecececff',
                          border: (copiedCell?.rowId === subRow.id && copiedCell?.colId === column.id) ? '2px dashed #007bff' : getColumnStyles(column).td.border,
                          userSelect: 'none',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditCell({ rowId: subRow.id, colId: column.id });
                        }}
                        draggable={!isEditing}
                        onDragStart={(e) => {
                          e.stopPropagation();
                          handleSubCellDragStart(subRow.id, column.id, subRow[column.id], row.id);
                        }}
                        onDragEnter={(e) => {
                          e.stopPropagation();
                          handleSubCellDragEnter(subRow.id, column.id, row.id);
                        }}
                        onDragEnd={(e) => {
                          e.stopPropagation();
                          handleSubCellDragEnd();
                        }}
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        {renderCellContent(column, subRow[column.id], subRow.id, isEditing)}
                      </td>
                    );
                  })}
                  <td style={{ ...styles.td, backgroundColor: '#e9ecef' }}></td>
                </tr>
              ))}
              <tr style={{ backgroundColor: '#b7b8b9ff' }}>
                <td colSpan={visibleColumns.length + 2} style={{ ...styles.td, textAlign: 'center', color: '#ffffffff', cursor: 'pointer', backgroundColor: '#5b5b5bff', paddingLeft: '20px' }} onClick={() => addSubRow(row.id)}>
                  + Add Sub Row
                </td>
              </tr>
            </>
          )}
          </React.Fragment>
        ))}
        <tr>
          <td colSpan={visibleColumns.length + 2} style={{ 
            ...styles.td, 
            textAlign: 'center', 
            color: isDarkMode ? '#888' : '#aaa', 
            cursor: 'pointer',
            backgroundColor: 'inherit',
            border: isDarkMode ? '1px solid #444' : '1px solid #cececeff'
          }} onClick={addRow}>
            + Add Row
          </td>
        </tr>
      </tbody>
      </table>
    </>
  );
};

export default NotionTable;
