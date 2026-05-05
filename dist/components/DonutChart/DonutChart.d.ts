import { default as React } from 'react';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface DonutChartProps {
    data: DataPoint[];
    title?: string;
    total?: number;
    baseColor?: string;
}
declare const DonutChart: React.FC<DonutChartProps>;
export default DonutChart;
//# sourceMappingURL=DonutChart.d.ts.map