import React, { useEffect, useRef } from 'react';
import { useContainerSize } from '../useContainerSize';

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

const AdvanceMapWidget: React.FC<AdvanceMapWidgetProps> = ({
  locations,
  title,
  height = 400,
  centerLat,
  centerLng,
  zoom = 12,
  bubbleScale = 1,
  showLabels = true,
  mapStyle = 'default'
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const { ref: containerRef, fs } = useContainerSize();

  const center = {
    lat: centerLat ?? (locations.length > 0 ? locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length : 51.5074),
    lng: centerLng ?? (locations.length > 0 ? locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length : -0.1278)
  };

  const getBubbleSize = (value: number) => {
    const maxValue = Math.max(...locations.map(l => l.value));
    const minSize = 40;
    const maxSize = 100;
    return (minSize + (value / maxValue) * (maxSize - minSize)) * bubbleScale;
  };

  useEffect(() => {
    const loadLeaflet = () => {
      if (window.L) {
        initMap();
        return;
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current || !window.L || mapInstanceRef.current) return;

      const tileLayer = mapStyle === 'satellite'
        ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        : mapStyle === 'terrain'
        ? 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

      mapInstanceRef.current = window.L.map(mapRef.current).setView([center.lat, center.lng], zoom);

      window.L.tileLayer(tileLayer, {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(mapInstanceRef.current);

      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];

      locations.forEach(location => {
        const size = getBubbleSize(location.value);
        const color = location.color || '#0066a1';

        const icon = window.L.divIcon({
          className: 'custom-bubble-marker',
          html: `
            <div style="position: relative; width: ${size}px; height: ${size}px; margin-left: -${size/2}px; margin-top: -${size/2}px;">
              <div class="bubble-circle" style="width: ${size}px; height: ${size}px; border-radius: 50%; background-color: ${color}; opacity: 0.7; border: 3px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; transition: transform 0.3s;">
                <span style="color: #fff; font-size: ${size / 3.5}px; font-weight: bold; font-family: Arial, sans-serif;">${location.value >= 10 ? `${location.value}+` : location.value}</span>
              </div>
              ${showLabels && location.label ? `<div style="position: absolute; top: ${size}px; left: 50%; transform: translateX(-50%); white-space: nowrap; color: #333; font-size: 12px; font-weight: 600; text-shadow: 0 0 3px #fff, 0 0 3px #fff; font-family: Arial, sans-serif;">${location.label}</div>` : ''}
            </div>
          `,
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2]
        });

        const marker = window.L.marker([location.lat, location.lng], { icon });
        
        marker.bindTooltip(`${location.label || `Location ${location.id}`}: ${location.value}`, {
          direction: 'top',
          offset: [0, -size / 2],
          className: 'custom-tooltip'
        });

        marker.on('mouseover', function(e: any) {
          const bubble = e.target.getElement()?.querySelector('.bubble-circle');
          if (bubble) bubble.style.transform = 'scale(1.1)';
        });

        marker.on('mouseout', function(e: any) {
          const bubble = e.target.getElement()?.querySelector('.bubble-circle');
          if (bubble) bubble.style.transform = 'scale(1)';
        });

        marker.addTo(mapInstanceRef.current);
        markersRef.current.push(marker);
      });
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [locations, center.lat, center.lng, zoom, mapStyle, bubbleScale, showLabels]);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', fontFamily: 'Arial, sans-serif', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', width: '100%', boxSizing: 'border-box' }}>
      {title && <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357' }}>{title}</h3>}
      <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #d0d0d0', width: '100%', height }}>
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      </div>
      <style>{`
        .custom-bubble-marker {
          background: none;
          border: none;
        }
        .custom-tooltip {
          background: rgba(51,51,51,0.9);
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .leaflet-tooltip-top:before {
          border-top-color: rgba(51,51,51,0.9);
        }
      `}</style>
      {locations.length > 0 && (
        <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: fs(12), color: '#666' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#0066a1' }} />
            <span>Total Locations: {locations.length}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Total Count: {locations.reduce((sum, loc) => sum + loc.value, 0)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvanceMapWidget;
