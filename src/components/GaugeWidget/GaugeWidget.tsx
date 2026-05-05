import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface GaugeWidgetProps {
  value: number;
  max?: number;
  min?: number;
  title?: string;
  unit?: string;
  color?: string;
  backgroundColor?: string;
}

const GaugeWidget: React.FC<GaugeWidgetProps> = ({
  value,
  max = 100,
  min = 0,
  title,
  unit = '%',
  color = '#003357',
  backgroundColor = '#e0e0e0'
}) => {
  const { ref, width, fs } = useContainerSize();
  const size = Math.max(120, Math.min(width || 220, 320));

  const clampedValue = Math.max(min, Math.min(max, value));
  const percentage = ((clampedValue - min) / (max - min)) * 100;
  const startAngle = 225;
  const endAngle = 315;
  const angleRange = endAngle - startAngle;
  const needleAngle = startAngle + (percentage / 100) * angleRange;

  const centerX = size / 2;
  const centerY = size / 2 + 10;
  const radius = size / 2 - 40;

  const polarToCartesian = (angle: number, r: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: centerX + r * Math.cos(rad), y: centerY + r * Math.sin(rad) };
  };

  const describeArc = (sAngle: number, eAngle: number) => {
    const start = polarToCartesian(sAngle, radius);
    const end = polarToCartesian(eAngle, radius);
    const largeArc = eAngle - sAngle <= 180 ? 0 : 1;
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  };

  const progressEndAngle = startAngle + (percentage / 100) * angleRange;
  const needleEnd = polarToCartesian(needleAngle, radius - 15);
  const needleBase1 = polarToCartesian(needleAngle - 90, 6);
  const needleBase2 = polarToCartesian(needleAngle + 90, 6);

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {title && (
        <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357', textAlign: 'center' }}>
          {title}
        </h3>
      )}
      {size > 0 && (
        <svg width={size} height={size * 0.75} style={{ overflow: 'visible' }}>
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
            </filter>
          </defs>
          <path d={describeArc(startAngle, endAngle)} fill="none" stroke={backgroundColor} strokeWidth="16" strokeLinecap="round" />
          <path d={describeArc(startAngle, progressEndAngle)} fill="none" stroke={color} strokeWidth="16" strokeLinecap="round" />
          <polygon points={`${needleEnd.x},${needleEnd.y} ${needleBase1.x},${needleBase1.y} ${needleBase2.x},${needleBase2.y}`} fill="#333" filter="url(#shadow)" />
          <circle cx={centerX} cy={centerY} r="10" fill="#333" />
          <circle cx={centerX} cy={centerY} r="6" fill="#fff" />
          <text x={centerX} y={centerY + 45} textAnchor="middle" fontSize={fs(Math.max(16, size / 7))} fontWeight="bold" fill={color}>
            {clampedValue}{unit}
          </text>
          <text x={polarToCartesian(startAngle, radius + 20).x - 5} y={polarToCartesian(startAngle, radius + 20).y} textAnchor="end" fontSize={fs(14)} fill="#666" fontWeight="500">{min}</text>
          <text x={polarToCartesian(endAngle, radius + 20).x + 5} y={polarToCartesian(endAngle, radius + 20).y} textAnchor="start" fontSize={fs(14)} fill="#666" fontWeight="500">{max}</text>
        </svg>
      )}
    </div>
  );
};

export default GaugeWidget;
