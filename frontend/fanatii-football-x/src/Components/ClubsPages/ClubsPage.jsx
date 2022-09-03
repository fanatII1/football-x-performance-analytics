import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Global_Navbar/Navbar';

//this component will render the specific clubs data
//and make a request via the clubs name, which is passed by state
function ClubsPage({ clubName }) {
  const [playerData, setPlayerData] = useState( );

  //fetch club data after component has loaded
  useEffect(() => {
    fetch(`/GlobalSearch/ClubSearch/${clubName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayerData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clubName]);

  return (
    <>
      {typeof playerData === 'undefined' ? (
        <p>Please wait a minute</p>
      ) : (
        <>
          <Navbar idNav='nav-search' />

          <div id='Players-Club-Pages-container'>
            <section id='Players-club-pages-section'>
              <div className='Main-club-player 1'>
                <img src='' alt='' className='main-club-player-image' />
              </div>

              <div className='All-club-players 2'>
                {playerData.map((player, key) => {
                  return (
                    <div className='player-wrapper' key={key}>
                      <div className='club-player-img-container'>
                        <div className='club-player'></div>
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
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default ClubsPage;
