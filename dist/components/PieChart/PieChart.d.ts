import { default as React } from 'react';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface PieChartProps {
    data: DataPoint[];
    showLegend?: boolean;
    showPercentages?: boolean;
    title?: string;
    baseColor?: string;
}
declare const PieChart: React.FC<PieChartProps>;
export default PieChart;
//# sourceMappingURL=PieChart.d.ts.map