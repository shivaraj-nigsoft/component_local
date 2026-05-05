import React, { useState } from 'react';
import { useContainerSize } from '../useContainerSize';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface DonutChartProps {
  data: DataPoint[];
  title?: string;
  total?: number;
  baseColor?: string;
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function generateShades(baseColor: string, data: DataPoint[]): string[] {
  const [r, g, b] = hexToRgb(baseColor);
  const sorted = [...data].sort((a, b) => a.value - b.value);
  const n = data.length;
  const shadeMap = new Map<DataPoint, string>();
  sorted.forEach((item, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const mix = (c: number) => Math.round(220 - t * (220 - c));
    const toHex = (c: number) => mix(c).toString(16).padStart(2, '0');
    shadeMap.set(item, `#${toHex(r)}${toHex(g)}${toHex(b)}`);
  });
  return data.map(item => shadeMap.get(item)!);
}

const toRad = (a: number) => (a * Math.PI) / 180;

/** Push label Y positions apart so no two are closer than minGap */
function spreadLabels(labels: { idx: number; y: number }[], minGap: number): number[] {
  const sorted = [...labels].sort((a, b) => a.y - b.y);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].y - sorted[i - 1].y < minGap)
      sorted[i].y = sorted[i - 1].y + minGap;
  }
  for (let i = sorted.length - 2; i >= 0; i--) {
    if (sorted[i + 1].y - sorted[i].y < minGap)
      sorted[i].y = sorted[i + 1].y - minGap;
  }
  const result = new Array<number>(labels.length);
  sorted.forEach(s => { result[s.idx] = s.y; });
  return result;
}

const LABEL_PAD = 28; // px padding above/below outermost label
const MIN_GAP   = 24; // px minimum between label rows
const HORIZ_LEN = 15; // px horizontal cap length
const ELBOW_R_OFFSET = 20; // px beyond outerR for elbow

