import { default as React } from 'react';
export interface MapLocation {
    id: string | number;
    lat: number;
    lng: number;
    value: number;
    label?: string;
    color?: string;
}
export interface AdvanceMapWidgetProps {
    locations: MapLocation[];
    title?: string;
    width?: number;
    height?: number;
    centerLat?: number;
    centerLng?: number;
    zoom?: number;
    bubbleScale?: number;
    showLabels?: boolean;
    mapStyle?: 'default' | 'satellite' | 'terrain';
}
declare global {
    interface Window {
        L: any;
    }
}
declare const AdvanceMapWidget: React.FC<AdvanceMapWidgetProps>;
export default AdvanceMapWidget;
//# sourceMappingURL=AdvanceMapWidget.d.ts.map