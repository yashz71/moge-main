// Modal.js

import React from 'react';
import './App.css';


const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Content of your modal goes here.</p>
        <h1>Hellloooooo</h1>
      </div>
    </div>
  );
};

export default Modal;
