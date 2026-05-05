import React, { useState, useEffect, useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

export interface ToasterProps {
  position?: ToastPosition;
  maxToasts?: number;
}

let toastId = 0;
const listeners: ((toast: Toast) => void)[] = [];

export const showToast = (message: string, type: ToastType = 'info', duration = 3000) => {
  const toast: Toast = { id: `toast-${++toastId}`, message, type, duration };
  listeners.forEach(listener => listener(toast));
};

const Toaster: React.FC<ToasterProps> = ({ position = 'top-right', maxToasts = 5 }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Toast) => {
    setToasts(prev => {
      const updated = [toast, ...prev];
      return updated.slice(0, maxToasts);
    });

    if (toast.duration) {
      setTimeout(() => removeToast(toast.id), toast.duration);
    }
  }, [maxToasts]);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  useEffect(() => {
    listeners.push(addToast);
    return () => {
      const index = listeners.indexOf(addToast);
      if (index > -1) listeners.splice(index, 1);
    };
  }, [addToast]);

  const getPositionStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = { position: 'fixed', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px' };
    switch (position) {
      case 'top-left': return { ...base, top: 0, left: 0 };
      case 'top-right': return { ...base, top: 0, right: 0 };
      case 'bottom-left': return { ...base, bottom: 0, left: 0 };
      case 'bottom-right': return { ...base, bottom: 0, right: 0 };
      case 'top-center': return { ...base, top: 0, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-center': return { ...base, bottom: 0, left: '50%', transform: 'translateX(-50%)' };
      default: return { ...base, top: 0, right: 0 };
    }
  };

  const getTypeStyles = (type: ToastType): React.CSSProperties => {
    const colors = {
      success: { bg: '#10b981', icon: '✓' },
      error: { bg: '#ef4444', icon: '✕' },
      warning: { bg: '#f59e0b', icon: '⚠' },
      info: { bg: '#3b82f6', icon: 'ℹ' }
    };
    return { backgroundColor: colors[type].bg };
  };

  const getIcon = (type: ToastType) => {
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    return icons[type];
  };

  return (
    <div style={getPositionStyles()}>
      {toasts.map(toast => (
        <div key={toast.id} style={{ ...getTypeStyles(toast.type), color: '#fff', padding: '12px 16px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: '12px', minWidth: '300px', maxWidth: '500px', animation: 'slideIn 0.3s ease-out', fontFamily: 'Arial, sans-serif' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{getIcon(toast.type)}</span>
          <span style={{ flex: 1, fontSize: '14px' }}>{toast.message}</span>
          <button onClick={() => removeToast(toast.id)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '18px', padding: 0, lineHeight: 1 }}>×</button>
        </div>
      ))}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Toaster;
