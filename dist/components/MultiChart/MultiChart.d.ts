import { default as React } from 'react';
type ChartType = 'bar' | 'line' | 'pie' | 'donut';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface ApiSource {
    label: string;
    endpoint: string;
    labelKey?: string;
    valueKey?: string;
}
export interface MultiChartProps {
    title?: string;
    data?: DataPoint[];
    apis?: ApiSource[];
    activeEndpoint?: string;
    onEndpointSelect?: (endpoint: string) => void;
    isLoading?: boolean;
    defaultChart?: ChartType;
    height?: number;
    defaultColor?: string;
}
declare const MultiChart: React.FC<MultiChartProps>;
export default MultiChart;
//# sourceMappingURL=MultiChart.d.ts.map