import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface StatGridProps {
  title?: string;
  data: Record<string, number | string>;
  columns?: number;
  backgroundColor?: string;
  color?: string;
}

const CARD_COLORS = ['#3b5fc0', '#2a9d5c', '#8b3fc8', '#e07b00'];

const StatGrid: React.FC<StatGridProps> = ({
  title,
  data,
  columns = 2,
  backgroundColor = '#f0f2f5',
  color,
}) => {
  const stats = Object.entries(data).map(([key, value]) => ({
    label: key.replace(/_/g, ' '),
    value,
  }));
  const { ref, fs } = useContainerSize();

  return (
    <div ref={ref} style={{
      backgroundColor,
      borderRadius: '16px',
      padding: '12px',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {title && (
        <h6 style={{ margin: '0 0 12px 0', fontSize: fs(12), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h6>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '10px',
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '14px 16px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: fs(28), fontWeight: 'bold', color: color ?? CARD_COLORS[i % CARD_COLORS.length], lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: fs(11), color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '6px' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatGrid;
