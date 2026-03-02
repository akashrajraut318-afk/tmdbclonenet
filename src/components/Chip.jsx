import React from 'react';

const Chip = ({ label, className = '' }) => (
  <span className={`inline-block px-2 py-1 bg-gray-200 rounded-full ${className}`}>{label}</span>
);

export default Chip;
