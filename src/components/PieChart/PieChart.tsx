import React, { useState } from 'react';
import { useContainerSize } from '../useContainerSize';

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

function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function generateShades(baseColor: string, data: DataPoint[]): string[] {
  const [r, g, b] = hexToRgb(baseColor);
  const sorted = [...data].sort((a, b) => a.value - b.value);
  const n = data.length;
  const shadeMap = new Map<DataPoint, string>();
  sorted.forEach((item, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const mix = (c: number) => Math.round(220 - t * (220 - c));
    const toHex = (c: number) => mix(c).toString(16).padStart(2, '0');
    shadeMap.set(item, `#${toHex(r)}${toHex(g)}${toHex(b)}`);
  });
  return data.map(item => shadeMap.get(item)!);
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  showLegend = true,
  title,
  baseColor
}) => {
  const { ref, width, fs } = useContainerSize();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; value: number; percentage: number } | null>(null);

  const legendWidth = showLegend ? 160 : 0;
  const availableWidth = (width || 400) - legendWidth - 40;
  const size = Math.max(100, Math.min(availableWidth, 400));

  const shades = baseColor ? generateShades(baseColor, data) : null;
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 20;

  let currentAngle = -90;
  const slices = data.map(point => {
    const percentage = (point.value / total) * 100;
    const angle = (point.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);
    const largeArc = angle > 180 ? 1 : 0;
    const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    currentAngle = endAngle;
    const color = shades ? shades[data.indexOf(point)] : (point.color ?? '#4a90e2');
    return { ...point, path, percentage, color };
  });

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {title && (
        <h6 style={{ margin: '0 0 20px 0', fontSize: fs(12), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h6>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
        {size > 0 && (
          <svg width={size} height={size}>
            {slices.map((slice, index) => (
              <path
                key={index}
                d={slice.path}
                fill={slice.color}
                stroke="#fff"
                strokeWidth="2"
                onMouseEnter={(e) => setTooltip({ x: e.clientX, y: e.clientY, label: slice.label, value: slice.value, percentage: slice.percentage })}
                onMouseMove={(e) => setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : null)}
                onMouseLeave={() => setTooltip(null)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </svg>
        )}
        {showLegend && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {slices.map((slice, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: slice.color, borderRadius: '4px', flexShrink: 0 }} />
                <span style={{ fontSize: fs(14), color: '#333' }}>
                  {slice.label}: {slice.value.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      {tooltip && (
        <div style={{
          position: 'fixed', left: tooltip.x + 12, top: tooltip.y - 10,
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: fs(12),
          pointerEvents: 'none', zIndex: 1000, whiteSpace: 'nowrap'
        }}>
          <div style={{ fontWeight: 'bold' }}>{tooltip.label}</div>
          <div>Value: {tooltip.value.toLocaleString('en-IN')}</div>
          <div>Percentage: {tooltip.percentage.toFixed(1)}%</div>
        </div>
      )}
    </div>
  );
};

export default PieChart;
