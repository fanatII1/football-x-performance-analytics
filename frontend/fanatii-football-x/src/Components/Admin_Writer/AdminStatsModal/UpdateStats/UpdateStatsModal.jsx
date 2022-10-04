import React from 'react';
import { useState } from 'react';
import './UpdateStatsModal.css';
import UpdateStatsForm from './UpdateStatsForm';

//modal component for admin to update stats
//based on the position of the player, a different form will appear
//thus we pass the value of the state(position) to the Form Position function(2ndfunc/component)
function UpdateStatsModal({ adminModal, setAdminModal}) {
  const [positionFormState, setPositionFormState] = useState('GK');

  //onChange, we will display specific form for specific position
  const handlePositionChange = (e) => {
    setPositionFormState(e.target.value);
  };

  //onClick hides admin modal
  const hideAdminModal = (e) => {
    e.preventDefault();
    setAdminModal('hideModal');
  };

  return (
    <>
      <aside id={adminModal}>
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
          <UpdateStatsForm position={positionFormState}/>
        </div>
      </aside>
    </>
  );
}

export default UpdateStatsModal;
