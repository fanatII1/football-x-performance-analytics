import React from 'react';
import './ClubsPage.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Global_Navbar/Navbar';

//this component will render the specific clubs data
//and make a request via the clubs name, which is passed by state
function ClubsPage({ clubName }) {
  const [playerBackendData, setplayerBackendData] = useState( );
  const [playerStats, setPlayerStats] = useState();
  const [playerSection, setPlayerSection] = useState('Players-club-pages-section-full')
  const [asideWidth, setAside]  = useState('player-stats-none');
  

  //fetch club data after component has loaded
  useEffect(() => {
    fetch(`/GlobalSearch/ClubSearch/${clubName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setplayerBackendData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clubName]);


  //onclick passes the players 'key', so it can be used as reference to the players data, when we want to reveal the stats of the player
  const revealStats = (e, key) =>{
    e.preventDefault();
    console.log(key)
    if(playerSection === 'Players-club-pages-section-full'){
      setAside('player-stats-half')
      setPlayerSection('Players-club-pages-section-half')
    }
    else{
      setAside('player-stats-none')
      setPlayerSection('Players-club-pages-section-full')
    }
    setPlayerStats(key)
  }

  return (
    <>
      {typeof playerBackendData === 'undefined' ? (
        <p>Please wait a minute</p>
      ) : (
        <>
          <Navbar idNav='nav-search' />

          <div id='Players-Club-Pages-Container'>

           <div id="Player-stats-flex-wrapper">
           <section id={playerSection}>
                {playerBackendData.map((player, key) => {
                  return (
                    <div className='player-main-container'>
                      <div className='player-wrapper' key={key} onClick={(event)=> revealStats(event, key)}>
                      <div className='club-player-img-container'>
                        <img src={player.player_image} alt="player_image" className="club-player"/>
                      </div>

                      <div className='club-player-description'>
                        <p>Name:<span className='player-info'>{player.name}</span></p>
                        <p>DoB:<span className='player-info'> {player.dateOfBirth}</span></p>
                        <p>Nationality:<span className='player-info'>{player.nationality}</span></p>
                        <p>Position:<span className='player-info'>{player.position}</span></p>
                      </div>
                    </div>
                    </div>
                  );
                })}
            </section>

            

           {
            (typeof playerStats === 'undefined') ? (
              <></>
            ) : (
              <aside id={asideWidth}>
              <div id="aside-image-wrapper">
              <button id="view-more">+</button>
                <img src={playerBackendData[playerStats].player_image} alt="player-aside" className="aside-image" />
              </div>
              
              <div className="aside-stats-wrapper">
                <h4 className='aside-player-info'>Name: {playerBackendData[playerStats].name}</h4>
                <h4 className='aside-player-info'>Position: {playerBackendData[playerStats].position}</h4>               
                <h4 className='aside-player-info'>Nationality: {playerBackendData[playerStats].nationality}</h4> 
                <h4 className='aside-player-info'>DoB: {playerBackendData[playerStats].dateOfBirth}</h4>

                <h4 id="Stats-heading">Summary: </h4>
                {
                  playerBackendData[playerStats].stats.map((stats, key)=>{
                    return(
                      <div className='Stats' key={key}>                              
                      <p className='stat'>{stats.split(' ')[0]}</p>
                      <div className="bar">
                        <div className={`meter-${key}`}></div>
                      </div>
                      </div>
                    )
                  })
                }

              </div>
            </aside>
            )
           }
           </div>

          </div>
        </>
      )}
    </>
  );
}

export default ClubsPage;
