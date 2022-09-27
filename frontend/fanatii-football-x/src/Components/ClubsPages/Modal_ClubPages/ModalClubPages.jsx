import React from 'react';
import './ModalClubPages.css';
import statsImage from './analytics4.png';

//modal Component(child) for the ClubPages Component
function ModalClubPages({ modalState, closeModal, playerBackendData, playerStats }) {
  //when click specific player, we wanto modal to view that players data, thus from theplayer backend, we pass the players key
  //key will be used to reference players data from backend data
  let playerImage = (typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].player_image);
  let playerAllStats = playerBackendData[playerStats];
  console.log(playerAllStats)
  
  return (
    <div id={modalState}>
      <div id='modal-content'>

        <div className='player-view'>
          <img src={playerImage} alt='statistics' />
          <button id='close' onClick={closeModal}> X </button>
        </div>

        <div id='detailed-stats-container'>
          {(typeof playerAllStats === 'undefined') ? (<></>) :
           (
            playerAllStats.stats.map((stat)=>{
              let statName = stat.split(':')[0];
              let actualStat = stat.split(':')[1];

              return(
              <div className="stat-view">
    
                <div className="stat-description">
                  <h5 className="stat-name">{statName}</h5>
                  <h5 className="actual-stat">{actualStat}</h5>
                </div>
                
                <div className="stat-bar">...</div>
              </div>
              )
            })
          )
          }
        </div>

      </div>
    </div>
  );
}

export default ModalClubPages;
