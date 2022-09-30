import React from 'react';
import './ClubsPage.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Global_Navbar/Navbar';
import { useRef } from 'react';
import ModalClubPages from './Modal_ClubPages/ModalClubPages';

//this component will render the specific clubs data
//and make a request via the clubs name, which is passed by state
function ClubsPage({ clubName }) {
  const [playerBackendData, setplayerBackendData] = useState();
  const [playerStats, setPlayerStats] = useState();
  const [playerSection, setPlayerSection] = useState('Players-club-pages-section-full');
  const [asideWidth, setAside] = useState('player-stats-none');
  const [refKey, setRefKey] = useState();
  const [modalState, setModalState] = useState('close-modal')
  const prevRefKey = useRef('');

  //fetch club data after component has loaded
  useEffect(() => {
    fetch(`/GlobalSearch/ClubSearch/${clubName}`,{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setplayerBackendData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //onclick passes the players 'key', so it can be used as reference to the players data, when we want to reveal the stats of the player
  const revealStats = (e, key) => {
    e.preventDefault();
    setRefKey(key);
    prevRefKey.current = refKey;

    if (prevRefKey.current === key) {
      if (asideWidth === 'player-stats-none') {
        setAside('player-stats-half');
        setPlayerSection('Players-club-pages-section-half');
      } else {
        setAside('player-stats-none');
        setPlayerSection('Players-club-pages-section-full');
      }
    } else {
      setAside('player-stats-half');
      setPlayerSection('Players-club-pages-section-half');
    }

    //onclick, we pass the key of the player, so we can reference their image
    setPlayerStats(key);
  };


  //open modal
  const openModal = (e) =>{
    setModalState('open-modal')
  }

  //close modal function
  const closeModal = (e) =>{
    e.preventDefault();
    setModalState('close-modal')
}

  return (
    <>
      {typeof playerBackendData === 'undefined' ? (
        <p>Please wait a minute</p>
      ) : (
        <>
          <Navbar idNav='nav-search' />

          <div id='Players-Club-Pages-Container'>
            <div id='Player-stats-flex-wrapper'>
              <section id={playerSection}>
                {playerBackendData.map((player, key) => {
                  return (
                    <div className='player-main-container' key={key}>
                      <div className='player-wrapper' onClick={(event) => revealStats(event, key)}>
                        
                        <div className='club-player-img-container'>
                          <img src={player.player_image} alt='player_image' className='club-player' />
                        </div>

                        <div className='club-player-description'>
                          <p>
                            Name:
                            <span className='player-info'>{player.name}</span>
                          </p>
                          <p>
                            DoB:
                            <span className='player-info'> {player.dateOfBirth}</span>
                          </p>
                          <p>
                            Nationality:
                            <span className='player-info'>{player.nationality}</span>
                          </p>
                          <p>
                            Position:
                            <span className='player-info'>{player.position}</span>
                          </p>
                          <button className='show-hide-stats-modal responsiveView' onClick={openModal}>+</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>

              {typeof playerStats === 'undefined' ? (
                <></>
              ) : (
                <aside id={asideWidth}>
                  <div id='aside-image-wrapper'>
                    <img src={playerBackendData[playerStats].player_image} alt='player-aside' className='aside-image' />
                  </div>

                  <div id='aside-stats-wrapper'>
                  <button className='show-hide-stats-modal' onClick={openModal}>View More</button>
                    <div id="aside-player-overview-wrapper">
                    <div className="aside-player-overview">
                      <h4 className="aside-player-overview-heading">AGE</h4>
                      <span className="aside-overview-small-detail-text">{playerBackendData[playerStats].age}</span>
                    </div>

                    <div className="aside-player-overview">
                      <h4 className="aside-player-overview-heading">LEAGUE</h4>
                      <span className="aside-overview-small-detail-text">{playerBackendData[playerStats].league}</span>
                    </div>

                    <div className="aside-player-overview">
                      <h4 className="aside-player-overview-heading">POS</h4>
                      <span className="aside-overview-small-detail-text">{playerBackendData[playerStats].position}</span>
                    </div>

                    <div className="aside-player-overview">
                      <h4 className="aside-player-overview-heading">FOOT</h4>
                      <span className="aside-overview-small-detail-text">{playerBackendData[playerStats].foot}</span>
                    </div>
                    </div>

                    <div className='Play-Style'>
                      <ul id="play-style-list-strong">
                        <h4 id="best-attributes-headin">Best Attributes:</h4>
                        <li className="play-style-list-item">Finisher</li>
                        <li className="play-style-list-item">Linkup</li>
                        <li className="play-style-list-item">Heading</li>
                      </ul>

                      <ul id="play-style-list-weak">
                        <h4 id="weakness-heading">Weaknesses:</h4>
                        <li className="play-style-list-item">Crossing</li>
                        <li className="play-style-list-item">Defending</li>
                        <li className="play-style-list-item">Low Assists</li>
                      </ul>
                      </div>

                  </div>
                </aside>
              )}
            </div>
            <ModalClubPages modalState={modalState} closeModal={closeModal} playerBackendData={playerBackendData} playerStats={playerStats}/>
          </div>
        </>
      )}
    </>
  );
}

export default ClubsPage;
