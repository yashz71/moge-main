import './App.css';
import React, { useState } from 'react';
import Modal from './modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <h1>Your Home Page</h1>

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};




export default App;
// YourHomePage.js

