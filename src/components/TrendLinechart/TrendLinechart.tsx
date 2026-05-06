import React, { useState, Fragment } from 'react';
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
    ResponsiveContainer, LabelList, ReferenceLine 
} from 'recharts';

// SVG Icons
const Users = ({ size = 24, className = '', style = {} }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const Activity = ({ size = 24, className = '', style = {} }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);
const FlaskConical = ({ size = 24, className = '', style = {} }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a2.5 2.5 0 0 0 2.227 3.45h10.106a2.5 2.5 0 0 0 2.227-3.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>
);
const FileText = ({ size = 24, className = '', style = {} }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
);

const defaultData = [
    { month: 'Aug 25', IP_Count: 2, OP_Count: 19, Therapy_Tests: 0, Lab_Tests: 31 },
    { month: 'Sep 25', IP_Count: 20, OP_Count: 385, Therapy_Tests: 33, Lab_Tests: 288 },
    { month: 'Oct 25', IP_Count: 25, OP_Count: 430, Therapy_Tests: 56, Lab_Tests: 326 },
    { month: 'Nov 25', IP_Count: 47, OP_Count: 522, Therapy_Tests: 64, Lab_Tests: 545 },
    { month: 'Dec 25', IP_Count: 22, OP_Count: 459, Therapy_Tests: 51, Lab_Tests: 651 },
    { month: 'Jan 26', IP_Count: 46, OP_Count: 445, Therapy_Tests: 21, Lab_Tests: 667 },
    { month: 'Feb 26', IP_Count: 39, OP_Count: 532, Therapy_Tests: 51, Lab_Tests: 653 },
    { month: 'Mar 26', IP_Count: 37, OP_Count: 529, Therapy_Tests: 40, Lab_Tests: 699, IP_Count_Proj: 37, OP_Count_Proj: 529, Therapy_Tests_Proj: 40, Lab_Tests_Proj: 699 },
    { month: 'Apr 26', IP_Count_Proj: 35, OP_Count_Proj: 540, Therapy_Tests_Proj: 45, Lab_Tests_Proj: 710 },
    { month: 'May 26', IP_Count_Proj: 38, OP_Count_Proj: 555, Therapy_Tests_Proj: 42, Lab_Tests_Proj: 730 },
    { month: 'Jun 26', IP_Count_Proj: 40, OP_Count_Proj: 570, Therapy_Tests_Proj: 48, Lab_Tests_Proj: 745 },
    { month: 'Jul 26', IP_Count_Proj: 42, OP_Count_Proj: 590, Therapy_Tests_Proj: 50, Lab_Tests_Proj: 760 },
    { month: 'Aug 26', IP_Count_Proj: 45, OP_Count_Proj: 605, Therapy_Tests_Proj: 55, Lab_Tests_Proj: 780 },
    { month: 'Sep 26', IP_Count_Proj: 43, OP_Count_Proj: 620, Therapy_Tests_Proj: 58, Lab_Tests_Proj: 795 },
    { month: 'Oct 26', IP_Count_Proj: 46, OP_Count_Proj: 640, Therapy_Tests_Proj: 60, Lab_Tests_Proj: 810 },
    { month: 'Nov 26', IP_Count_Proj: 50, OP_Count_Proj: 660, Therapy_Tests_Proj: 65, Lab_Tests_Proj: 830 },
    { month: 'Dec 26', IP_Count_Proj: 55, OP_Count_Proj: 680, Therapy_Tests_Proj: 70, Lab_Tests_Proj: 850 },
];

const defaultMetricsConfig: Record<string, any> = {
    OP_Count: { label: 'Outpatients (OP)', shortLabel: 'OP', color: '#10b981', icon: Users },
    IP_Count: { label: 'Inpatients (IP)', shortLabel: 'IP', color: '#f59e0b', icon: Activity },
    Lab_Tests: { label: 'Lab Tests', shortLabel: 'Lab', color: '#3b82f6', icon: FlaskConical },
    Therapy_Tests: { label: 'Therapy Tests', shortLabel: 'Therapy', color: '#ec4899', icon: FileText }
};

const defaultDaysInMonthMap: Record<string, number> = {
    'Aug 25': 31, 'Sep 25': 30, 'Oct 25': 31, 'Nov 25': 30, 'Dec 25': 31,
    'Jan 26': 31, 'Feb 26': 28, 'Mar 26': 31, 'Apr 26': 30, 'May 26': 31,
    'Jun 26': 30, 'Jul 26': 31, 'Aug 26': 31, 'Sep 26': 30, 'Oct 26': 31,
    'Nov 26': 30, 'Dec 26': 31
};

export interface MetricConfig {
    label: string;
    shortLabel: string;
    color: string;
    icon?: any;
}

export interface TrendLinechartProps {
    title?: string;
    subtitle?: string;
    dateRangeBadge?: string;
    data?: any[];
    xAxisKey?: string;
    metricsConfig?: Record<string, MetricConfig>;
    referenceLineValue?: number;
    referenceLineLabel?: string;
    daysInMonthMap?: Record<string, number>;
}

const CustomTooltip = ({ active, payload, label, metricsConfig, daysInMonthMap }: any) => {
    if (active && payload && payload.length) {
        const filteredPayload = payload.filter((entry: any) => {
            if (entry.dataKey.endsWith('_Proj')) {
                const baseKey = entry.dataKey.replace('_Proj', '');
                if (payload.some((p: any) => p.dataKey === baseKey)) return false;
            }
            return true;
        });

        return (
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', zIndex: 50, position: 'relative', color: '#0f172a' }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: 600, borderBottom: '1px solid #f1f5f9', paddingBottom: '4px', fontSize: '14px', color: '#1e293b' }}>{label}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {filteredPayload.map((entry: any, index: number) => {
                        const isProj = entry.dataKey.endsWith('_Proj');
                        const baseKey = isProj ? entry.dataKey.replace('_Proj', '') : entry.dataKey;
                        const config = metricsConfig[baseKey] || { label: baseKey, shortLabel: baseKey, color: entry.color };
                        
                        // Calculate Daily Average if map is provided
                        let avgLabel = null;
                        if (daysInMonthMap && daysInMonthMap[label]) {
                            const dailyAvg = Math.ceil(entry.value / daysInMonthMap[label]);
                            avgLabel = <span style={{ color: '#64748b', fontWeight: 400, fontSize: '10px' }}>(DA - {dailyAvg})</span>;
                        }
                        
                        return (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: entry.color }} />
                                    <span style={{ color: '#475569', fontSize: '12px', fontWeight: 500 }}>
                                        {config.label} {isProj && <span style={{ color: '#94a3b8', fontSize: '10px', fontStyle: 'italic', marginLeft: '2px' }}>(Projected)</span>}
                                    </span>
                                </div>
                                <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                                    {entry.value}
                                    {avgLabel}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    return null;
};

const TrendLinechart: React.FC<TrendLinechartProps> = ({ 
    title = 'Annual Patient Trends',
    subtitle = 'Aug 2025 - Dec 2026 Volume & Projections',
    dateRangeBadge = 'Aug 25 - Dec 26',
    data: dataProp = defaultData,
    xAxisKey = 'month',
    metricsConfig = defaultMetricsConfig,
    referenceLineValue = 200,
    referenceLineLabel = 'Beds (200)',
    daysInMonthMap = defaultDaysInMonthMap
}) => {
    const data = dataProp ?? defaultData;
    const [activeMetrics, setActiveMetrics] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        Object.keys(metricsConfig).forEach(key => initial[key] = true);
        return initial;
    });

    const toggleMetric = (key: string) => {
        setActiveMetrics(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
            <div style={{ width: '100%', maxWidth: '1400px', backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                
                {/* Header Section */}
                <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>
                            {title}
                        </h1>
                        {subtitle && (
                            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px' }}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                    
                    {/* Interactive Toggles */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {Object.entries(metricsConfig as Record<string, any>).map(([key, config]: [string, any]) => {
                            const isActive = activeMetrics[key];
                            const Icon = config.icon;
                            
                            return (
                                <button
                                    key={key}
                                    onClick={() => toggleMetric(key)}
                                    style={{ 
                                        display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', border: '1px solid',
                                        backgroundColor: isActive ? '#f1f5f9' : 'transparent',
                                        color: isActive ? '#0f172a' : '#64748b',
                                        borderColor: isActive ? '#cbd5e1' : '#e2e8f0',
                                        transition: 'all 0.2s ease-out'
                                    }}
                                >
                                    {Icon && (
                                        <Icon 
                                            size={14} 
                                            style={{ color: isActive ? config.color : 'currentColor', opacity: isActive ? 1 : 0.5, transition: 'all 0.2s ease-out' }} 
                                        />
                                    )}
                                    {config.shortLabel}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Chart Area */}
                <div style={{ padding: '16px', minHeight: 320, flexShrink: 0, width: '100%', boxSizing: 'border-box' }}>
                    <ResponsiveContainer width="99%" height={320}>
                        <AreaChart
                            data={data}
                            margin={{ top: 20, right: 30, left: -25, bottom: 0 }}
                        >
                            <defs>
                                {Object.entries(metricsConfig as Record<string, any>).map(([key, config]: [string, any]) => (
                                    <linearGradient key={`color${key}`} id={`color${key}`} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor={config.color} stopOpacity={0.3} />
                                        <stop offset="95%" stopColor={config.color} stopOpacity={0} />
                                    </linearGradient>
                                ))}
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis 
                                dataKey={xAxisKey} 
                                stroke="#64748b" 
                                tick={{ fill: '#64748b', fontSize: 10 }}
                                tickMargin={8}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis 
                                stroke="#64748b" 
                                tick={{ fill: '#64748b', fontSize: 10 }}
                                tickMargin={8}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip content={<CustomTooltip metricsConfig={metricsConfig} daysInMonthMap={daysInMonthMap} />} />
                            
                            {/* Threshold Lines */}
                            {Number.isFinite(referenceLineValue) && (
                                <ReferenceLine 
                                    y={referenceLineValue} 
                                    stroke="#ef4444" 
                                    strokeDasharray="4 4" 
                                    label={referenceLineLabel ? { position: 'insideTopLeft', value: referenceLineLabel, fill: '#ef4444', fontSize: 10, fontWeight: 600, offset: 5 } : undefined} 
                                />
                            )}
                            
                            {/* Render lines based on active toggles */}
                            {Object.entries(metricsConfig as Record<string, any>).map(([key, config]: [string, any]) => (
                                activeMetrics[key] && (
                                    <Fragment key={key}>
                                        <Area
                                            type="monotone"
                                            dataKey={key}
                                            stroke={config.color}
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill={`url(#color${key})`}
                                            dot={{ r: 3, fill: '#ffffff', strokeWidth: 2, stroke: config.color }}
                                            activeDot={{ r: 5, strokeWidth: 0, fill: config.color }}
                                            animationDuration={1000}
                                            animationEasing="ease-in-out"
                                        >
                                            <LabelList dataKey={key} position="top" offset={6} style={{ fill: '#64748b', fontSize: 9, fontWeight: 600 }} />
                                        </Area>
                                        <Area
                                            type="monotone"
                                            dataKey={`${key}_Proj`}
                                            stroke={config.color}
                                            strokeWidth={3}
                                            strokeDasharray="4 4"
                                            fillOpacity={0.3}
                                            fill={`url(#color${key})`}
                                            dot={{ r: 3, fill: '#ffffff', strokeWidth: 2, stroke: config.color }}
                                            activeDot={{ r: 5, strokeWidth: 0, fill: config.color }}
                                            animationDuration={1000}
                                            animationEasing="ease-in-out"
                                        >
                                            <LabelList dataKey={`${key}_Proj`} position="top" offset={6} style={{ fill: '#94a3b8', fontSize: 9, fontWeight: 500 }} />
                                            <LabelList 
                                                content={(props: any) => {
                                                    const { x, y, index } = props;
                                                    if (index === data.length - 1) {
                                                        return (
                                                            <text 
                                                                x={x + 10} 
                                                                y={y} 
                                                                fill={config.color} 
                                                                fontSize={11} 
                                                                fontWeight={700} 
                                                                alignmentBaseline="middle"
                                                            >
                                                                {config.shortLabel}
                                                            </text>
                                                        );
                                                    }
                                                    return null;
                                                }} 
                                            />
                                        </Area>
                                    </Fragment>
                                )
                            ))}
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Annual Trend Table Section */}
                {data.length > 0 && (
                    <div style={{ padding: '16px', borderTop: '1px solid #e2e8f0', color: '#0f172a' }}>
                        <h2 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {title}
                            {dateRangeBadge && (
                                <span style={{ fontSize: '9px', fontWeight: 400, color: '#64748b', backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>
                                    {dateRangeBadge}
                                </span>
                            )}
                        </h2>
                        <div style={{ overflowX: 'auto', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                            <table style={{ width: '100%', fontSize: '12px', textAlign: 'left', whiteSpace: 'nowrap', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                                <thead style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                    <tr>
                                        <th style={{ padding: '6px 8px', fontWeight: 600, borderRight: '1px solid #e2e8f0', width: '80px', position: 'sticky', left: 0, backgroundColor: '#f8fafc', zIndex: 10 }}>
                                            Metric
                                        </th>
                                        {data.map((row, idx) => {
                                            // Determine if it's projected based on first active metric missing the non-proj key
                                            const firstActiveKey = Object.keys(metricsConfig)[0];
                                            const isProjected = firstActiveKey && !row.hasOwnProperty(firstActiveKey) && row.hasOwnProperty(`${firstActiveKey}_Proj`);
                                            
                                            return (
                                                <th key={idx} style={{ padding: '6px 2px', fontWeight: 600, textAlign: 'center', backgroundColor: isProjected ? 'rgba(241, 245, 249, 0.5)' : 'transparent' }}>
                                                    <div style={{ letterSpacing: '-0.05em' }}>{row[xAxisKey]}</div>
                                                    <div style={{ marginTop: '2px' }}>
                                                        <span style={{ padding: '1px 4px', fontSize: '8px', textTransform: 'uppercase', fontWeight: 700, borderRadius: '2px', backgroundColor: isProjected ? '#e2e8f0' : '#d1fae5', color: isProjected ? '#64748b' : '#047857', display: 'inline-block' }}>
                                                            {isProjected ? 'Prj' : 'Act'}
                                                        </span>
                                                    </div>
                                                </th>
                                            );
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(metricsConfig as Record<string, any>).map(([key, config]: [string, any]) => {
                                        if (!activeMetrics[key]) return null;
                                        
                                        return (
                                            <tr key={key} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                <td style={{ padding: '4px 8px', fontWeight: 500, color: '#0f172a', borderRight: '1px solid #e2e8f0', position: 'sticky', left: 0, backgroundColor: '#ffffff', zIndex: 10 }}>
                                                    {config.shortLabel}
                                                </td>
                                                {data.map((row, idx) => {
                                                    const val = row[key] ?? row[`${key}_Proj`];
                                                    const isProjected = !row.hasOwnProperty(key) && row.hasOwnProperty(`${key}_Proj`);
                                                    
                                                    return (
                                                        <td key={idx} style={{ padding: '4px 2px', textAlign: 'center', color: isProjected ? '#64748b' : '#0f172a', backgroundColor: isProjected ? 'rgba(248, 250, 252, 0.3)' : 'transparent', fontWeight: isProjected ? 400 : 500 }}>
                                                            {val !== undefined ? val : '-'}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default TrendLinechart;
