import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface KpiWidgetProps {
  title: string;
  value: number | string;
  prefix?: string;
  suffix?: string;
  trend?: number;
  trendLabel?: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
}

const KpiWidget: React.FC<KpiWidgetProps> = ({
  title,
  value,
  prefix = '',
  suffix = '',
  trend,
  trendLabel,
  icon,
  color = '#003357',
  backgroundColor = '#ffffff'
}) => {
  const { ref, fs } = useContainerSize();
  const isPositiveTrend = trend !== undefined && trend >= 0;

  return (
    <div ref={ref} style={{
      backgroundColor,
      borderRadius: '16px',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{ fontSize: fs(14), color: '#666', fontWeight: '500' }}>{title}</div>
        {icon && <div style={{ fontSize: fs(24) }}>{icon}</div>}
      </div>
      <div style={{ fontSize: fs(32), fontWeight: 'bold', color, marginBottom: '8px' }}>
        {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
      </div>
      {trend !== undefined && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: fs(14), fontWeight: 'bold', color: isPositiveTrend ? '#4caf50' : '#f44336' }}>
            {isPositiveTrend ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
          {trendLabel && (
            <span style={{ fontSize: fs(12), color: '#999' }}>{trendLabel}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default KpiWidget;
