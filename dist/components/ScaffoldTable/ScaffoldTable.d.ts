import { default as React } from 'react';
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
declare const ScaffoldTable: React.FC<ScaffoldTableProps>;
export default ScaffoldTable;
//# sourceMappingURL=ScaffoldTable.d.ts.map