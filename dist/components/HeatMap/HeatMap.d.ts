import { default as React } from 'react';
interface DataPoint {
    x: string;
    y: string;
    value: number;
}
export interface HeatMapProps {
    data: DataPoint[];
    showValues?: boolean;
    colorScale?: [string, string];
    title?: string;
}
declare const HeatMap: React.FC<HeatMapProps>;
export default HeatMap;
//# sourceMappingURL=HeatMap.d.ts.map