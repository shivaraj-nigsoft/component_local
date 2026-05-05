import { default as React } from 'react';
interface PaymentMethod {
    label: string;
    amount: number;
    color: string;
    percentage: number;
}
export interface StatusWidgetProps {
    title: string;
    totalAmount: number;
    outpatient?: number;
    inpatient?: number;
    paymentMethods: PaymentMethod[];
}
declare const StatusWidget: React.FC<StatusWidgetProps>;
export default StatusWidget;
//# sourceMappingURL=StatusWidget.d.ts.map