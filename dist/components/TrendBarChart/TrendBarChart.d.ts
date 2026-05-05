import { default as React } from 'react';
export interface MetricConfig {
    label: string;
    shortLabel: string;
    color: string;
    icon?: any;
}
export interface TrendBarChartProps {
    title?: string;
    subtitle?: string;
    dateRangeBadge?: string;
    data?: any[];
    xAxisKey?: string;
    metricsConfig?: Record<string, MetricConfig>;
    referenceLineValue?: number;
    referenceLineLabel?: string;
    daysInMonthMap?: Record<string, number>;
}
declare const TrendBarChart: React.FC<TrendBarChartProps>;
export default TrendBarChart;
//# sourceMappingURL=TrendBarChart.d.ts.map