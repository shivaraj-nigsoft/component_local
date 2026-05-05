import { default as React } from 'react';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface LineChartProps {
    data: DataPoint[];
    height?: number;
    defaultColor?: string;
    strokeWidth?: number;
    showDots?: boolean;
    showGrid?: boolean;
    title?: string;
}
declare const LineChart: React.FC<LineChartProps>;
export default LineChart;
//# sourceMappingURL=LineChart.d.ts.map