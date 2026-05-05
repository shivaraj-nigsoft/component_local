import { default as React } from 'react';
interface DataPoint {
    label: string;
    x: number;
    y: number;
    size: number;
    color?: string;
}
export interface BubbleChartProps {
    data: DataPoint[];
    height?: number;
    defaultColor?: string;
    showLabels?: boolean;
    showGrid?: boolean;
    title?: string;
}
declare const BubbleChart: React.FC<BubbleChartProps>;
export default BubbleChart;
//# sourceMappingURL=BubbleChart.d.ts.map