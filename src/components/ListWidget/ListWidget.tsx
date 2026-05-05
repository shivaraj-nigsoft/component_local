import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface ListItem {
  id: string | number;
  title: string;
  subtitle?: string;
  timestamp?: string;
  icon?: React.ReactNode;
  status?: 'success' | 'warning' | 'error' | 'info';
  color?: string;
}

export interface ListWidgetProps {
  items: ListItem[];
  title?: string;
  maxHeight?: number;
  showNumbers?: boolean;
  defaultColor?: string;
}

const ListWidget: React.FC<ListWidgetProps> = ({
  items,
  title,
  maxHeight = 400,
  showNumbers = false,
  defaultColor = '#003357'
}) => {
  const { ref, fs } = useContainerSize();

  const statusColors = {
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8'
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
      {title && <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357' }}>{title}</h3>}
      <div style={{ maxHeight, overflow: 'auto' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item, idx) => (
            <li key={item.id} style={{
              padding: '16px',
              borderBottom: idx < items.length - 1 ? '1px solid #e0e0e0' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'background-color 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              {showNumbers && (
                <span style={{
                  minWidth: '24px', height: '24px', borderRadius: '50%',
                  backgroundColor: item.color || defaultColor, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: fs(12), fontWeight: 'bold'
                }}>
                  {idx + 1}
                </span>
              )}
              {item.icon && <div style={{ fontSize: fs(20) }}>{item.icon}</div>}
              {item.status && (
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: statusColors[item.status] }} />
              )}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px', fontSize: fs(14) }}>{item.title}</div>
                {item.subtitle && <div style={{ fontSize: fs(13), color: '#666' }}>{item.subtitle}</div>}
              </div>
              {item.timestamp && (
                <div style={{ fontSize: fs(12), color: '#999', whiteSpace: 'nowrap' }}>{item.timestamp}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListWidget;
