import { default as React } from 'react';
export interface KpiWidgetProps {
    title: string;
    value: number | string;
    prefix?: string;
    suffix?: string;
    trend?: number;
    trendLabel?: string;
    icon?: string;
    color?: string;
    backgroundColor?: string;
}
declare const KpiWidget: React.FC<KpiWidgetProps>;
export default KpiWidget;
//# sourceMappingURL=KpiWidget.d.ts.map