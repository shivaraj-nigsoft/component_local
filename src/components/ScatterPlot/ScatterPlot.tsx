import React from 'react';
import { useContainerSize } from '../useContainerSize';

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

const ScatterPlot: React.FC<ScatterPlotProps> = ({
  data,
  height = 400,
  defaultColor = '#003357',
  pointSize = 6,
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
  const minX = Math.min(...data.map(d => d.x));
  const minY = Math.min(...data.map(d => d.y));

  const points = data.map(point => ({
    ...point,
    cx: padding + ((point.x - minX) / (maxX - minX || 1)) * chartWidth,
    cy: padding + chartHeight - ((point.y - minY) / (maxY - minY || 1)) * chartHeight
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
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#666" strokeWidth="2" />
          <line x1={padding} y1={height - padding} x2={svgWidth - padding} y2={height - padding} stroke="#666" strokeWidth="2" />
          {points.map((point, index) => (
            <circle key={index} cx={point.cx} cy={point.cy} r={pointSize} fill={point.color || defaultColor} opacity="0.7" />
          ))}
        </svg>
      )}
    </div>
  );
};

export default ScatterPlot;
