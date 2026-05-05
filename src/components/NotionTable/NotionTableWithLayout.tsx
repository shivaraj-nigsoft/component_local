import React, { useState, useEffect } from 'react';
import { FaTable, FaTh, FaCalendarAlt, FaList, FaChartBar, FaRss, FaMap } from 'react-icons/fa';
import { MdTimeline, MdViewModule } from 'react-icons/md';
import {
  RowData,
  NotionTableProps,
} from './types';
import NotionTable from './NotionTable';

type ViewType = 'table' | 'board' | 'timeline' | 'calendar' | 'list' | 'gallery' | 'chart' | 'feed' | 'map';







const NotionTableWithLayout: React.FC<NotionTableProps> = ({ columns, initialData }) => {
  const [data] = useState<RowData[]>(initialData);
  const [currentView, setCurrentView] = useState<ViewType>('table');
  const [showLayoutMenu, setShowLayoutMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [editCell, setEditCell] = useState<{ rowId: string; colId: string } | null>(null);
  const [subRows] = useState<{ [parentId: string]: RowData[] }>({});
  const [copiedCell, setCopiedCell] = useState<{ rowId: string; colId: string; value: any } | null>(null);
  
  // Layout settings
  const [showPageIcon, setShowPageIcon] = useState(true);
  const [wrapPageTitles, setWrapPageTitles] = useState(true);
  const [showCalendarBy, setShowCalendarBy] = useState('Date');
  const [showCalendarAs, setShowCalendarAs] = useState('Month');
  const [showWeekends, setShowWeekends] = useState(true);
  const [openPagesIn, setOpenPagesIn] = useState('Center peek');
  
  const sortedData = data;

  useEffect(() => {
    const handleClickOutside = () => {
      setShowLayoutMenu(false);
      setCopiedCell(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setCopiedCell(null);
        setEditCell(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [editCell, copiedCell, data, subRows]);


  const getViewIcon = (viewType: ViewType) => {
    switch (viewType) {
      case 'table': return <FaTable />;
      case 'board': return <FaTh />;
      case 'timeline': return <MdTimeline />;
      case 'calendar': return <FaCalendarAlt />;
      case 'list': return <FaList />;
      case 'gallery': return <MdViewModule />;
      case 'chart': return <FaChartBar />;
      case 'feed': return <FaRss />;
      case 'map': return <FaMap />;
      default: return <FaTable />;
    }
  };

  const renderLayoutSwitcher = () => (
    <div style={{
      position: 'relative',
      display: 'inline-block',
      marginBottom: '16px'
    }}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowLayoutMenu(!showLayoutMenu);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
          border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          color: isDarkMode ? '#ffffff' : '#333333',
          outline: 'none'
        }}
      >
        {getViewIcon(currentView)}
        <span style={{ textTransform: 'capitalize' }}>{currentView}</span>
        <span style={{ fontSize: '12px' }}>▼</span>
      </button>

      {showLayoutMenu && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
          border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
          borderRadius: '8px',
          padding: '8px',
          zIndex: 1000,
          minWidth: '300px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          marginTop: '4px'
        }}>
          <div style={{
            padding: '4px 0',
            borderBottom: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
            marginBottom: '8px'
          }}>
            <span style={{
              fontSize: '12px',
              color: isDarkMode ? '#888' : '#666',
              fontWeight: '500',
              paddingLeft: '8px'
            }}>Layout</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
            {[
              { type: 'table' as ViewType, label: 'Table', icon: <FaTable /> },
              { type: 'board' as ViewType, label: 'Board', icon: <FaTh /> },
              { type: 'timeline' as ViewType, label: 'Timeline', icon: <MdTimeline /> },
              { type: 'calendar' as ViewType, label: 'Calendar', icon: <FaCalendarAlt /> },
              { type: 'list' as ViewType, label: 'List', icon: <FaList /> },
              { type: 'gallery' as ViewType, label: 'Gallery', icon: <MdViewModule /> },
              { type: 'chart' as ViewType, label: 'Chart', icon: <FaChartBar /> },
              { type: 'feed' as ViewType, label: 'Feed', icon: <FaRss /> },
              { type: 'map' as ViewType, label: 'Map', icon: <FaMap /> }
            ].map(({ type, label, icon }) => (
              <div
                key={type}
                onClick={() => {
                  setCurrentView(type);
                  setShowLayoutMenu(false);
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '12px 8px',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  backgroundColor: currentView === type ?
                    (isDarkMode ? '#444' : '#e3f2fd') : 'transparent',
                  color: isDarkMode ? '#ffffff' : '#333333',
                  fontSize: '12px',
                  border: currentView === type ? '2px solid #007bff' : '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (currentView !== type) {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#333' : '#f5f5f5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentView !== type) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '18px' }}>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9', paddingTop: '12px' }}>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: isDarkMode ? '#ffffff' : '#333333' }}>Show page icon</span>
                <div
                  onClick={() => setShowPageIcon(!showPageIcon)}
                  style={{
                    width: '40px',
                    height: '20px',
                    borderRadius: '10px',
                    backgroundColor: showPageIcon ? '#007bff' : '#ccc',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      position: 'absolute',
                      top: '2px',
                      left: showPageIcon ? '22px' : '2px',
                      transition: 'left 0.3s'
                    }}
                  />
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: isDarkMode ? '#ffffff' : '#333333' }}>Wrap page titles</span>
                <div
                  onClick={() => setWrapPageTitles(!wrapPageTitles)}
                  style={{
                    width: '40px',
                    height: '20px',
                    borderRadius: '10px',
                    backgroundColor: wrapPageTitles ? '#007bff' : '#ccc',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      position: 'absolute',
                      top: '2px',
                      left: wrapPageTitles ? '22px' : '2px',
                      transition: 'left 0.3s'
                    }}
                  />
                </div>
              </div>

              {currentView === 'calendar' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: isDarkMode ? '#ffffff' : '#333333' }}>Show calendar by</span>
                    <select
                      value={showCalendarBy}
                      onChange={(e) => setShowCalendarBy(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        backgroundColor: isDarkMode ? '#333' : '#fff',
                        color: isDarkMode ? '#fff' : '#333'
                      }}
                    >
                      <option value="Date">Date</option>
                      <option value="Created">Created</option>
                      <option value="Modified">Modified</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: isDarkMode ? '#ffffff' : '#333333' }}>Show calendar as</span>
                    <select
                      value={showCalendarAs}
                      onChange={(e) => setShowCalendarAs(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        backgroundColor: isDarkMode ? '#333' : '#fff',
                        color: isDarkMode ? '#fff' : '#333'
                      }}
                    >
                      <option value="Month">Month</option>
                      <option value="Week">Week</option>
                      <option value="Day">Day</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: isDarkMode ? '#ffffff' : '#333333' }}>Show weekends</span>
                    <div
                      onClick={() => setShowWeekends(!showWeekends)}
                      style={{
                        width: '40px',
                        height: '20px',
                        borderRadius: '10px',
                        backgroundColor: showWeekends ? '#007bff' : '#ccc',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: '#fff',
                          position: 'absolute',
                          top: '2px',
                          left: showWeekends ? '22px' : '2px',
                          transition: 'left 0.3s'
                        }}
                      />
                    </div>
                  </div>
                </>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: isDarkMode ? '#ffffff' : '#333333' }}>Open pages in</span>
                <select
                  value={openPagesIn}
                  onChange={(e) => setOpenPagesIn(e.target.value)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    backgroundColor: isDarkMode ? '#333' : '#fff',
                    color: isDarkMode ? '#fff' : '#333'
                  }}
                >
                  <option value="Center peek">Center peek</option>
                  <option value="Side peek">Side peek</option>
                  <option value="Full page">Full page</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  const renderBoardView = () => {
    const statusColumn = columns.find(col => col.type === 'select') || columns[0];
    const statusOptions = statusColumn?.options || [{ value: 'Default', color: '#007bff' }];
    const columnCount = columns.length;
    const cardMinWidth = Math.max(280, columnCount * 40);
    
    return (
      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', padding: '16px', minHeight: '400px' }}>
        {statusOptions.map(option => (
          <div key={option.value} style={{
            flex: `1 1 ${cardMinWidth}px`,
            minWidth: `${cardMinWidth}px`,
            maxWidth: `${Math.max(400, columnCount * 60)}px`,
            backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <h3 style={{ margin: '0 0 16px 0', color: isDarkMode ? '#ffffff' : '#333333' }}>{option.value}</h3>
            {sortedData.filter(row => row[statusColumn?.id || ''] === option.value).map(row => (
              <div key={row.id} style={{
                backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
                borderRadius: '6px',
                padding: '12px',
                marginBottom: '8px',
                color: isDarkMode ? '#ffffff' : '#333333',
                minHeight: Math.max(80, columnCount * 20),
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                {columns.map(col => {
                  const value = row[col.id];
                  if (!value || col.id === statusColumn?.id) return null;
                  return (
                    <div key={col.id} style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '4px',
                      alignItems: 'center',
                      minHeight: '20px'
                    }}>
                      <span style={{ fontWeight: '500', fontSize: '12px', color: isDarkMode ? '#888' : '#666', minWidth: '60px' }}>
                        {col.name}: 
                      </span>
                      <span style={{ fontSize: '12px', flex: '1' }}>{String(value)}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderListView = () => {
    const columnCount = columns.length;
    const minColumnWidth = Math.max(120, 800 / columnCount);
    
    return (
      <div style={{ padding: '16px', overflowX: 'auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns.length}, minmax(${minColumnWidth}px, 1fr))`,
          gap: '16px',
          padding: '12px',
          borderBottom: isDarkMode ? '2px solid #444' : '2px solid #e1e5e9',
          fontWeight: '600',
          backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
          color: isDarkMode ? '#ffffff' : '#333333',
          minWidth: `${columnCount * minColumnWidth}px`
        }}>
          {columns.map(col => (
            <div key={col.id} style={{ fontSize: '14px', minWidth: `${minColumnWidth}px` }}>{col.name}</div>
          ))}
        </div>
        {sortedData.map(row => (
          <div key={row.id} style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns.length}, minmax(${minColumnWidth}px, 1fr))`,
            gap: '16px',
            padding: '12px',
            borderBottom: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
            color: isDarkMode ? '#ffffff' : '#333333',
            minWidth: `${columnCount * minColumnWidth}px`
          }}>
            {columns.map(col => (
              <div key={col.id} style={{ fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: `${minColumnWidth}px` }}>
                {row[col.id] ? String(row[col.id]) : '-'}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderCalendarView = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} style={{ padding: '8px' }}></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isWeekend = new Date(year, month, day).getDay() === 0 || new Date(year, month, day).getDay() === 6;
      days.push(
        <div key={day} style={{
          padding: '8px',
          border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
          minHeight: '80px',
          backgroundColor: isWeekend && !showWeekends ? '#f5f5f5' : 'transparent',
          color: isDarkMode ? '#ffffff' : '#333333'
        }}>
          <div style={{ fontWeight: '500', marginBottom: '4px' }}>{day}</div>
        </div>
      );
    }
    
    return (
      <div style={{ padding: '16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          fontSize: '18px',
          fontWeight: '600',
          color: isDarkMode ? '#ffffff' : '#333333'
        }}>
          {monthNames[month]} {year}
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '1px',
          backgroundColor: isDarkMode ? '#444' : '#e1e5e9'
        }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} style={{
              padding: '8px',
              textAlign: 'center',
              fontWeight: '600',
              backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
              color: isDarkMode ? '#ffffff' : '#333333'
            }}>
              {day}
            </div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  const renderTimelineView = () => (
    <div style={{ padding: '16px' }}>
      <div style={{
        color: isDarkMode ? '#ffffff' : '#333333',
        fontSize: '18px',
        marginBottom: '16px'
      }}>
        Timeline View
      </div>
      {sortedData.map((row) => (
        <div key={row.id} style={{
          display: 'flex',
          gap: '16px',
          padding: '12px 0',
          borderLeft: isDarkMode ? '2px solid #444' : '2px solid #e1e5e9',
          paddingLeft: '16px',
          marginLeft: '8px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: '-6px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: isDarkMode ? '#666' : '#007bff'
          }} />
          <div style={{ flex: 1, color: isDarkMode ? '#ffffff' : '#333333' }}>
            {columns.map(col => {
              const value = row[col.id];
              if (!value) return null;
              return (
                <div key={col.id} style={{ marginBottom: '4px' }}>
                  <span style={{ fontWeight: '600', fontSize: '12px', color: isDarkMode ? '#888' : '#666' }}>
                    {col.name}: 
                  </span>
                  <span style={{ fontSize: '14px' }}>{String(value)}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  const renderGalleryView = () => {
    const columnCount = columns.length;
    const cardMinWidth = Math.max(280, columnCount * 35);
    
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${cardMinWidth}px, 1fr))`,
        gap: '16px',
        padding: '16px'
      }}>
        {sortedData.map(row => (
          <div key={row.id} style={{
            backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
            border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
            borderRadius: '8px',
            padding: '16px',
            color: isDarkMode ? '#ffffff' : '#333333',
            minHeight: Math.max(200, columnCount * 25),
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {columns.map(col => {
              const value = row[col.id];
              if (!value) return null;
              return (
                <div key={col.id} style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  minHeight: '24px'
                }}>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: isDarkMode ? '#888' : '#666' }}>
                    {col.name}
                  </div>
                  <div style={{ fontSize: '14px', wordBreak: 'break-word', flex: '1' }}>
                    {String(value)}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  const renderChartView = () => (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <div style={{
        color: isDarkMode ? '#ffffff' : '#333333',
        fontSize: '18px',
        marginBottom: '16px'
      }}>
        Chart View
      </div>
      <div style={{
        color: isDarkMode ? '#888' : '#666',
        fontSize: '14px'
      }}>
        Chart view would display data visualizations. This is a placeholder for chart implementation.
      </div>
    </div>
  );

  const renderFeedView = () => (
    <div style={{ padding: '16px' }}>
      {sortedData.map(row => (
        <div key={row.id} style={{
          backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
          border: isDarkMode ? '1px solid #444' : '1px solid #e1e5e9',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px',
          color: isDarkMode ? '#ffffff' : '#333333'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: isDarkMode ? '#444' : '#e1e5e9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px'
            }}>📝</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>
                {row[columns[0]?.id] || 'Untitled'}
              </div>
              <div style={{ fontSize: '12px', color: isDarkMode ? '#888' : '#666' }}>
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
            {columns.slice(1).map(col => {
              const value = row[col.id];
              if (!value) return null;
              return (
                <div key={col.id} style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ fontWeight: '500', fontSize: '12px', color: isDarkMode ? '#888' : '#666', minWidth: '80px' }}>
                    {col.name}:
                  </span>
                  <span style={{ fontSize: '14px', flex: 1 }}>{String(value)}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMapView = () => (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <div style={{
        color: isDarkMode ? '#ffffff' : '#333333',
        fontSize: '18px',
        marginBottom: '16px'
      }}>
        Map View
      </div>
      <div style={{
        color: isDarkMode ? '#888' : '#666',
        fontSize: '14px'
      }}>
        Map view would show location-based data. This is a placeholder for map implementation.
      </div>
    </div>
  ); 

  const renderCurrentView = () => {
    switch (currentView) {
      case 'table':
        return (
          <div style={{ 
            overflowX: 'auto', 
            width: '100%',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }} className="hide-scrollbar">
            <NotionTable columns={columns} initialData={data} />
          </div>
        );
      case 'board':
        return renderBoardView();
      case 'timeline':
        return renderTimelineView();
      case 'calendar':
        return renderCalendarView();
      case 'list':
        return renderListView();
      case 'gallery':
        return renderGalleryView();
      case 'chart':
        return renderChartView();
      case 'feed':
        return renderFeedView();
      case 'map':
        return renderMapView();
      default:
        return (
          <div style={{ 
            overflowX: 'auto', 
            width: '100%',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }} className="hide-scrollbar">
            <NotionTable columns={columns} initialData={data} />
          </div>
        );
       }
  };

  return (
    <>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div style={{
        backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#333333',
        padding: '20px',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {renderLayoutSwitcher()}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            padding: '8px 12px',
            backgroundColor: isDarkMode ? '#444' : '#f8f9fa',
            border: isDarkMode ? '1px solid #666' : '1px solid #e1e5e9',
            borderRadius: '6px',
            color: isDarkMode ? '#ffffff' : '#333333',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        {renderCurrentView()}
      </div>
      </div>
    </>
  );
};

export default NotionTableWithLayout;