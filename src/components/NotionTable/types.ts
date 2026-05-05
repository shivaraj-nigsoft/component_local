// Define the types of columns a Notion table supports
export type ColumnType = 'text' | 'number' | 'select' | 'date' | 'checkbox' | 'createdTime' | 'lastEditedTime' | 'button' | 'files' | 'email' | 'formula' | 'place' | 'id' | 'url' | 'action';

// Define the view types for layout switching
export type ViewType = 'table' | 'board' | 'timeline' | 'calendar' | 'list' | 'gallery' | 'chart' | 'feed' | 'map';

// Configuration for a single column
export interface Column {
  id: string; // The property key in your data object (e.g., 'taskName')
  name: string; // The display name for the column header (e.g., 'Task Name')
  type: ColumnType; // The type of data in the column
  options?: { value: string; color: string }[]; // For 'select' type columns
  color?: string; // Column background color
}

// The structure for a single row of data
export interface RowData {
  id: string; // Unique ID for the row
  [key: string]: any; // The data for each column, where key matches Column.id
}

// Configuration for sorting
export interface SortConfig {
  key: string | null;
  direction: 'ascending' | 'descending';
}

// Props for the main table component
export interface NotionTableProps {
  columns: Column[];
  initialData: RowData[];
}