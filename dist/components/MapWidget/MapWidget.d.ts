import { default as React } from 'react';
export interface MapMarker {
    id: string | number;
    lat: number;
    lng: number;
    label?: string;
    value?: number;
    color?: string;
}
export interface MapWidgetProps {
    markers: MapMarker[];
    title?: string;
    width?: number;
    height?: number;
    centerLat?: number;
    centerLng?: number;
    zoom?: number;
    apiKey?: string;
}
declare const MapWidget: React.FC<MapWidgetProps>;
export default MapWidget;
//# sourceMappingURL=MapWidget.d.ts.map