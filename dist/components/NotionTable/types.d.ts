export type ColumnType = 'text' | 'number' | 'select' | 'date' | 'checkbox' | 'createdTime' | 'lastEditedTime' | 'button' | 'files' | 'email' | 'formula' | 'place' | 'id' | 'url' | 'action';
export type ViewType = 'table' | 'board' | 'timeline' | 'calendar' | 'list' | 'gallery' | 'chart' | 'feed' | 'map';
export interface Column {
    id: string;
    name: string;
    type: ColumnType;
    options?: {
        value: string;
        color: string;
    }[];
    color?: string;
}
export interface RowData {
    id: string;
    [key: string]: any;
}
export interface SortConfig {
    key: string | null;
    direction: 'ascending' | 'descending';
}
export interface NotionTableProps {
    columns: Column[];
    initialData: RowData[];
}
//# sourceMappingURL=types.d.ts.map