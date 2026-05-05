import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface TextWidgetProps {
  content: string;
  title?: string;
  variant?: 'note' | 'title' | 'description';
  align?: 'left' | 'center' | 'right';
  color?: string;
  backgroundColor?: string;
}

const TextWidget: React.FC<TextWidgetProps> = ({
  content,
  title,
  variant = 'description',
  align = 'left',
  color,
  backgroundColor = '#ffffff'
}) => {
  const { ref, fs } = useContainerSize();

  const variantStyles = {
    note: { fontSize: fs(14), fontStyle: 'italic' as const, color: color || '#666', lineHeight: '1.6' },
    title: { fontSize: fs(24), fontWeight: 'bold' as const, color: color || '#003357', lineHeight: '1.3' },
    description: { fontSize: fs(16), color: color || '#333', lineHeight: '1.7' }
  };

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
      {title && (
        <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357', textAlign: align }}>
          {title}
        </h3>
      )}
      <div style={{ ...variantStyles[variant], textAlign: align, whiteSpace: 'pre-wrap' }}>
        {content}
      </div>
    </div>
  );
};

export default TextWidget;
