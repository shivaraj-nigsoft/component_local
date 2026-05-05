import { default as React } from 'react';
interface StackItem {
    label: string;
    value: number;
    color?: string;
}
interface DataPoint {
    category: string;
    stacks: StackItem[];
}
export interface StackedChartProps {
    data: DataPoint[];
    height?: number;
    showLegend?: boolean;
    showGrid?: boolean;
    title?: string;
    color?: string;
}
declare const StackedChart: React.FC<StackedChartProps>;
export default StackedChart;
//# sourceMappingURL=StackedChart.d.ts.map