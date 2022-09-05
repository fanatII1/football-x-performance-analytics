import React from 'react';
import './ClubsPage.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Global_Navbar/Navbar';

//this component will render the specific clubs data
//and make a request via the clubs name, which is passed by state
function ClubsPage({ clubName }) {
  const [playerBackendData, setplayerBackendData] = useState( );
  const [playerStats, setPlayerStats] = useState( );
  const [showHideAside, setAside] = useState('hide-player-stats');
  const [flexSection, setFlexSection] = useState('Player-stats-none-wrapper')

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
    setFlexSection('Player-stats-flex-wrapper')
    setAside('show-player-stats')
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

           <div id={flexSection}>
           <section id='Players-club-pages-section'>
                {playerBackendData.map((player, key) => {
                  return (
                    <div className='player-wrapper' key={key} onClick={(event)=> revealStats(event, key)}>
                      <div className='club-player-img-container'>
                        <img src={player.player_image} alt="player_image" className="club-player"/>
                      </div>

                      <div className='club-player-description'>
                        <p>Name:{player.name}</p>
                        <p>DoB: {player.dateOfBirth}</p>
                        <p>Nationality:{player.nationality}</p>
                        <p>Position:{player.position}</p>
                      </div>
                    </div>
                  );
                })}
            </section>

            

           {
            (typeof playerStats === 'undefined') ? (
              <></>
            ) : (
              <aside id={showHideAside}>
              <div id="aside-image-wrapper">
                <img src={playerBackendData[playerStats].player_image} alt="player-aside" className="aside-image" />
              </div>
              
              <div className="aside-stats-wrapper">

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
