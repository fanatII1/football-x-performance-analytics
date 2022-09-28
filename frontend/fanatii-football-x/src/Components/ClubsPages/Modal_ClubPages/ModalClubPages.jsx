import React from 'react';
import './ModalClubPages.css';
import statsImage from './analytics4.png'

//modal Component(child) for the ClubPages Component
function ModalClubPages({ modalState, closeModal, playerBackendData, playerStats }) {
  //when click specific player, we  want a view that players data
  //thus we pass the players key(integer)
  //key will be used to reference players data from backend data
  let playerAllStats = playerBackendData[playerStats];
  let playerName =(typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].name);
  let playerPosition = (typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].position);
  let playerAge = (typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].age);
  let playerNationality = (typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].nationality);
  let playerLeague =(typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].league)
  let playerImage = (typeof playerStats === 'undefined' ? '' : playerBackendData[playerStats].player_image);

  //function that will set stats bar width based on stats of player
  //returns an object that has properties that define the styles that will be applied to the bar
  function barWidth(actualStat){
    let actualStat_num = parseFloat(actualStat);

    if(actualStat < 0.39){
      return {width: '25%', background: 'linear-gradient(79deg, #474bff 0%, #bc48ff 100%)'}
    }
    else if(actualStat_num > 0.39 && actualStat_num < 0.59){
      return {width: '50%', background: 'linear-gradient(79deg, #474bff 0%, #bc48ff 100%)'}
    }
    else if(actualStat_num > 0.59 && actualStat_num < 0.79){
      return {width: '75%', background: 'linear-gradient(79deg, #474bff 0%, #bc48ff 100%)'}
    }
    else if(actualStat_num > 0.59 && actualStat_num < 0.90){
      return {width: '88%', background: 'linear-gradient(79deg, #474bff 0%, #bc48ff 100%)'}
    }
    else{
      return {width: '95%', background: 'linear-gradient(79deg, #474bff 0%, #bc48ff 100%)'}
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
          <h2 id='DetailedStatsHeading'>Statistics:</h2>
          <h3 id='player-name'>Name: {playerName}</h3>
          <h4 id='player-position'>Position: {playerPosition}</h4>
          <h4 id="player-age">Age: {playerAge}</h4>
          <h4 id="player-league">League: {playerLeague}</h4>
          <h4 id="player-nationality">Nationality: {playerNationality}</h4>
          {(typeof playerAllStats === 'undefined') ? (<></>) :
           (
            playerAllStats.stats.map((stat, key)=>{
              let statName = stat.split(':')[0];
              let actualStat = stat.split(':')[1];
              
              let bar_widthStyles = barWidth(actualStat);

              return(
              <div className='stat-view' key={key}>
    
                <div className='stat-description'>
                  <h5 className='stat-name'>{statName}</h5>
                  <h5 className='actual-stat'>{actualStat}</h5>
                </div>
                
                <div className='stat-bar' style={bar_widthStyles}> </div>
              </div>
              )
            })
          )
          }
          <div id='detailed-stats-chart'>
            <img src={statsImage} id='statsChart' alt='statsChart' />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ModalClubPages;
