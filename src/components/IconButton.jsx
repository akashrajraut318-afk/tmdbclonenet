import React from 'react';

const IconButton = ({ icon, onClick, className = '' }) => (
  <button onClick={onClick} className={`p-2 rounded ${className}`}>
    {icon}
  </button>
);

export default IconButton;
