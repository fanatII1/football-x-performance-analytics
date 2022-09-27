import React from 'react';
import './ModalClubPages.css';

//modal Component(child) for the ClubPages Component
function ModalClubPages({ modalState, closeModal, playerBackendData, playerStats }) {
  //when click specific player, we wanto modal to view that players data, thus from theplayer backend, we pass the players key
  //key will be used to reference players data from backend data
  let playerImage = (typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].player_image);
  let playerAllStats = playerBackendData[playerStats];

  //we want the bar to escalate its value width based on the actual stat value
  //we need a function that will check the stat value, based on it, we'll adjust width of bar
  function barWidth(actualStat){
    let actualStat_num = parseFloat(actualStat);
    console.log(actualStat)
    if(actualStat < 0.3){
      console.log('below 0.3')
      return {width: '25%', background: 'linear-gradient(90deg, #ff00e2 0%, #ff008e 100%)'}
    }
    else if(actualStat_num >= 0.3 && actualStat_num <= 0.5){
      console.log('between 0.3 and 0.5')
      return {width: '50%', background: 'linear-gradient(90deg, #ff00e2 0%, #ff008e 100%)'}
    }
    else if(actualStat_num >= 0.6 && actualStat_num <= 0.8){
      console.log('between 0.6 and 0.8')
      return {width: '75%', background: 'linear-gradient(90deg, #ff00e2 0%, #ff008e 100%)'}
    }
    else{
      console.log('above 0.8')
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
