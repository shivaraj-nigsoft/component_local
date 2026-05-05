import React from 'react';
import { useContainerSize } from '../useContainerSize';

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

const MapWidget: React.FC<MapWidgetProps> = ({
  markers,
  title,
  height = 400,
  centerLat = 0,
  centerLng = 0,
  zoom = 10,
  apiKey
}) => {
  const { ref, fs } = useContainerSize();
  const center = `${centerLat},${centerLng}`;
  const markerParams = markers.map(m => `markers=color:red%7C${m.lat},${m.lng}`).join('&');
  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${center}&zoom=${zoom}`
    : `https://maps.google.com/maps?q=${center}&z=${zoom}&output=embed${markers.length > 0 ? '&' + markerParams : ''}`;

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {title && <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357' }}>{title}</h3>}
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #d0d0d0' }}>
        <iframe
          width="100%"
          height={height}
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          src={mapUrl}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default MapWidget;
