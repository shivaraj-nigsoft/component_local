import React, { useId } from 'react';
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
  const uniqueId = useId();
  const safeId = uniqueId.replace(/:/g, '_');

  // Derive accent glow color from the main color prop
  const accentGlow = color;

  // Determine if background is dark to adjust text colors
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
      : { r: 255, g: 255, b: 255 };
  };
  const bgRgb = hexToRgb(backgroundColor);
  const bgLuminance = (0.299 * bgRgb.r + 0.587 * bgRgb.g + 0.114 * bgRgb.b) / 255;
  const isDark = bgLuminance < 0.5;

  // Glassy Background calculation
  const glassyBg = `rgba(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}, 0.55)`;
  
  const subtitleColor = isDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.55)';
  const trendLabelColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.45)';
  const shimmerColor = isDark
    ? 'rgba(255,255,255,0.15)'
    : 'rgba(255,255,255,0.85)';
  const shimmerEdge = 'rgba(255,255,255,0.0)';

  const keyframes = `
    @keyframes kpi-shimmer-${safeId} {
      0%   { transform: translateX(-150%) skewX(-25deg); }
      100% { transform: translateX(250%) skewX(-25deg); }
    }
    @keyframes kpi-glow-pulse-${safeId} {
      0%, 100% { box-shadow: 0 0 18px 2px ${accentGlow}33, 0 8px 32px 0 rgba(0,0,0,0.15); }
      50%      { box-shadow: 0 0 35px 8px ${accentGlow}55, 0 12px 48px 0 rgba(0,0,0,0.2); }
    }
    @keyframes kpi-trend-bounce-${safeId} {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-3px); }
    }
    @keyframes kpi-icon-float-${safeId} {
      0%, 100% { transform: translateY(0) scale(1); }
      50%      { transform: translateY(-5px) scale(1.1); }
    }
    @keyframes kpi-border-flow-${safeId} {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes kpi-value-in-${safeId} {
      0%   { opacity: 0; transform: translateY(10px) scale(0.95); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        ref={ref}
        style={{
          position: 'relative',
          borderRadius: '24px',
          padding: '2px',            /* gradient border thickness */
          background: `linear-gradient(135deg, ${accentGlow}88, ${accentGlow}22, ${accentGlow}66)`,
          backgroundSize: '200% 200%',
          animation: `kpi-border-flow-${safeId} 4s ease infinite, kpi-glow-pulse-${safeId} 3s ease-in-out infinite`,
          width: '100%',
          boxSizing: 'border-box',
          transition: 'transform 0.4s cubic-bezier(.175, .885, .32, 1.275)',
          cursor: 'default',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px) scale(1.02)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
        }}
      >
        {/* Inner glass card */}
        <div
          style={{
            background: glassyBg,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '22px',
            padding: '28px 26px 22px',
            fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid rgba(255, 255, 255, ${isDark ? 0.1 : 0.4})`,
            boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
          }}
        >
          {/* Glass reflection highlight at top */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
              pointerEvents: 'none',
              zIndex: 1,
              borderRadius: '22px 22px 0 0',
            }}
          />

          {/* Shimmer sweep overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '60%',
              height: '100%',
              background: `linear-gradient(90deg, ${shimmerEdge} 0%, ${shimmerColor} 50%, ${shimmerEdge} 100%)`,
              animation: `kpi-shimmer-${safeId} 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
              pointerEvents: 'none',
              zIndex: 3,
              mixBlendMode: isDark ? 'screen' : 'overlay',
            }}
          />

          {/* Decorative corner glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${accentGlow}33 0%, transparent 70%)`,
              pointerEvents: 'none',
              zIndex: 0,
              filter: 'blur(10px)',
            }}
          />

          {/* Header row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '14px',
              position: 'relative',
              zIndex: 4,
            }}
          >
            <div
              style={{
                fontSize: fs(13),
                color: subtitleColor,
                fontWeight: '600',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}
            >
              {title}
            </div>
            {icon && (
              <div
                style={{
                  fontSize: fs(28),
                  animation: `kpi-icon-float-${safeId} 3s ease-in-out infinite`,
                  filter: `drop-shadow(0 4px 8px ${accentGlow}66)`,
                  lineHeight: 1,
                  color: isDark ? '#fff' : color,
                }}
              >
                {icon}
              </div>
            )}
          </div>

          {/* Value */}
          <div
            style={{
              fontSize: fs(38),
              fontWeight: '800',
              color,
              marginBottom: '12px',
              letterSpacing: '-0.5px',
              position: 'relative',
              zIndex: 4,
              animation: `kpi-value-in-${safeId} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both`,
              textShadow: isDark ? `0 2px 10px ${accentGlow}44` : `0 1px 5px ${accentGlow}33`,
            }}
          >
            {prefix}
            {typeof value === 'number' ? value.toLocaleString() : value}
            {suffix}
          </div>

          {/* Trend pill */}
          {trend !== undefined && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                position: 'relative',
                zIndex: 4,
                background: isPositiveTrend
                  ? 'rgba(76, 175, 80, 0.15)'
                  : 'rgba(244, 67, 54, 0.15)',
                borderRadius: '20px',
                padding: '5px 14px',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: `1px solid ${isPositiveTrend ? 'rgba(76, 175, 80, 0.3)' : 'rgba(244, 67, 54, 0.3)'}`,
              }}
            >
              <span
                style={{
                  fontSize: fs(13),
                  fontWeight: '800',
                  color: isPositiveTrend ? '#4ade80' : '#f87171',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  animation: `kpi-trend-bounce-${safeId} 2s ease-in-out infinite`,
                  textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                <span style={{ fontSize: fs(15) }}>
                  {isPositiveTrend ? '▲' : '▼'}
                </span>
                {Math.abs(trend)}%
              </span>
              {trendLabel && (
                <span
                  style={{
                    fontSize: fs(12),
                    color: trendLabelColor,
                    fontWeight: '600',
                  }}
                >
                  {trendLabel}
                </span>
              )}
            </div>
          )}

          {/* Bottom accent line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '20px',
              right: '20px',
              height: '4px',
              borderRadius: '4px 4px 0 0',
              background: `linear-gradient(90deg, transparent, ${accentGlow}88, transparent)`,
              zIndex: 4,
              boxShadow: `0 -2px 10px ${accentGlow}44`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default KpiWidget;
