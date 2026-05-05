import React from 'react';
import { useContainerSize } from '../useContainerSize';

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

const StatusWidget: React.FC<StatusWidgetProps> = ({
  title,
  paymentMethods
}) => {
  const { ref, fs } = useContainerSize();

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '0',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}>
    

      <div style={{ padding: '24px' }}>
       
       <h4 style={{color:'#003357'}}>{title}</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {paymentMethods.map((method, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ color: '#7a8a99', fontSize: fs(16), fontWeight: '600', minWidth: '70px', textAlign: 'right' }}>
                {method.label}
              </div>
              <div style={{ flex: 1, position: 'relative' }}>
                <div style={{ backgroundColor: '#e8e8e8', height: '24px', borderRadius: '12px', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: method.color, height: '100%', width: `${method.percentage}%`, borderRadius: '12px' }} />
                </div>
              </div>
              <div style={{ fontSize: fs(18), fontWeight: '400', minWidth: '110px', textAlign: 'right', color: '#2c3e50' }}>
                {method.amount.toLocaleString('en-IN')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusWidget;
