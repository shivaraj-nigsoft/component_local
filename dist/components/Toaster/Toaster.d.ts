import { default as React } from 'react';
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
export declare const showToast: (message: string, type?: ToastType, duration?: number) => void;
declare const Toaster: React.FC<ToasterProps>;
export default Toaster;
//# sourceMappingURL=Toaster.d.ts.map