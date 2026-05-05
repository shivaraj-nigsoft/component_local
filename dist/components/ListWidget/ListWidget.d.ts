import { default as React } from 'react';
export interface ListItem {
    id: string | number;
    title: string;
    subtitle?: string;
    timestamp?: string;
    icon?: React.ReactNode;
    status?: 'success' | 'warning' | 'error' | 'info';
    color?: string;
}
export interface ListWidgetProps {
    items: ListItem[];
    title?: string;
    maxHeight?: number;
    showNumbers?: boolean;
    defaultColor?: string;
}
declare const ListWidget: React.FC<ListWidgetProps>;
export default ListWidget;
//# sourceMappingURL=ListWidget.d.ts.map