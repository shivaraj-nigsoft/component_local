import { default as React } from 'react';
type ChartType = 'bar' | 'line' | 'pie' | 'donut';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface ApiSource {
    /** Label shown on the toggle button */
    label: string;
    /** Endpoint path e.g. '/users' — combined with MultiChartProps.baseUrl */
    endpoint: string;
    /** Which response field → label (auto-detected if omitted) */
    labelKey?: string;
    /** Which response field → value (auto-detected if omitted) */
    valueKey?: string;
    /** Extra fetch options */
    fetchOptions?: RequestInit;
}
export interface MultiChartProps {
    title?: string;
    /** Base URL prepended to every ApiSource endpoint e.g. 'https://api.example.com' */
    baseUrl?: string;
    /** Static fallback data shown when no API is selected */
    data?: DataPoint[];
    /** List of API sources — each gets its own toggle button */
    apis?: ApiSource[];
    defaultChart?: ChartType;
    height?: number;
    defaultColor?: string;
    baseColor?: string;
}
declare const MultiChart: React.FC<MultiChartProps>;
export default MultiChart;
//# sourceMappingURL=MultiChart.d.ts.map