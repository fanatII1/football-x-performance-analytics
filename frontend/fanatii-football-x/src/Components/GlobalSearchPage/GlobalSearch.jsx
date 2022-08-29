import React from 'react';
import Navbar from '../Global_Navbar/Navbar';
import nameImage from './GlobalSearchImages/search-name-image.png';
import clubImage from './GlobalSearchImages/search-club-image.png';
import Footer from '../Global_Footer/Footer';
import './GlobalSearch.css';
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom';
import {Link} from 'react-router-dom'

function GlobalSearch() {
  return (
    <div id='GlobalSearch-container'>
      <Navbar idNav='nav-search'/>

      <section id='Seach-options-section'>
        <div className='search-heading-wrapper'>
          <h1 id='search-heading'>SEARCH BY...</h1>
        </div>

        <div className='search-options'>
            
          <div className='SearchByName-container'>
            <div className='by_name-image-wrapper'>
              <img src={nameImage} alt='svg' className='name' />
            </div>
            <div className="name-btn-wrapper">
                <button className='by_name-button'>Search By Name</button>
            </div>
          </div>

          <div className='SearchByClub-container'>
            <div className='by_club-image-wrapper'>
                <img src={clubImage} alt='svg' className='club' />
            </div>
            <div className="club-btn-wrapper">
                <button className='by_club-button'><Link to='/GlobalSearch/ClubSearch'>Search By Club</Link></button>
            </div>
          </div>
        </div>
      </section>

      <Footer idFooter='search-footer'/>
      <GlobalNavBottom navBottom='search-nav-bottom'/>
    </div>
  );
}

export default GlobalSearch;
