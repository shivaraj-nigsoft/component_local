import React from 'react';
import { useContainerSize } from '../useContainerSize';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartProps {
  data: DataPoint[];
  height?: number;
  defaultColor?: string;
  showValues?: boolean;
  showGrid?: boolean;
  title?: string;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 200,
  defaultColor = '#003357',
  showValues = true,
  showGrid = true,
  title
}) => {
  const { ref, width, fs, scale } = useContainerSize();
  const paddingTop = 20;
  const paddingBottom = 15;
  const paddingSide = 30;
  const svgWidth = width || 600;
  const chartWidth = svgWidth - paddingSide * 2;
  const chartHeight = height - paddingTop - paddingBottom;

  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = chartWidth / data.length * 0.7;
  const barSpacing = chartWidth / data.length;

  const estCharWidth = 10 * scale * 0.6;
  const maxLabelLen = Math.max(...data.map(d => d.label.length));
  const needsRotation = maxLabelLen * estCharWidth > barSpacing;
  const rotatedLabelHeight = needsRotation ? maxLabelLen * estCharWidth * 0.7 : 20;

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '12px',
      paddingBottom: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {title && (
        <h6 style={{ margin: '0 0 20px 0', fontSize: fs(12), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h6>
      )}
      {svgWidth > 0 && (
        <svg width={svgWidth} height={height + paddingBottom + (needsRotation ? rotatedLabelHeight - 20 : 0)}>
          {showGrid && (
            <g>
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                const y = paddingTop + chartHeight * (1 - ratio);
                return <line key={i} x1={paddingSide} y1={y} x2={svgWidth - paddingSide} y2={y} stroke="#e0e0e0" strokeWidth="1" />;
              })}
            </g>
          )}
          {data.map((point, index) => {
            const barHeight = (point.value / maxValue) * chartHeight;
            const x = paddingSide + barSpacing * index + (barSpacing - barWidth) / 2;
            const y = paddingTop + chartHeight - barHeight;
            return (
              <g key={index}>
                <rect x={x} y={y} width={barWidth} height={barHeight} fill={point.color || defaultColor} rx="4" />
                {showValues && (
                  <text x={x + barWidth / 2} y={y - 5} textAnchor="middle" fontSize={fs(12)} fill="#666" fontWeight="bold">
                    {point.value}
                  </text>
                )}
                {needsRotation ? (
                  <text
                    x={x + barWidth / 2}
                    y={paddingTop + chartHeight + 8}
                    fontSize={fs(10)}
                    fill="#666"
                    textAnchor="end"
                    transform={`rotate(-40, ${x + barWidth / 2}, ${paddingTop + chartHeight + 8})`}
                  >
                    {point.label}
                  </text>
                ) : (
                  <text x={x + barWidth / 2} y={paddingTop + chartHeight + 20} textAnchor="middle" fontSize={fs(10)} fill="#666">
                    {point.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
};

export default BarChart;
