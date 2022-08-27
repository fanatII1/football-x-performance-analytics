import React from 'react'
import './ClubSearch.css'
import Navbar from '../Global_Navbar/Navbar';
import Sundowns from './ClubSearchImages/Sundowns.png';
import Chiefs from './ClubSearchImages/Chiefs.png';
import Pirates from './ClubSearchImages/Pirates.png';
import SuperSport from './ClubSearchImages/SuperSport(1).png';
import leagueImage from './ClubSearchImages/psl-logo.png'
import Footer from '../Global_Footer/Footer';


const Clubs = [
  {clubName: 'Mamelodi Sundowns', badge: Sundowns },
  {clubName: 'Kaizer Chiefs', badge: Chiefs }, 
  {clubName: 'Orlando Pirates', badge: Pirates }, 
  {clubName: 'SuperSport United', badge: SuperSport }
];

function ClubSearch() {
  return (
    <div id='ClubSearch-main-container'>
      <Navbar idNav='nav-search'/>

      <section id='Club-options-section'>
        <h2 id='Teams-heading'>Teams:</h2>
        <div id='clubs-main-wrapper'>
        {
          Clubs.map((club, key)=>{
            return (
              <div className='club-info-wrapper' key={key}>
                <div className='club-image-container'>
                  <img src={club.badge} alt='team-badge' className='club-badge' />
                </div>

                <div className='team-name-wrapper'>
                  <p className='name-title'>{club.clubName}</p>
                </div>

                <div className='league'>
                  <img src={leagueImage} alt='league-img' className='league-image' />
                </div>
              </div>
            )
          })
        }
        </div>
      </section>

      <Footer idFooter='search-footer'/>
    </div>
  )
}

export default ClubSearch