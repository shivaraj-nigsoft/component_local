export interface Column {
    id: string;
    name: string;
    type: 'text' | 'number' | 'select' | 'checkbox' | 'date' | 'email' | 'formula' | 'place' | 'url' | 'id' | 'createdTime' | 'lastEditedTime' | 'button' | 'files';
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
export interface TableProps {
    columns: Column[];
    initialData: RowData[];
}
export default function Table({ columns: initialColumns, initialData }: TableProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Table.d.ts.map