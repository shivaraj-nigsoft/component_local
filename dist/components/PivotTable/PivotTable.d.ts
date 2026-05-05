import { default as React } from 'react';
export interface PivotTableProps {
    data: Record<string, any>[];
    rowField: string;
    columnField: string;
    valueField: string;
    aggregation?: 'sum' | 'avg' | 'count' | 'min' | 'max';
    title?: string;
}
declare const PivotTable: React.FC<PivotTableProps>;
export default PivotTable;
//# sourceMappingURL=PivotTable.d.ts.map