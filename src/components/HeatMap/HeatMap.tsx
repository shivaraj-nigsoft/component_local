import React from 'react';
import { useContainerSize } from '../useContainerSize';

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

const HeatMap: React.FC<HeatMapProps> = ({
  data,
  showValues = true,
  colorScale = ['#e3f2fd', '#003357'],
  title
}) => {
  const { ref, width, fs } = useContainerSize();

  const xLabels = Array.from(new Set(data.map(d => d.x)));
  const yLabels = Array.from(new Set(data.map(d => d.y)));

  const labelOffset = 80;
  const availableWidth = (width || 600) - labelOffset - 48;
  const cellSize = Math.max(30, Math.floor(availableWidth / xLabels.length));

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));

  const getColor = (value: number) => {
    const ratio = (value - minValue) / (maxValue - minValue || 1);
    const r1 = parseInt(colorScale[0].slice(1, 3), 16);
    const g1 = parseInt(colorScale[0].slice(3, 5), 16);
    const b1 = parseInt(colorScale[0].slice(5, 7), 16);
    const r2 = parseInt(colorScale[1].slice(1, 3), 16);
    const g2 = parseInt(colorScale[1].slice(3, 5), 16);
    const b2 = parseInt(colorScale[1].slice(5, 7), 16);
    return `rgb(${Math.round(r1 + (r2 - r1) * ratio)}, ${Math.round(g1 + (g2 - g1) * ratio)}, ${Math.round(b1 + (b2 - b1) * ratio)})`;
  };

  const getValue = (x: string, y: string) => data.find(d => d.x === x && d.y === y)?.value ?? 0;

  const svgWidth = xLabels.length * cellSize + labelOffset;
  const svgHeight = yLabels.length * cellSize + labelOffset;

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
        <svg width={svgWidth} height={svgHeight}>
          {yLabels.map((yLabel, yIndex) => (
            <text key={`y-${yIndex}`} x={labelOffset - 10} y={yIndex * cellSize + cellSize / 2 + labelOffset}
              textAnchor="end" dominantBaseline="middle" fontSize={fs(12)} fill="#666">
              {yLabel}
            </text>
          ))}
          {xLabels.map((xLabel, xIndex) => (
            <text key={`x-${xIndex}`} x={xIndex * cellSize + cellSize / 2 + labelOffset} y={labelOffset - 10}
              textAnchor="middle" fontSize={fs(12)} fill="#666">
              {xLabel}
            </text>
          ))}
          {yLabels.map((yLabel, yIndex) =>
            xLabels.map((xLabel, xIndex) => {
              const value = getValue(xLabel, yLabel);
              return (
                <g key={`${xIndex}-${yIndex}`}>
                  <rect
                    x={xIndex * cellSize + labelOffset} y={yIndex * cellSize + labelOffset}
                    width={cellSize} height={cellSize}
                    fill={getColor(value)} stroke="#fff" strokeWidth="2" rx="4"
                  />
                  {showValues && (
                    <text
                      x={xIndex * cellSize + cellSize / 2 + labelOffset}
                      y={yIndex * cellSize + cellSize / 2 + labelOffset}
                      textAnchor="middle" dominantBaseline="middle"
                      fontSize={fs(Math.max(10, cellSize / 4))} fill="#fff" fontWeight="bold"
                    >
                      {value}
                    </text>
                  )}
                </g>
              );
            })
          )}
        </svg>
      )}
    </div>
  );
};

export default HeatMap;
