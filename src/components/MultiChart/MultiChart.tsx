import React, { useState, useEffect, useRef } from 'react';
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
const CloudIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9Z"/>
    </svg>
);
const SpinnerIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83">
            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/>
        </path>
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
    /** Label shown on the toggle button */
    label: string;
    /** Endpoint path e.g. '/users' — combined with MultiChartProps.baseUrl */
    endpoint: string;
    /** Which response field → label (auto-detected if omitted) */
    labelKey?: string;
    /** Which response field → value (auto-detected if omitted) */
    valueKey?: string;
    /** Extra fetch options */
    fetchOptions?: RequestInit;
}

export interface MultiChartProps {
    title?: string;
    /** Base URL prepended to every ApiSource endpoint e.g. 'https://api.example.com' */
    baseUrl?: string;
    /** Static fallback data shown when no API is selected */
    data?: DataPoint[];
    /** List of API sources — each gets its own toggle button */
    apis?: ApiSource[];
    defaultChart?: ChartType;
    height?: number;
    defaultColor?: string;
    baseColor?: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function autoMap(raw: any[], labelKey?: string, valueKey?: string): DataPoint[] {
    if (!raw?.length) return [];
    const sample = raw[0];
    const keys = Object.keys(sample);
    const lk = labelKey ?? keys.find(k => typeof sample[k] === 'string') ?? keys[0];
    const vk = valueKey ?? keys.find(k => typeof sample[k] === 'number') ?? keys[1];
    return raw.map(item => ({
        label: String(item[lk] ?? ''),
        value: Number(item[vk] ?? 0),
        color: item.color,
    }));
}

const CHART_TYPES: { type: ChartType; label: string; icon: React.ReactNode }[] = [
    { type: 'bar',   label: 'Bar',   icon: <BarIcon /> },
    { type: 'line',  label: 'Line',  icon: <LineIcon /> },
    { type: 'pie',   label: 'Pie',   icon: <PieIcon /> },
    { type: 'donut', label: 'Donut', icon: <DonutIcon /> },
];

// ── Component ────────────────────────────────────────────────────────────────
const MultiChart: React.FC<MultiChartProps> = ({
    title = 'Chart',
    baseUrl = '',
    data: staticData = [],
    apis = [],
    defaultChart = 'bar',
    height = 260,
    defaultColor = '#003357',
    baseColor,
}) => {
    const [chartType, setChartType]       = useState<ChartType>(defaultChart);
    const [activeApi, setActiveApi]       = useState<number | null>(null); // index into apis[]
    const [apiCache, setApiCache]         = useState<Record<number, DataPoint[]>>({});
    const [loadingIdx, setLoadingIdx]     = useState<number | null>(null);
    const [error, setError]               = useState<string | null>(null);
    const abortRef                        = useRef<AbortController | null>(null);

    // Fetch when activeApi changes
    useEffect(() => {
        if (activeApi === null) return;
        if (apiCache[activeApi]) return; // already cached

        abortRef.current?.abort();
        const ctrl = new AbortController();
        abortRef.current = ctrl;

        const src = apis[activeApi];
        setLoadingIdx(activeApi);
        setError(null);

        fetch(`${baseUrl}${src.endpoint}`, { signal: ctrl.signal, ...src.fetchOptions })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(json => {
                const arr = Array.isArray(json) ? json : (json.data ?? json.results ?? json.items ?? []);
                setApiCache(prev => ({ ...prev, [activeApi]: autoMap(arr, src.labelKey, src.valueKey) }));
            })
            .catch(err => { if (err.name !== 'AbortError') setError(err.message); })
            .finally(() => setLoadingIdx(null));

        return () => ctrl.abort();
    }, [activeApi]);

    const handleApiToggle = (idx: number) => {
        setError(null);
        setActiveApi(prev => (prev === idx ? null : idx)); // clicking active → deselect (back to static)
    };

    const data: DataPoint[] = activeApi !== null ? (apiCache[activeApi] ?? []) : staticData;
    const isLoading = loadingIdx !== null;

    // ── Pill button style ──
    const pill = (active: boolean, accentColor = '#3b82f6'): React.CSSProperties => ({
        display: 'flex', alignItems: 'center', gap: '5px',
        padding: '5px 11px', borderRadius: '9999px', fontSize: '12px',
        fontWeight: 500, cursor: 'pointer', border: '1px solid', fontFamily: 'inherit',
        backgroundColor: active ? '#f1f5f9' : 'transparent',
        color: active ? accentColor : '#64748b',
        borderColor: active ? accentColor : '#e2e8f0',
        transition: 'all 0.2s ease-out',
    });

    const renderChart = () => {
        if (isLoading) return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, height, color: '#64748b', fontSize: 13 }}>
                <SpinnerIcon /> Loading…
            </div>
        );
        if (error) return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height, color: '#ef4444', fontSize: 13 }}>
                Error: {error}
            </div>
        );
        if (!data.length) return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height, color: '#94a3b8', fontSize: 13 }}>
                No data
            </div>
        );
        switch (chartType) {
            case 'bar':   return <BarChart   data={data} height={height} defaultColor={defaultColor} />;
            case 'line':  return <LineChart  data={data} height={height} defaultColor={defaultColor} />;
            case 'pie':   return <PieChart   data={data} baseColor={baseColor} />;
            case 'donut': return <DonutChart data={data} baseColor={baseColor} />;
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
            <div style={{ width: '100%', maxWidth: '1400px', backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                {/* ── Header ── */}
                <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>{title}</h1>
                        {activeApi !== null && (
                            <p style={{ margin: '3px 0 0', fontSize: '12px', color: '#64748b' }}>
                                {isLoading ? 'Fetching…' : apis[activeApi]?.endpoint}
                            </p>
                        )}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>

                        {/* Chart type toggles */}
                        {CHART_TYPES.map(({ type, label, icon }) => (
                            <button key={type} onClick={() => setChartType(type)} style={pill(chartType === type)}>
                                <span style={{ display: 'flex', opacity: chartType === type ? 1 : 0.45, transition: 'opacity 0.2s' }}>{icon}</span>
                                {label}
                            </button>
                        ))}

                        {/* Divider */}
                        {apis.length > 0 && (
                            <div style={{ width: '1px', height: '22px', backgroundColor: '#e2e8f0', margin: '0 2px' }} />
                        )}

                        {/* API source toggles */}
                        {apis.map((src, idx) => {
                            const isActive = activeApi === idx;
                            const isFetching = loadingIdx === idx;
                            return (
                                <button key={idx} onClick={() => handleApiToggle(idx)} style={pill(isActive, '#10b981')}>
                                    <span style={{ display: 'flex', opacity: isActive ? 1 : 0.45, transition: 'opacity 0.2s' }}>
                                        {isFetching ? <SpinnerIcon /> : <CloudIcon />}
                                    </span>
                                    {src.label}
                                    {isActive && !isFetching && apiCache[idx] && (
                                        <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 400 }}>
                                            · {apiCache[idx].length}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ── Chart area ── */}
                <div style={{ padding: '16px', width: '100%', boxSizing: 'border-box' }}>
                    {renderChart()}
                </div>

            </div>
        </div>
    );
};

export default MultiChart;
