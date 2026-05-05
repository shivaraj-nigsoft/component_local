import React from "react";

export interface RowData {
  [key: string]: any;
}

export interface SortConfig {
  key: string | null;
  direction: "ascending" | "descending";
}



// Helper function to sort data (can be placed in a separate file or above the component)
export function useSortableData(items: RowData[], config: SortConfig) {
  const [sortConfig, setSortConfig] = React.useState<SortConfig>(config);

  const sortedItems = React.useMemo(() => {
    // Create a mutable copy of the items array
    const sortableItems = [...items];

    if (sortConfig?.key) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction: SortConfig['direction'] = 'ascending';
    // If the same key is clicked, toggle the direction
    if (
      sortConfig?.key === key &&
      sortConfig?.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
}