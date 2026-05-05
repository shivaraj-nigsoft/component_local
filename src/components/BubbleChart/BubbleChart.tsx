import React from 'react';
import { useContainerSize } from '../useContainerSize';

interface DataPoint {
  label: string;
  x: number;
  y: number;
  size: number;
  color?: string;
}

export interface BubbleChartProps {
  data: DataPoint[];
  height?: number;
  defaultColor?: string;
  showLabels?: boolean;
  showGrid?: boolean;
  title?: string;
}

const BubbleChart: React.FC<BubbleChartProps> = ({
  data,
  height = 400,
  defaultColor = '#003357',
  showLabels = true,
  showGrid = true,
  title
}) => {
  const { ref, width, fs } = useContainerSize();
  const padding = 60;
  const svgWidth = width || 600;
  const chartWidth = svgWidth - padding * 2;
  const chartHeight = height - padding * 2;

  const maxX = Math.max(...data.map(d => d.x));
  const maxY = Math.max(...data.map(d => d.y));
  const maxSize = Math.max(...data.map(d => d.size));

  const bubbles = data.map(point => ({
    ...point,
    cx: padding + (point.x / maxX) * chartWidth,
    cy: padding + chartHeight - (point.y / maxY) * chartHeight,
    r: (point.size / maxSize) * 40 + 10
  }));

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
      {title && (
        <h3 style={{ margin: '0 0 20px 0', fontSize: fs(20), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h3>
      )}
      {svgWidth > 0 && (
        <svg width={svgWidth} height={height}>
          {showGrid && (
            <g>
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
                <React.Fragment key={i}>
                  <line x1={padding} y1={padding + chartHeight * ratio} x2={svgWidth - padding} y2={padding + chartHeight * ratio} stroke="#e0e0e0" strokeWidth="1" />
                  <line x1={padding + chartWidth * ratio} y1={padding} x2={padding + chartWidth * ratio} y2={height - padding} stroke="#e0e0e0" strokeWidth="1" />
                </React.Fragment>
              ))}
            </g>
          )}
          {bubbles.map((bubble, index) => (
            <g key={index}>
              <circle cx={bubble.cx} cy={bubble.cy} r={bubble.r} fill={bubble.color || defaultColor} opacity="0.7" stroke="#fff" strokeWidth="2" />
              {showLabels && (
                <text x={bubble.cx} y={bubble.cy} textAnchor="middle" dominantBaseline="middle" fontSize={fs(12)} fill="#fff" fontWeight="bold">
                  {bubble.label}
                </text>
              )}
            </g>
          ))}
        </svg>
      )}
    </div>
  );
};

export default BubbleChart;
