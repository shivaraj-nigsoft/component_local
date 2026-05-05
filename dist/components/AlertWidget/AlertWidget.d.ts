import { default as React } from 'react';
export interface Alert {
    id: string | number;
    message: string;
    timestamp: string;
    type: 'success' | 'warning' | 'error' | 'info';
    read?: boolean;
}
export interface AlertWidgetProps {
    alerts: Alert[];
    title?: string;
    maxHeight?: number;
    onDismiss?: (id: string | number) => void;
}
declare const AlertWidget: React.FC<AlertWidgetProps>;
export default AlertWidget;
//# sourceMappingURL=AlertWidget.d.ts.map