import React from 'react'
import './Articles.css'
import Navbar from '../Global_Navbar/Navbar'
import PassNet from './ArticlesImages/pass-net.jpg'
import Shot from './ArticlesImages/shot.png'
import XA from './ArticlesImages/assists(3).png'
import ballProgression from './ArticlesImages/ball-progression.png'
import scoutTalent from './ArticlesImages/talent-scout.jpg'
import PodCastOne from './ArticlesImages/podcast(1).jpg'
import PodCastTwo from './ArticlesImages/podcast(2).jpg'
import PodCastThree from './ArticlesImages/podcast(3).png'
import PodCastFour from './ArticlesImages/podcast(4).png'
import Stats from './ArticlesImages/stats.png'
import Player2 from './ArticlesImages/player2.jpg'
import Corner from './ArticlesImages/corner_data.png'
import Footer from '../Global_Footer/Footer'
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom'

const articlesData = [
    {image: PassNet, heading: "Analysing the passing networks of each Dstv Premiership team", journalist: "Reece Moore"},
    {image: scoutTalent, heading: "Talent Scout: Cape Town City midfielder, Taahir Goedeman(analysis)?", journalist: "Jason McAllister"},
    {image: XA, heading: "The truth behind expected assists(xA)", journalist: "Njabulo Mokoena"},
    {image: Shot, heading: "Should clubs focus on shot quality using expected goals?", journalist: "Carol Hallie"},
    {image: ballProgression, heading: "Unpacking the secrets behind ball progression", journalist: "Sbusiso Biyela"},
    {image: Stats, heading: "Player Analysis: The rise of Peter Shalulile", journalist: "Julia Cox"},
    {image: Player2, heading: "Thembinkosi Lorch: The African Raumdeuter", journalist: "George Fanatii"},
    {image: Corner, heading: "DYK: 30% of goals are scored after set pieces", journalist: "George Fanatii"}
];

const podcastData = [
    {image: PodCastOne, heading: "The Back 3", host: "Mpumelelo Lobelo | Ryan Mason | Melissa Partick"},
    {image: PodCastTwo, heading: "Talent Scout: Why Cape Town City promoted young midfielder, Taahir Goedeman(statistical analysis)?", host: "Ray Zondi | Lebogang Mofokeng"},
    {image: PodCastThree, heading: "The truth behind expected assists(xA)", host: "Gabrielle Noorodien | Ian Gonzalez"},
    {image: PodCastFour, heading: "Should clubs focus on shot quality using expected goals?", host: "Katie Parris"}
];

function Articles() {
  return (
    <>
    <Navbar idNav='nav-search'/>

    <h1 id="articles-main-heading">Articles {'&'} Analysis</h1>
    <div id='Articles-main-container'>

        <section id="Articles-section">
            <div id="main-articles">
                {
                    articlesData.map((article, key)=>{
                        return(
                            <div className={`article a-${key}`}>
                                <div className="article-image-wrapper">
                                    <img src={article.image} alt="" className="article-image" />
                                </div>

                                <div className="article-short-summary">
                                    <h4 className="article-heading">{article.heading}</h4>
                                    <h5 className="journalist">Writer : {article.journalist} </h5>
                                    <p className="article-intro-paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat itaque id dolor? Minima consequatur ipsa amet inventore, perspiciatis itaque eaque aspernatur?
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>

        <section id="podcasts-section">
            <h2 id='podcasts-heading'>Podcasts :</h2>

            <div id="container-podcasts-latest">
            <div className="sub-top-main-podcasts">
                {
                    podcastData.map((article, key)=>{
                        return(
                        <div className='podcast-sub' key={key}> 
                        <div className="sub-main-podcast-image-wrapper">
                            <img src={article.image} alt="sub-article" className="article-sub-sec-image" />
                        </div>
    
                        <div className="sub-main-podcast-text-wrapper">
                            <h5 className="sub-podcast-article-heading">
                                <a href="https://podcasts.apple.com/us/podcast/the-back-three/id1582621804">
                                {article.heading} <i className="fa-solid fa-podcast"></i>
                                </a>
                            </h5>
                            <p className='host'>
                                Hosts: 
                                <br />
                                {article.host}
                            </p>
                        </div>
                        </div>
                        )
                    })
                }
            </div>
            </div>
        </section>
        <Footer idFooter='home-footer'/>
        <GlobalNavBottom navBottom='articles-nav-bottom'/>
    </div>
    </>
  )
}

export default Articles