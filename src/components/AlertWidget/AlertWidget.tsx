import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface Alert {
  id: string | number;
  message: string;
  timestamp: string;
  type: 'success' | 'warning' | 'error' | 'info';
  read?: boolean;
}

export interface AlertWidgetProps {
  alerts: Alert[];
  title?: string;
  maxHeight?: number;
  onDismiss?: (id: string | number) => void;
}

const AlertWidget: React.FC<AlertWidgetProps> = ({
  alerts,
  title,
  maxHeight = 400,
  onDismiss
}) => {
  const { ref, fs } = useContainerSize();

  const typeStyles = {
    success: { bg: '#d4edda', border: '#28a745', icon: '✓' },
    warning: { bg: '#fff3cd', border: '#ffc107', icon: '⚠' },
    error: { bg: '#f8d7da', border: '#dc3545', icon: '✕' },
    info: { bg: '#d1ecf1', border: '#17a2b8', icon: 'ℹ' }
  };

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
        <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h3>
      )}
      <div style={{ maxHeight, overflow: 'auto' }}>
        {alerts.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center', padding: '20px', fontSize: fs(14) }}>No alerts</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {alerts.map((alert) => {
              const style = typeStyles[alert.type];
              return (
                <div
                  key={alert.id}
                  style={{
                    padding: '16px',
                    backgroundColor: style.bg,
                    border: `1px solid ${style.border}`,
                    borderLeft: `4px solid ${style.border}`,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    opacity: alert.read ? 0.6 : 1
                  }}
                >
                  <span style={{ fontSize: fs(18), fontWeight: 'bold' }}>{style.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: fs(14), color: '#333', marginBottom: '4px' }}>{alert.message}</div>
                    <div style={{ fontSize: fs(12), color: '#666' }}>{alert.timestamp}</div>
                  </div>
                  {onDismiss && (
                    <button
                      onClick={() => onDismiss(alert.id)}
                      style={{ background: 'none', border: 'none', fontSize: fs(18), cursor: 'pointer', color: '#666', padding: '0 4px' }}
                    >
                      ×
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertWidget;
