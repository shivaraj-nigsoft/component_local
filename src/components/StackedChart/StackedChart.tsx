import React, { useState } from 'react';
import { useContainerSize } from '../useContainerSize';

interface StackItem {
  label: string;
  value: number;
  color?: string;
}

interface DataPoint {
  category: string;
  stacks: StackItem[];
}

export interface StackedChartProps {
  data: DataPoint[];
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  title?: string;
  color?: string;
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  return [parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)];
}

function generateShades(baseColor: string, count: number): string[] {
  const [r, g, b] = hexToRgb(baseColor);
  return Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const mix = (c: number) => Math.round(220 - t * (220 - c));
    const toHex = (c: number) => mix(c).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  });
}

const StackedChart: React.FC<StackedChartProps> = ({
  data,
  height = 200,
  showLegend = true,
  showGrid = true,
  title,
  color
}) => {
  const { ref, width, fs } = useContainerSize();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; value: number } | null>(null);

  const legendWidth = showLegend ? 160 : 0;
  const svgWidth = Math.max(100, (width || 600) - legendWidth - 40);
  const paddingTop = 20;
  const paddingBottom = 15;
  const paddingSide = 30;
  const chartWidth = svgWidth - paddingSide * 2;
  const chartHeight = height - paddingTop - paddingBottom;

  const maxTotal = Math.max(...data.map(d => d.stacks.reduce((sum, s) => sum + s.value, 0)));
  const barWidth = chartWidth / data.length * 0.7;
  const barSpacing = chartWidth / data.length;

  const allLabels = Array.from(new Set(data.flatMap(d => d.stacks.map(s => s.label))));
  const shades = color ? generateShades(color, allLabels.length) : null;
  const colorMap = new Map<string, string>();
  allLabels.forEach((label, i) => {
    const explicitColor = data.flatMap(d => d.stacks).find(s => s.label === label)?.color;
    colorMap.set(label, shades ? shades[i] : (explicitColor ?? '#4a90e2'));
  });

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      paddingBottom: '24px',
      padding: '12px',
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
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        {svgWidth > 0 && (
          <svg width={svgWidth} height={height + paddingBottom}>
            {showGrid && (
              <g>
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                  const y = paddingTop + chartHeight * (1 - ratio);
                  return <line key={i} x1={paddingSide} y1={y} x2={svgWidth - paddingSide} y2={y} stroke="#e0e0e0" strokeWidth="1" />;
                })}
              </g>
            )}
            {data.map((point, index) => {
              const x = paddingSide + barSpacing * index + (barSpacing - barWidth) / 2;
              let currentY = paddingTop + chartHeight;
              return (
                <g key={index}>
                  {point.stacks.map((stack, stackIndex) => {
                    const stackHeight = (stack.value / maxTotal) * chartHeight;
                    const y = currentY - stackHeight;
                    currentY = y;
                    return (
                      <rect
                        key={stackIndex} x={x} y={y} width={barWidth} height={stackHeight} fill={colorMap.get(stack.label) ?? '#4a90e2'}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTooltip({ x: rect.left + rect.width / 2, y: rect.top, label: stack.label, value: stack.value });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        style={{ cursor: 'pointer' }}
                      />
                    );
                  })}
                  <text x={x + barWidth / 2} y={paddingTop + chartHeight + 20} textAnchor="middle" fontSize={fs(12)} fill="#666">
                    {point.category}
                  </text>
                </g>
              );
            })}
          </svg>
        )}
        {showLegend && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
            {allLabels.map((label, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: colorMap.get(label), borderRadius: '4px' }} />
                <span style={{ fontSize: fs(14), color: '#333' }}>{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {tooltip && (
        <div style={{
          position: 'fixed', left: tooltip.x, top: tooltip.y - 10,
          transform: 'translate(-50%, -100%)', backgroundColor: 'rgba(0,0,0,0.8)',
          color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: fs(12),
          pointerEvents: 'none', zIndex: 1000, whiteSpace: 'nowrap'
        }}>
          <div style={{ fontWeight: 'bold' }}>{tooltip.label}</div>
          <div>Value: {tooltip.value}</div>
        </div>
      )}
    </div>
  );
};

export default StackedChart;
