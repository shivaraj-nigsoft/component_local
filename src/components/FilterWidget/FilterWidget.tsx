import React, { useState, useMemo } from 'react';

export interface FilterOption {
  label: string;
  value: string | number;
  count?: number;
  children?: FilterOption[];
  disabled?: boolean;
}

export interface DateRange {
  start: string;
  end: string;
}

export interface NumericRange {
  min: number;
  max: number;
}

export type FilterValue = string | number | (string | number)[] | DateRange | NumericRange;

export interface FilterWidgetProps {
  title?: string;
  options?: FilterOption[];
  defaultValue?: FilterValue;
  onChange: (value: FilterValue) => void;
  type?: 'dropdown' | 'buttons' | 'multiselect' | 'search' | 'daterange' | 'numericrange' | 'hierarchical' | 'tags';
  placeholder?: string;
  searchable?: boolean;
  clearable?: boolean;
  maxSelections?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
}

const FilterWidget: React.FC<FilterWidgetProps> = ({
  title,
  options = [],
  defaultValue,
  onChange,
  type = 'dropdown',
  placeholder = 'Select...',
  searchable = false,
  clearable = true,
  maxSelections,
  minValue = 0,
  maxValue = 100,
  step = 1
}) => {
  const [selected, setSelected] = useState<FilterValue>(defaultValue || (type === 'multiselect' || type === 'tags' ? [] : options[0]?.value || ''));
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState<Set<string | number>>(new Set());
  const [dateRange, setDateRange] = useState<DateRange>(defaultValue as DateRange || { start: '', end: '' });
  const [numericRange, setNumericRange] = useState<NumericRange>(defaultValue as NumericRange || { min: minValue, max: maxValue });
  const [tagInput, setTagInput] = useState('');

  const filteredOptions = useMemo(() => {
    if (!searchable || !searchTerm) return options;
    return options.filter(opt => 
      opt.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm, searchable]);

  const handleSingleChange = (value: string | number) => {
    setSelected(value);
    onChange(value);
  };

  const handleMultiChange = (value: string | number) => {
    const current = Array.isArray(selected) ? selected as (string | number)[] : [];
    const newSelected = current.includes(value)
      ? current.filter(v => v !== value)
      : maxSelections && current.length >= maxSelections
        ? current
        : [...current, value];
    setSelected(newSelected as FilterValue);
    onChange(newSelected as FilterValue);
  };

  const handleClear = () => {
    const cleared = type === 'multiselect' || type === 'tags' ? [] : '';
    setSelected(cleared);
    onChange(cleared);
  };

  const toggleExpand = (value: string | number) => {
    const newExpanded = new Set(expanded);
    newExpanded.has(value) ? newExpanded.delete(value) : newExpanded.add(value);
    setExpanded(newExpanded);
  };

  const handleDateChange = (field: 'start' | 'end', value: string) => {
    const newRange = { ...dateRange, [field]: value };
    setDateRange(newRange);
    onChange(newRange);
  };

  const handleNumericChange = (field: 'min' | 'max', value: number) => {
    const newRange = { ...numericRange, [field]: value };
    setNumericRange(newRange);
    onChange(newRange);
  };
 
  const handleTagAdd = (tag: string) => {
    if (!tag.trim()) return;
    const current = Array.isArray(selected) ? selected as (string | number)[] : [];
    if (!current.includes(tag)) {
      const newTags = [...current, tag.trim()];
      setSelected(newTags as FilterValue);
      onChange(newTags as FilterValue);
    }
    setTagInput('');
  };

  const handleTagRemove = (tag: string | number) => {
    const current = Array.isArray(selected) ? selected as (string | number)[] : [];
    const newTags = current.filter(t => t !== tag);
    setSelected(newTags as FilterValue);
    onChange(newTags as FilterValue);
  };

  const renderHierarchical = (opts: FilterOption[], level = 0) => (
    <div style={{ marginLeft: level * 20 }}>
      {opts.map(option => (
        <div key={option.value}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '8px', cursor: 'pointer', borderRadius: '4px', backgroundColor: (Array.isArray(selected) ? selected.includes(option.value) : selected === option.value) ? '#e6f2ff' : 'transparent' }}
            onClick={() => handleMultiChange(option.value)}>
            {option.children && (
              <span onClick={(e) => { e.stopPropagation(); toggleExpand(option.value); }} style={{ marginRight: '8px', fontSize: '12px' }}>
                {expanded.has(option.value) ? '▼' : '▶'}
              </span>
            )}
            <input type="checkbox" checked={Array.isArray(selected) && selected.includes(option.value)} onChange={() => {}} style={{ marginRight: '8px' }} />
            <span style={{ fontSize: '14px', color: option.disabled ? '#999' : '#333' }}>{option.label}</span>
            {option.count !== undefined && <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>({option.count})</span>}
          </div>
          {option.children && expanded.has(option.value) && renderHierarchical(option.children, level + 1)}
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', fontFamily: 'Arial, sans-serif', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        {title && <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#003357' }}>{title}</h3>}
        {clearable && (type === 'multiselect' || type === 'tags' ? (Array.isArray(selected) && selected.length > 0) : selected) && (
          <button onClick={handleClear} style={{ padding: '4px 12px', fontSize: '12px', border: 'none', borderRadius: '4px', backgroundColor: '#f0f0f0', color: '#666', cursor: 'pointer' }}>Clear</button>
        )}
      </div>

      {searchable && type !== 'daterange' && type !== 'numericrange' && (
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." style={{ width: '90%', padding: '10px', marginBottom: '12px', fontSize: '14px', border: '1px solid #d0d0d0', borderRadius: '8px', outline: 'none' }} />
      )}

      {type === 'dropdown' && (
        <select value={selected as string | number} onChange={(e) => handleSingleChange(e.target.value)} style={{ width: '90%', padding: '12px', fontSize: '14px', border: '1px solid #d0d0d0', borderRadius: '8px', backgroundColor: '#fff', color: '#333', cursor: 'pointer', outline: 'none' }}>
          {placeholder && <option value="">{placeholder}</option>}
          {filteredOptions.map((option) => <option key={option.value} value={option.value} disabled={option.disabled}>{option.label} {option.count !== undefined && `(${option.count})`}</option>)}
        </select>
      )}

      {type === 'buttons' && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {filteredOptions.map((option) => (
            <button key={option.value} onClick={() => handleSingleChange(option.value)} disabled={option.disabled} style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', border: selected === option.value ? '2px solid #003357' : '1px solid #d0d0d0', borderRadius: '8px', backgroundColor: selected === option.value ? '#003357' : '#fff', color: selected === option.value ? '#fff' : '#333', cursor: option.disabled ? 'not-allowed' : 'pointer', opacity: option.disabled ? 0.5 : 1, transition: 'all 0.2s' }}>
              {option.label} {option.count !== undefined && `(${option.count})`}
            </button>
          ))}
        </div>
      )}

      {type === 'multiselect' && (
        <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #d0d0d0', borderRadius: '8px', padding: '8px' }}>
          {filteredOptions.map((option) => (
            <label key={option.value} style={{ display: 'flex', alignItems: 'center', padding: '10px', cursor: option.disabled ? 'not-allowed' : 'pointer', borderRadius: '4px', transition: 'background 0.2s', backgroundColor: Array.isArray(selected) && selected.includes(option.value) ? '#e6f2ff' : 'transparent' }}>
              <input type="checkbox" checked={Array.isArray(selected) && selected.includes(option.value)} onChange={() => handleMultiChange(option.value)} disabled={option.disabled} style={{ marginRight: '10px', cursor: option.disabled ? 'not-allowed' : 'pointer' }} />
              <span style={{ fontSize: '14px', color: option.disabled ? '#999' : '#333', flex: 1 }}>{option.label}</span>
              {option.count !== undefined && <span style={{ fontSize: '12px', color: '#666' }}>({option.count})</span>}
            </label>
          ))}
        </div>
      )}

      {type === 'search' && (
        <input type="text" value={selected as string} onChange={(e) => { setSelected(e.target.value); onChange(e.target.value); }} placeholder={placeholder} style={{ width: '90%', padding: '12px', fontSize: '14px', border: '1px solid #d0d0d0', borderRadius: '8px', outline: 'none' }} />
      )}

      {type === 'daterange' && (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '4px' }}>Start Date</label>
            <input type="date" value={dateRange.start} onChange={(e) => handleDateChange('start', e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #d0d0d0', borderRadius: '8px', outline: 'none' }} />
          </div>
          <span style={{ marginTop: '20px', color: '#666' }}>—</span>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '4px' }}>End Date</label>
            <input type="date" value={dateRange.end} onChange={(e) => handleDateChange('end', e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #d0d0d0', borderRadius: '8px', outline: 'none' }} />
          </div>
        </div>
      )}
 
      {type === 'numericrange' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: '#666' }}>
            <span>Min: {numericRange.min}</span>
            <span>Max: {numericRange.max}</span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input type="range" min={minValue} max={maxValue} step={step} value={numericRange.min} onChange={(e) => handleNumericChange('min', Number(e.target.value))} style={{ flex: 1 }} />
            <input type="range" min={minValue} max={maxValue} step={step} value={numericRange.max} onChange={(e) => handleNumericChange('max', Number(e.target.value))} style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <input type="number" min={minValue} max={maxValue} step={step} value={numericRange.min} onChange={(e) => handleNumericChange('min', Number(e.target.value))} style={{ flex: 1, padding: '8px', fontSize: '14px', border: '1px solid #d0d0d0', borderRadius: '8px', outline: 'none' }} />
            <input type="number" min={minValue} max={maxValue} step={step} value={numericRange.max} onChange={(e) => handleNumericChange('max', Number(e.target.value))} style={{ flex: 1, padding: '8px', fontSize: '14px', border: '1px solid #d0d0d0', borderRadius: '8px', outline: 'none' }} />
          </div>
        </div>
      )}

      {type === 'hierarchical' && renderHierarchical(filteredOptions)}

      {type === 'tags' && (
        <div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleTagAdd(tagInput)} placeholder="Add tag..." style={{ flex: 1, padding: '10px', fontSize: '14px', border: '1px solid #d0d0d0', borderRadius: '8px', outline: 'none' }} />
            <button onClick={() => handleTagAdd(tagInput)} style={{ padding: '10px 20px', fontSize: '14px', border: 'none', borderRadius: '8px', backgroundColor: '#003357', color: '#fff', cursor: 'pointer' }}>Add</button>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {Array.isArray(selected) && selected.map((tag) => (
              <span key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', fontSize: '14px', backgroundColor: '#e6f2ff', color: '#003357', borderRadius: '16px' }}>
                {tag}
                <button onClick={() => handleTagRemove(tag)} style={{ border: 'none', background: 'none', color: '#003357', cursor: 'pointer', fontSize: '16px', lineHeight: 1, padding: 0 }}>×</button>
              </span>
            ))}
          </div>
        </div>
      )}

      {(type === 'multiselect' || type === 'hierarchical') && Array.isArray(selected) && selected.length > 0 && (
        <div style={{ marginTop: '12px', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '8px', fontSize: '12px', color: '#666' }}>
          Selected: {selected.length} {maxSelections && `/ ${maxSelections}`}
        </div>
      )}
    </div>
  );
};

export default FilterWidget;
