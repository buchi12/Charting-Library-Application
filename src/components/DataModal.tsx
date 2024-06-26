import React from 'react';

interface DataModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: { timestamp: string; value: number } | null;
}

const DataModal: React.FC<DataModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Data Point Details</h2>
        <p><strong>Timestamp:</strong> {data.timestamp}</p>
        <p><strong>Value:</strong> {data.value}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DataModal;
