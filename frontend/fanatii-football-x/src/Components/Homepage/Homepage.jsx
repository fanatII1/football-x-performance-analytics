import React from 'react';
import backgroundImage from './HomepageImages/HomeBackground.jpg'
import PslLogo from './HomepageImages/psl-logo.png'
import ArticleImage from './HomepageImages/article-image.jpg'
import analyticsImage from './HomepageImages/analytics4.png'
import './Homepage.css';
import Navbar from '../Global_Navbar/Navbar';
import Footer from '../Global_Footer/Footer'

function Homepage() {
  return (
    <div id='Homepage-main-container'>
      <Navbar idNav='nav-home'/>

      <section id='Intro-section'>
        <img src={backgroundImage} className='intro-homepage-background' alt='background-home' />
        <div className='overlay'></div>
        <div id='intro-description'>
          <h1>
            LEADERS IN SOUTH AFRICAN FOOTBALL DATA
            <br />
            AND PERFORMANCE.
          </h1>
          <p>Be the first to find the best players</p>
          <p>ARTICLES | PLAYER {'&'} TEAM ANALYSIS | PODCASTS</p>
        </div>
      </section>


      <div className="cont">
      <section id='Article-summary-section'>
        <div id='Article-summary-container'>
            <div className='article-piece'>
            <div className='PSL-logo-container'>
                <img src={PslLogo} alt='PSL-logo' className='PSL-logo-img' />
            </div>
            <div className='article-image-container'>
                <img src={ArticleImage} alt='article-img' className='article-img' />
            </div>
            <div className='article-short-text'>
                <h3 className='article-heading'>Introducing xGAR: expected goals above replacement</h3>
                <p className='article-paragraph-intro'>
                    There are actually four cases for computing the xGAAR metric, and it may help to go through them one at a time.
                    So let's say the median player at a given position defends 1.5 times per minute out of possesson and concedes 0.005 xG each time...
                </p>   
            </div>
            </div>

            <div className='article-service-description'>
              <div className='article-service-container'>
              <h1 id='Article-service-heading'>Home of the best of South Africa's football articles</h1>
                <p className='article-service-paragraph'>
                    Home of the best Football journalists in South Africa,
                    we bring you the best football journalism in the world, and a personalised experience, 
                    connecting you to the best stories, tactical anlysis and scouting reports of the players
                    and clubs that you care about.
                    We also provide key sensible transfers covering each club, which dive deep on 
                    potential transfers that may improve positions of dedicated teams
                </p>
              </div>
            </div>
        </div>
      </section>

      <section id='Analytics-service-summary-section'>
       <div id='Analytics-summary-container'>
            <div className='analytics-service-description'>
            <div className='analytics-service-container'>
              <h1 id='Analytics-service-heading'>Scouting And Analytical Reports</h1>
                <p className='analytics-service-paragraph'>
                    FIND THE BEST PLAYERS FIRST
                    <br />
                    The smartest analytics in the game
                    Evaluate the performance of football players around the world. Assess contributions to winning,
                    playing style, and skill levels. Even simulate how a player in one league might succeed in another.
                </p>
              </div>
            </div>

            <div className='analytics-piece'>
                <img src={analyticsImage} className='player-analytics' alt='player-img' />
            </div>
        </div>
      </section>



      <section id='LiveStream-section'>
        <h1 id='LiveStream-Talk-heading'>Catch Our Football Live Stream Fooball Talk</h1>
        <div className='live-stream-container'>
            <i className='fa-brands fa-spotify'></i>
        </div>
      </section>
      <Footer idFooter='home-footer'/>
      </div>
    </div>
  );
}

export default Homepage;
