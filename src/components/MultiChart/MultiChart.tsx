import React, { useState, useEffect } from 'react';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';
import PieChart from '../PieChart/PieChart';
import DonutChart from '../DonutChart/DonutChart';

// ── Icons ────────────────────────────────────────────────────────────────────
const BarIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/>
    </svg>
);
const LineIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 9 11 13 15 21 7"/>
    </svg>
);
const PieIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
    </svg>
);
const DonutIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
    </svg>
);

// ── Types ────────────────────────────────────────────────────────────────────
type ChartType = 'bar' | 'line' | 'pie' | 'donut';

interface DataPoint {
    label: string;
    value: number;
    color?: string;
}

export interface ApiSource {
    label: string;
    endpoint: string;
    labelKey?: string;
    valueKey?: string;
}

export interface MultiChartProps {
    title?: string;
    data?: DataPoint[];
    apis?: ApiSource[];
    activeEndpoint?: string;
    onEndpointSelect?: (endpoint: string) => void;
    isLoading?: boolean;
    defaultChart?: ChartType;
    height?: number;
    defaultColor?: string;
}

const CHART_TYPES: { type: ChartType; label: string; icon: React.ReactNode }[] = [
    { type: 'bar',   label: 'Bar',   icon: <BarIcon /> },
    { type: 'line',  label: 'Line',  icon: <LineIcon /> },
    { type: 'pie',   label: 'Pie',   icon: <PieIcon /> },
    { type: 'donut', label: 'Donut', icon: <DonutIcon /> },
];

// ── Component ────────────────────────────────────────────────────────────────
const MultiChart: React.FC<MultiChartProps> = ({
    data = [],
    apis = [],
    activeEndpoint,
    onEndpointSelect,
    isLoading = false,
    defaultChart = 'bar',
    height = 220,
    defaultColor = '#003357',
}) => {
    const [chartType, setChartType] = useState<ChartType>(defaultChart);

    useEffect(() => {
        if (!activeEndpoint && apis.length > 0) {
            onEndpointSelect?.(apis[0].endpoint);
        }
    }, []);

    const pill = (active: boolean): React.CSSProperties => ({
        display: 'flex', alignItems: 'center', gap: '5px',
        padding: '5px 11px', borderRadius: '8px', fontSize: '11px',
        fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
        border: active ? '1.5px solid #3b82f6' : '1.5px solid #e2e8f0',
        backgroundColor: active ? '#eff6ff' : '#ffffff',
        color: active ? '#2563eb' : '#94a3b8',
        boxShadow: active ? '0 1px 4px rgba(59,130,246,0.15)' : 'none',
        transition: 'all 0.18s ease-out',
    });

    const endpointPill = (active: boolean): React.CSSProperties => ({
        display: 'flex', alignItems: 'center',
        padding: '4px 12px', borderRadius: '6px', fontSize: '11px',
        fontWeight: 600, cursor: 'pointer', border: 'none', fontFamily: 'inherit',
        background: active ? 'linear-gradient(135deg,#6366f1,#4f46e5)' : '#f1f5f9',
        color: active ? '#ffffff' : '#64748b',
        boxShadow: active ? '0 2px 6px rgba(99,102,241,0.35)' : 'none',
        transition: 'all 0.18s ease-out',
        whiteSpace: 'nowrap' as const,
        letterSpacing: active ? '0.01em' : 'normal',
    });

    const renderChart = () => {
        if (isLoading) return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height, color: '#94a3b8', fontSize: 12, gap: 8 }}>
                <div style={{
                    width: 18, height: 18, border: '2px solid #e2e8f0',
                    borderTopColor: defaultColor, borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                }} />
                Loading...
            </div>
        );
        if (!data.length) return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height, color: '#94a3b8', fontSize: 13 }}>
                {activeEndpoint ? 'No data' : 'Select an endpoint above'}
            </div>
        );
        switch (chartType) {
            case 'bar':   return <BarChart   data={data} height={height} defaultColor={defaultColor} />;
            case 'line':  return <LineChart  data={data} height={height} defaultColor={defaultColor} />;
            case 'pie':   return <PieChart   data={data} />;
            case 'donut': return <DonutChart data={data} />;
        }
    };

    return (
        <div style={{ width: '100%', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
{/* ── Single toolbar row: API buttons + chart toggles ── */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    {CHART_TYPES.map(({ type, label, icon }) => (
                        <button key={type} onClick={() => setChartType(type)} style={pill(chartType === type)}>
                            <span style={{ display: 'flex', opacity: chartType === type ? 1 : 0.5 }}>{icon}</span>
                            {label}
                        </button>
                    ))}
                </div>
                {apis.length > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        {apis.map((api) => (
                            <button
                                key={api.endpoint}
                                onClick={() => onEndpointSelect?.(api.endpoint)}
                                style={endpointPill(activeEndpoint === api.endpoint)}
                            >
                                {api.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {/* ── Chart area ── */}
            <div style={{ width: '100%', boxSizing: 'border-box' }}>
                {renderChart()}
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
};

export default MultiChart;
