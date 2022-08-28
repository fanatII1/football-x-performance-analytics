import React from 'react';
import './ClubSearch.css';
import Navbar from '../Global_Navbar/Navbar';
import Sundowns from './ClubSearchImages/Sundowns.png';
import Chiefs from './ClubSearchImages/Chiefs.png';
import Pirates from './ClubSearchImages/Pirates.png';
import SuperSport from './ClubSearchImages/SuperSport(1).png';
import CapeTownCity from './ClubSearchImages/CapeTownCity.png';
import TsGalaxy from './ClubSearchImages/TsGalaxy.png';
import Maritzburg from './ClubSearchImages/Maritzburg.png';
import Amazulu from './ClubSearchImages/Amazulu.png';
import Stellenbosch from './ClubSearchImages/Stellenbosch.png';
import RoyalAM from './ClubSearchImages/Royal AM.png';
import MarumoGallants from './ClubSearchImages/MarumoGallants.png';
import RichardsBay from './ClubSearchImages/RichardsBay.png';
import Sekhkukhune from './ClubSearchImages/Sekhukhune.jpg';
import Swallows from './ClubSearchImages/Swallows.png';
import Chippa from './ClubSearchImages/Chippa.png';
import GoldenArrows from './ClubSearchImages/Golden Arrows.png';
import leagueImage from './ClubSearchImages/psl-logo.png';
import Footer from '../Global_Footer/Footer';

const Clubs = [
  { clubName: 'Mamelodi Sundowns', badge: Sundowns },
  { clubName: 'Kaizer Chiefs', badge: Chiefs },
  { clubName: 'Orlando Pirates', badge: Pirates },
  { clubName: 'SuperSport United', badge: SuperSport },
  { clubName: 'Cape Town City', badge: CapeTownCity },
  { clubName: 'TS Galaxy', badge: TsGalaxy },
  { clubName: 'Maritzburg United', badge: Maritzburg },
  { clubName: 'Royal AM', badge: RoyalAM },
  { clubName: 'Stellenbosch', badge: Stellenbosch },
  { clubName: 'Amazulu', badge: Amazulu },
  { clubName: 'Swallows fc', badge: Swallows },
  { clubName: 'Marumo Gallants', badge: MarumoGallants },
  { clubName: 'Chippa United', badge: Chippa },
  { clubName: 'Sekhukhune United', badge: Sekhkukhune },
  { clubName: 'Richards Bay fc', badge: RichardsBay },
  { clubName: 'Golden Arrows', badge: GoldenArrows },
];

function ClubSearch() {
  return (
    <>
      <Navbar idNav='nav-search' />
      <div id='ClubSearch-main-container'>
        <section id='Club-options-section'>
          <h2 id='Teams-heading'>Teams:</h2>
          <div id='clubs-main-wrapper'>
            {Clubs.map((club, key) => {
              return (
                <div className='club-info-wrapper' key={key}>
                  <div className='club-image-container'>
                    <img
                      src={club.badge}
                      alt='team-badge'
                      className='club-badge'
                    />
                  </div>

                  <div className='team-name-wrapper'>
                    <p className='name-title'>{club.clubName}</p>
                  </div>

                  <div className='league'>
                    <img
                      src={leagueImage}
                      alt='league-img'
                      className='league-image'
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Footer idFooter='club-footer' />
      </div>
    </>
  );
}

export default ClubSearch;
