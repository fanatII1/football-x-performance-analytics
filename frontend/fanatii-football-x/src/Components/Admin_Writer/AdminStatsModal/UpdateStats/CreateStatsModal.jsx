import React from 'react'
import { useState } from 'react';
import CreateStatsForm from './CreateStatsForm';

function CreateStatsModal({adminCreateStatsModal, setAdminCreateStatsModal}) {
    const [playerPosition, setPlayerPosition] = useState('GK');

  //onChange, we will display specific form for specific position
  const handlePositionChange = (e) => {
    console.log(e.target.value);
    setPlayerPosition(e.target.value);
  };

  //onClick hides admin modal
  const hideAdminModal = (e) => {
    e.preventDefault();
    setAdminCreateStatsModal('hideModal')
  };

  return (
    <>
      <aside id={adminCreateStatsModal}>
        <div className='admin-form-container'>
          <button id='closeAdminModal' onClick={hideAdminModal}>
            X
          </button>

          <select name='' id='position-select' onChange={handlePositionChange}>
            <option className='position-option'>GK</option>
            <option className='position-option'>DEF</option>
            <option className='position-option'>MID</option>
            <option className='position-option'>WING</option>
            <option className='position-option'>ST/CF</option>
          </select>
          <CreateStatsForm playerPosition={playerPosition}/>
        </div>
      </aside>
    </>
  );
}

export default CreateStatsModal