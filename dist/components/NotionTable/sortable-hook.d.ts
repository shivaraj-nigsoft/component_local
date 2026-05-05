export interface RowData {
    [key: string]: any;
}
export interface SortConfig {
    key: string | null;
    direction: "ascending" | "descending";
}
export declare function useSortableData(items: RowData[], config: SortConfig): {
    items: RowData[];
    requestSort: (key: string) => void;
    sortConfig: SortConfig;
};
//# sourceMappingURL=sortable-hook.d.ts.map