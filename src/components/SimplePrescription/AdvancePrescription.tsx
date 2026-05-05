import React, { useState } from 'react';
import medicineData from './medicineData.json';

interface Medicine {
  id: number;
  name: string;
  generic: string;
  dosage: string;
}

interface MedicineRow {
  id: string;
  name: string;
  days: string;
  morning: { bf: boolean; af: boolean };
  afternoon: { bf: boolean; af: boolean };
  evening: { bf: boolean; af: boolean };
  night: { bf: boolean; af: boolean };
  comment: string;
}

const AdvancePrescription: React.FC = () => {
  const [medicines, setMedicines] = useState<MedicineRow[]>(() => {
    const saved = sessionStorage.getItem('medicines');
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        name: '',
        days: '',
        morning: { bf: false, af: false },
        afternoon: { bf: false, af: false },
        evening: { bf: false, af: false },
        night: { bf: false, af: false },
        comment: ''
      }
    ];
  });
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showCommentBox, setShowCommentBox] = useState<string | null>(null);
  const [tempComment, setTempComment] = useState<string>('');

  const filteredMedicines = medicineData.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.generic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addMedicine = () => {
    const newMedicine: MedicineRow = {
      id: Date.now().toString(),
      name: '',
      days: '',
      morning: { bf: false, af: false },
      afternoon: { bf: false, af: false },
      evening: { bf: false, af: false },
      night: { bf: false, af: false },
      comment: ''
    };
    setMedicines([...medicines, newMedicine]);
  };

  const updateMedicine = (id: string, field: keyof MedicineRow, value: any) => {
    setMedicines(medicines.map(med => 
      med.id === id ? { ...med, [field]: value } : med
    ));
  };

  const updateTimeSlot = (id: string, timeSlot: 'morning' | 'afternoon' | 'evening' | 'night', type: 'bf' | 'af') => {
    setMedicines(medicines.map(med => 
      med.id === id ? { 
        ...med, 
        [timeSlot]: { bf: type === 'bf', af: type === 'af' }
      } : med
    ));
  };

  const selectMedicine = (medicineId: string, selectedMedicine: Medicine) => {
    updateMedicine(medicineId, 'name', selectedMedicine.name);
    setShowDropdown(null);
    setSearchTerm('');
  };

  const handleInputChange = (medicineId: string, value: string) => {
    updateMedicine(medicineId, 'name', value);
    setSearchTerm(value);
    setShowDropdown(value ? medicineId : null);
  };

  const openCommentBox = (medicineId: string) => {
    const medicine = medicines.find(med => med.id === medicineId);
    setTempComment(medicine?.comment || '');
    setShowCommentBox(medicineId);
  };

  const saveComment = (medicineId: string) => {
    const updatedMedicines = medicines.map(med => 
      med.id === medicineId ? { ...med, comment: tempComment } : med
    );
    setMedicines(updatedMedicines);
    sessionStorage.setItem('medicines', JSON.stringify(updatedMedicines));
    setShowCommentBox(null);
    setTempComment('');
  };

  const editComment = (medicineId: string) => {
    const medicine = medicines.find(med => med.id === medicineId);
    setTempComment(medicine?.comment || '');
    setShowCommentBox(medicineId);
  };

  const cancelComment = () => {
    setShowCommentBox(null);
    setTempComment('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: 'white' }} onClick={() => setShowDropdown(null)}>
      {/* <h2 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold', color: 'black' }}>
        Medicine Prescription
      </h2> */}
      
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', backgroundColor: 'white' }}>
        <thead>
          <tr style={{ backgroundColor: 'white' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left', color: 'black' }}>Medicine Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', color: 'black' }}>Days</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', color: 'black' }}>Morning</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', color: 'black' }}>Afternoon</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', color: 'black' }}>Evening</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', color: 'black' }}>Night</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <React.Fragment key={medicine.id}>
              <tr style={{ backgroundColor: 'white' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd', position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Type medicine name"
                    value={medicine.name}
                    onChange={(e) => handleInputChange(medicine.id, e.target.value)}
                    onFocus={() => setShowDropdown(medicine.id)}
                    style={{
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      fontSize: '14px',
                      color: 'black',
                      backgroundColor: 'white' 
                    }}
                  />
                  {medicine.comment && (
                    <div style={{
                      maxWidth: '200px',
                      marginTop: '8px',
                      padding: '8px',
                      backgroundColor: '#e4e7fd',
                      border: '1px solid #e0e0e0',
                      borderLeft: '3px solid #4f67ff',
                      borderRadius: '4px',
                      fontSize: '13px',
                      color: '#333',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{ flex: 1, wordBreak: 'break-word' }}>{medicine.comment}</span>
                      <button
                        onClick={() => editComment(medicine.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#999',
                          fontSize: '12px',
                          cursor: 'pointer',
                          marginLeft: '8px',
                          padding: '0',
                          textDecoration: 'none',
                          flexShrink: 0
                        }}
                      >
                        ✏️ Edit
                      </button>
                    </div>
                  )}
                  {showDropdown === medicine.id && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '12px',
                      right: '12px',
                      backgroundColor: 'white',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      maxHeight: '200px',
                      overflowY: 'auto',
                      zIndex: 1000,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      {filteredMedicines.map((med) => (
                        <div
                          key={med.id}
                          onClick={() => selectMedicine(medicine.id, med)}
                          style={{
                            padding: '8px 12px',
                            cursor: 'pointer',
                            borderBottom: '1px solid #f0f0f0'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{med.name}</div>
                          <div style={{ color: '#e74c3c', fontSize: '12px' }}>({med.generic})</div>
                          <div style={{ fontSize: '12px', color: '#666' }}>{med.dosage}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
                  <input
                    type="number"
                    value={medicine.days}
                    onChange={(e) => updateMedicine(medicine.id, 'days', e.target.value)}
                    style={{
                      width: '60px',
                      border: 'none',
                      outline: 'none',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: 'black',
                      backgroundColor: 'white'
                    }}
                  />
                </td>
                {(['morning', 'afternoon', 'evening', 'night'] as const).map((timeSlot) => (
                  <td key={timeSlot} style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'black' }}>
                        <input
                          type="radio"
                          name={`${medicine.id}-${timeSlot}`}
                          checked={medicine[timeSlot].bf}
                          onChange={() => updateTimeSlot(medicine.id, timeSlot, 'bf')}
                          style={{ margin: 0 }}
                        />
                        BF
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'black' }}>
                        <input
                          type="radio"
                          name={`${medicine.id}-${timeSlot}`}
                          checked={medicine[timeSlot].af}
                          onChange={() => updateTimeSlot(medicine.id, timeSlot, 'af')}
                          style={{ margin: 0 }}
                        />
                        AF
                      </label>
                    </div>
                    {timeSlot === 'night' && (
                      <div style={{ marginTop: '8px' }}>
                        <button
                          onClick={() => openCommentBox(medicine.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#007bff',
                            fontSize: '12px',
                            cursor: 'pointer',
                            textDecoration: 'none'
                          }}
                        >
                          + Add Comment
                        </button>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
              {showCommentBox === medicine.id && (
                <tr>
                  <td colSpan={6} style={{ padding: '0', border: '1px solid #ddd' }}>
                    <div style={{
                      backgroundColor: '#e4e7fd',
                      border: '2px solid #4f67ff',
                      borderRadius: '4px',
                      padding: '8px',
                      margin: '4px'
                    }}>
                      <textarea
                        value={tempComment}
                        onChange={(e) => setTempComment(e.target.value)}
                        placeholder="Add instructions or notes for this medicine..."
                        style={{
                          width: '95%',
                          height: '50px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          padding: '8px',
                          fontSize: '14px',
                          resize: 'none',
                          outline: 'none',
                          backgroundColor: 'white',
                          color: 'black'
                        }}
                      />
                      <div style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'flex-end',
                        marginTop: '8px'
                      }}>
                        <button
                          onClick={cancelComment}
                          style={{
                            padding: '6px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            fontSize: '12px',
                            color:"black"
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => saveComment(medicine.id)}
                          style={{
                            padding: '6px 12px',
                            border: 'none',
                            borderRadius: '4px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          Save Comment
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      

      
      <button
        onClick={addMedicine}
        style={{
          marginTop: '16px',
          padding: '8px 16px',
          background: 'none',
          border: 'none',
          color: '#007bff',
          fontSize: '14px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        + Add Medicine
      </button>
    </div>
  );
};

export default AdvancePrescription;