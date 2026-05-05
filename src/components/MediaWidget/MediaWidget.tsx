import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface MediaWidgetProps {
  src: string;
  type: 'image' | 'video';
  title?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
}

const MediaWidget: React.FC<MediaWidgetProps> = ({
  src,
  type,
  title,
  alt = 'Media content',
  width = '100%',
  height = 'auto',
  autoPlay = false,
  controls = true,
  loop = false
}) => {
  const { ref, fs } = useContainerSize();

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
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
        {type === 'image' ? (
          <img src={src} alt={alt} style={{ width, height, display: 'block', objectFit: 'cover' }} />
        ) : (
          <video src={src} width={width} height={height} autoPlay={autoPlay} controls={controls} loop={loop} style={{ display: 'block' }}>
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default MediaWidget;