const DonutChart: React.FC<DonutChartProps> = ({ data, title, total, baseColor }) => {
  const { ref, width, fs } = useContainerSize();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; value: number; pct: number } | null>(null);

  const containerW = width || 600;
  const svgWidth = Math.max(280, Math.min(containerW, 500));
  const labelMargin = 130;
  const outerR = svgWidth / 2 - labelMargin;
  const innerR = outerR * 0.52;
  const elbowR = outerR + ELBOW_R_OFFSET;

  const shades = baseColor ? generateShades(baseColor, data) : null;
  const sum = data.reduce((s, d) => s + d.value, 0);
  const displayTotal = total ?? sum;

  // ── Pass 1: geometry with cx=cy=svgWidth/2 (temporary center) ──
  const tempCx = svgWidth / 2;
  const tempCy = svgWidth / 2;

  let angle = -90;
  const raw = data.map((d, idx) => {
    const pct = (d.value / sum) * 100;
    const sweep = (d.value / sum) * 360;
    const start = angle;
    const end = angle + sweep;
    const mid = toRad(start + sweep / 2);
    const isRight = Math.cos(mid) >= 0;
    const color = shades ? shades[idx] : (d.color ?? '#4a90e2');

    const ex = tempCx + elbowR * Math.cos(mid);
    const ey = tempCy + elbowR * Math.sin(mid);

    angle = end;
    return { ...d, pct, sweep, start, end, mid, isRight, ex, ey, color, idx };
  });

  // ── Pass 2: spread labels per side ──
  const rightRaw = raw.filter(s => s.isRight);
  const leftRaw = raw.filter(s => !s.isRight);

  const rightYs = spreadLabels(rightRaw.map((s, i) => ({ idx: i, y: s.ey })), MIN_GAP);
  const leftYs = spreadLabels(leftRaw.map((s, i) => ({ idx: i, y: s.ey })), MIN_GAP);

  let ri = 0, li = 0;
  const withLabels = raw.map(s => {
    const labelY = s.isRight ? rightYs[ri++] : leftYs[li++];
    return { ...s, labelY };
  });

  // ── Pass 3: compute cy shift and viewBox to eliminate blank space ──
  const allLabelYs = withLabels.map(s => s.labelY);
  const minLabelY = Math.min(...allLabelYs) - LABEL_PAD;
  const maxLabelY = Math.max(...allLabelYs) + LABEL_PAD;

  const cyShift = minLabelY < 0 ? -minLabelY : 0;
  const cx = tempCx;
  const cy = tempCy + cyShift;

  // viewBox crops from actual top content to bottom content
  const vbTop = Math.min(minLabelY + cyShift, cy - outerR - LABEL_PAD);
  const vbBottom = Math.max(maxLabelY + cyShift, cy + outerR + LABEL_PAD);
  const svgHeight = vbBottom - vbTop;

  // ── Pass 4: rebuild final geometry with corrected cy ──
  angle = -90;
  const slices = data.map((_d, idx) => {
    const s = withLabels[idx];
    const sweep = s.sweep;
    const start = angle;
    const end = angle + sweep;
    const mid = s.mid;

    const x1 = cx + outerR * Math.cos(toRad(start));
    const y1 = cy + outerR * Math.sin(toRad(start));
    const x2 = cx + outerR * Math.cos(toRad(end));
    const y2 = cy + outerR * Math.sin(toRad(end));
    const ix1 = cx + innerR * Math.cos(toRad(end));
    const iy1 = cy + innerR * Math.sin(toRad(end));
    const ix2 = cx + innerR * Math.cos(toRad(start));
    const iy2 = cy + innerR * Math.sin(toRad(start));
    const large = sweep > 180 ? 1 : 0;

    const path = `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${large} 0 ${ix2} ${iy2} Z`;

    const lineStartX = cx + (outerR + 2) * Math.cos(mid);
    const lineStartY = cy + (outerR + 2) * Math.sin(mid);

    // Structured mapping: elbow point lies on a concentric ellipse to guarantee non-crossing
    const a = outerR + 30; // horizontal radius
    const b = Math.max(outerR + 50, sum * 1.5); // vertical radius (cap space dynamically)
    
    // clamp labelY to ensure it can map to the ellipse
    const clampedLabelY = Math.max(cy - b + 5, Math.min(cy + b - 5, s.labelY + cyShift));
    const dy = (clampedLabelY - cy) / b;
    const ellipseX = cx + a * Math.sqrt(Math.max(0, 1 - dy * dy)) * (s.isRight ? 1 : -1);

    const lx2 = ellipseX + (s.isRight ? HORIZ_LEN : -HORIZ_LEN);
    const textAnchor: 'start' | 'end' = s.isRight ? 'start' : 'end';
    const textX = lx2 + (s.isRight ? 5 : -5);

    angle = end;
    return { ...s, path, lineStartX, lineStartY, ellipseX, labelY: clampedLabelY, lx2, textAnchor, textX };
  });

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {title && (
        <h6 style={{ margin: '0 0 20px 0', fontSize: fs(12), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h6>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <svg width={svgWidth} height={svgHeight} viewBox={`0 ${vbTop} ${svgWidth} ${svgHeight}`} style={{ overflow: 'visible', display: 'block' }}>
          {/* Donut slices */}
          {slices.map((s, i) => (
            <g key={i}
              onMouseEnter={e => setTooltip({ x: e.clientX, y: e.clientY, label: s.label, value: s.value, pct: s.pct })}
              onMouseMove={e => setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : null)}
              onMouseLeave={() => setTooltip(null)}
              style={{ cursor: 'pointer' }}
            >
              <path d={s.path} fill={s.color} stroke="#fff" strokeWidth="2" />
            </g>
          ))}

          {/* Center total */}
          <text x={cx} y={cy - 8} textAnchor="middle" dominantBaseline="middle"
            fill="#2c3e50" fontSize={fs(13)} fontWeight="600">TOTAL</text>
          <text x={cx} y={cy + 10} textAnchor="middle" dominantBaseline="middle"
            fill="#2c3e50" fontSize={fs(13)} fontWeight="700">
            {displayTotal.toLocaleString('en-IN')}
          </text>

          {/* Connector lines: radial-diagonal -> horizontal cap */}
          {slices.map((s, i) => (
            <g key={`label-${i}`}>
              <polyline
                points={`${s.lineStartX},${s.lineStartY} ${s.ellipseX},${s.labelY} ${s.lx2},${s.labelY}`}
                stroke={s.color} strokeWidth="1.2" fill="none" strokeLinejoin="round"
              />
              {/* label: name + percentage */}
              <text x={s.textX} y={s.labelY} textAnchor={s.textAnchor} dominantBaseline="middle"
                fill="#2c3e50" fontSize={fs(11)} fontWeight="600">
                {s.label}: {s.pct.toFixed(1)}%
              </text>
            </g>
          ))}
        </svg>

        {tooltip && (
          <div style={{
            position: 'fixed', left: tooltip.x + 12, top: tooltip.y - 10,
            backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff',
            padding: '8px 12px', borderRadius: '6px', fontSize: fs(12),
            pointerEvents: 'none', zIndex: 1000, whiteSpace: 'nowrap'
          }}>
            <div style={{ fontWeight: 'bold' }}>{tooltip.label}</div>
            <div>Value: {tooltip.value.toLocaleString('en-IN')}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonutChart;
