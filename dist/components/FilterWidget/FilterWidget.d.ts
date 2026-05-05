import { default as React } from 'react';
export interface FilterOption {
    label: string;
    value: string | number;
    count?: number;
    children?: FilterOption[];
    disabled?: boolean;
}
export interface DateRange {
    start: string;
    end: string;
}
export interface NumericRange {
    min: number;
    max: number;
}
export type FilterValue = string | number | (string | number)[] | DateRange | NumericRange;
export interface FilterWidgetProps {
    title?: string;
    options?: FilterOption[];
    defaultValue?: FilterValue;
    onChange: (value: FilterValue) => void;
    type?: 'dropdown' | 'buttons' | 'multiselect' | 'search' | 'daterange' | 'numericrange' | 'hierarchical' | 'tags';
    placeholder?: string;
    searchable?: boolean;
    clearable?: boolean;
    maxSelections?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
}
declare const FilterWidget: React.FC<FilterWidgetProps>;
export default FilterWidget;
//# sourceMappingURL=FilterWidget.d.ts.map