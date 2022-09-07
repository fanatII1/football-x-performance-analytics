import React from 'react'
import './Articles.css'
import Navbar from '../Global_Navbar/Navbar'
import PassNet from './ArticlesImages/pass-net.jpg'
import Shot from './ArticlesImages/shot.png'
import XA from './ArticlesImages/assists(3).png'
import ballProgression from './ArticlesImages/ball-progression.jpg'
import scoutTalent from './ArticlesImages/talent-scout.jpg'
import PodCastOne from './ArticlesImages/podcast(1).jpg'
import PodCastTwo from './ArticlesImages/podcast(2).jpg'
import PodCastThree from './ArticlesImages/podcast(3).png'
import PodCastFour from './ArticlesImages/podcast(4).png'
import Footer from '../Global_Footer/Footer'
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom'
import ArticleBackgroundImage from './ArticlesImages/article-background.jpg'

const articlesData = [
    {image: PassNet, heading: "Analysing the passing networks of each Dstv Premiership team", journalist: "Reece Moore"},
    {image: scoutTalent, heading: "Talent Scout: Cape Town City midfielder, Taahir Goedeman(analysis)?", journalist: "Jason McAllister"},
    {image: XA, heading: "The truth behind expected assists(xA)", journalist: "Njabulo Mokoena"},
    {image: Shot, heading: "Should clubs focus on shot quality using expected goals?", journalist: "Carol Hallie"}
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
                            <div className="article">
                                <div className="article-image-wrapper">
                                    <img src={article.image} alt="" className="article-image" />
                                </div>

                                <div className="article-short-summary">
                                    <h4 className="journalist">Writer: {article.journalist}</h4>
                                    <h4 className="article-heading">{article.heading}</h4>
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
                        <div className='podcast-sub-' key={key}> 
                        <div className="sub-main-podcast-image-wrapper">
                            <img src={article.image} alt="sub-article" className="article-sub-sec-image" />
                        </div>
    
                        <div className="sub-main-podcast-text-wrapper">
                            <h5 className="sub-podcast-article-heading">{article.heading} <i className="fa-solid fa-podcast"></i></h5>
                            <p className='journalist'>
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