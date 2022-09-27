import React from 'react';
import './ModalClubPages.css';

//modal Component(child) for the ClubPages Component
function ModalClubPages({ modalState, closeModal, playerBackendData, playerStats }) {
  //when click specific player, we  want a view that players data
  //thus we pass the players key(integer)
  //key will be used to reference players data from backend data
  let playerImage = (typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].player_image);
  let playerAllStats = playerBackendData[playerStats];

  //function that will set stats bar width based on stats of player
  //returns an object that has properties that define the styles that will be applied to the bar
  function barWidth(actualStat){
    let actualStat_num = parseFloat(actualStat);

    if(actualStat < 0.3){
      return {width: '25%', background: 'linear-gradient(90deg, #ff00e2 0%, #ff008e 100%)'}
    }
    else if(actualStat_num >= 0.3 && actualStat_num <= 0.5){
      return {width: '50%', background: 'linear-gradient(90deg, #ff00e2 0%, #ff008e 100%)'}
    }
    else if(actualStat_num >= 0.6 && actualStat_num <= 0.8){
      return {width: '75%', background: 'linear-gradient(90deg, #ff00e2 0%, #ff008e 100%)'}
    }
    else{
      return {width: '75%', background: 'linear-gradient(90deg, #ff00e2 0%, #ff008e 100%)'}
    }
  }

  
  return (
    <div id={modalState}>
      <div id='modal-content'>

        <div className='player-view'>
          <img src={playerImage} alt='statistics' />
          <button id='close' onClick={closeModal}> X </button>
        </div>

        <div id='detailed-stats-container'>
          <h2 id="DetailedStatsHeading">Statistics:</h2>
          <h3 id="player-name">Name: {playerAllStats.name}</h3>
          <h4 id="player-position">Position: {playerAllStats.position}</h4>
          {(typeof playerAllStats === 'undefined') ? (<></>) :
           (
            playerAllStats.stats.map((stat)=>{
              let statName = stat.split(':')[0];
              let actualStat = stat.split(':')[1];
              
              let bar_widthStyles = barWidth(actualStat);

              return(
              <div className="stat-view">
    
                <div className="stat-description">
                  <h5 className="stat-name">{statName}</h5>
                  <h5 className="actual-stat">{actualStat}</h5>
                </div>
                
                <div className="stat-bar" style={bar_widthStyles}> </div>
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
