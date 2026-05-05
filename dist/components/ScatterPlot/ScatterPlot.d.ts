import { default as React } from 'react';
interface DataPoint {
    x: number;
    y: number;
    label?: string;
    color?: string;
}
export interface ScatterPlotProps {
    data: DataPoint[];
    height?: number;
    defaultColor?: string;
    pointSize?: number;
    showGrid?: boolean;
    title?: string;
}
declare const ScatterPlot: React.FC<ScatterPlotProps>;
export default ScatterPlot;
//# sourceMappingURL=ScatterPlot.d.ts.map