import React from 'react';
import './ClubSearch.css';
import { Link } from 'react-router-dom';
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
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom';


//array storing all clubs and their names
//linkClubname property will be used as the link 'href'/'to' value, since we don't want any whitespace
const Clubs = [
  { clubName: 'Mamelodi Sundowns', badge: Sundowns, linkClubname:'MamelodiSundowns' },
  { clubName: 'Kaizer Chiefs', badge: Chiefs, linkClubname:'KaizerChiefs' },
  { clubName: 'Orlando Pirates', badge: Pirates, linkClubname: 'OrlandoPirates' },
  { clubName: 'SuperSport United', badge: SuperSport, linkClubname: 'SupersportUnited' },
  { clubName: 'Cape Town City', badge: CapeTownCity, linkClubname:'CapeTownCity' },
  { clubName: 'TS Galaxy', badge: TsGalaxy, linkClubname: 'TsGalalxy' },
  { clubName: 'Maritzburg United', badge: Maritzburg, linkClubname:'MaritzburgUnited' },
  { clubName: 'Royal AM', badge: RoyalAM, linkClubname:'RoyalAm'},
  { clubName: 'Stellenbosch', badge: Stellenbosch, linkClubname:'Stellenbosch' },
  { clubName: 'Amazulu', badge: Amazulu, linkClubname:'Amazulu'},
  { clubName: 'Swallows fc', badge: Swallows, linkClubname:'Swallows' },
  { clubName: 'Marumo Gallants', badge: MarumoGallants, linkClubname:'MarumoGallants' },
  { clubName: 'Chippa United', badge: Chippa, linkClubname:'ChippaUnited' },
  { clubName: 'Sekhukhune United', badge: Sekhkukhune, linkClubname: 'SekhukhuneUnited'},
  { clubName: 'Richards Bay fc', badge: RichardsBay, linkClubname:'RichardsBay'},
  { clubName: 'Golden Arrows', badge: GoldenArrows, linkClubname: 'GoldenArrows'},
];

function ClubSearch() {
  return (
    <>
      <Navbar idNav='nav-search' />
      <div id='ClubSearch-main-container'>
        <section id='Club-options-section'>
          <div className="club-options-container">
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
                    <p className='name-title'><Link to={club.linkClubname}>{club.clubName}</Link></p>
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
          </div>
        </section>

        <Footer idFooter='club-footer' />
        <GlobalNavBottom navBottom='club-search-nav-bottom'/>
      </div>
    </>
  );
}

export default ClubSearch;
