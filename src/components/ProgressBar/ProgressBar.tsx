import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  height?: number;
  color?: string;
  backgroundColor?: string;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = true,
  height = 24,
  color = '#003357',
  backgroundColor = '#e0e0e0',
  animated = false
}) => {
  const { ref, fs } = useContainerSize();
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div ref={ref} style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'Arial, sans-serif' }}>
      {label && (
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          marginBottom: '8px', fontSize: fs(14), color: '#333', fontWeight: '500'
        }}>
          <span>{label}</span>
          {showPercentage && <span>{percentage.toFixed(0)}%</span>}
        </div>
      )}
      <div style={{
        width: '100%', height: `${height}px`, backgroundColor,
        borderRadius: `${height / 2}px`, overflow: 'hidden', position: 'relative'
      }}>
        <div style={{
          width: `${percentage}%`, height: '100%', backgroundColor: color,
          borderRadius: `${height / 2}px`,
          transition: animated ? 'width 0.3s ease' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          paddingRight: percentage > 10 ? '8px' : '0'
        }}>
          {!label && showPercentage && percentage > 10 && (
            <span style={{ color: '#fff', fontSize: fs(12), fontWeight: 'bold' }}>
              {percentage.toFixed(0)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
