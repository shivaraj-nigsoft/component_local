import React from 'react';
import ScaffoldTable from './ScaffoldTable';

const ScaffoldTableDemo: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ScaffoldTable
        initialRows={2}
        initialCols={5}
      />
    </div>
  );
};

export default ScaffoldTableDemo;