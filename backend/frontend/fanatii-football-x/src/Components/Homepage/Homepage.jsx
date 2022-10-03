import React from 'react';
import backgroundImage from './HomepageImages/HomeBackground.jpg'
import PslLogo from './HomepageImages/psl-logo.png'
import ArticleImage from './HomepageImages/article-image.jpg'
import analyticsImage from './HomepageImages/analytics4.png'
import './Homepage.css';
import Navbar from '../Global_Navbar/Navbar';
import Footer from '../Global_Footer/Footer'
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom';

function Homepage() {
  return (
    <>
    <Navbar idNav='nav-home'/>

    <div id='Homepage-main-container'>
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
            </div>

            <div className='article-service-description'>
              <div className='article-service-container'>
                <h1 id='Article-service-heading'>
                  Better Understand a Player or Team’s Underlying Performance,
                  Playing Style and Approach Using Advanced Data Metrics
                </h1>

                <p className='article-service-paragraph'>
                Sports fans demand the use of analytics in sports media to add depth to their experience.
                Pundits have become statisticians and advanced analytics has become a key aspect of fan 
                engagement.
                Our AI-driven advanced metrics are available in a range of formats to suit your requirements. 
                Whether it’s through a our market-leading data feeds, editorial services or customisable widget 
                platforms, start telling more informed, insightful stories which employ deep data analysis
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
                    Article based talks and information, we got you.
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
      <GlobalNavBottom navBottom='home-bottom-nav'/>
      </div>
    </div>
    </>
  );
}

export default Homepage;
