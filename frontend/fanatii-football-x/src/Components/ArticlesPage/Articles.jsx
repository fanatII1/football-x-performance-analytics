import React from 'react'
import './Articles.css'
import Navbar from '../Global_Navbar/Navbar'
import PassNet from './ArticlesImages/pass-net.jpg'
import Shot from './ArticlesImages/shot.png'
import XA from './ArticlesImages/assists(3).png'
import ballProgression from './ArticlesImages/brooks.jpg'
import scoutTalent from './ArticlesImages/talent-scout.jpg'
import PodCastOne from './ArticlesImages/podcast(1).jpg'
import PodCastTwo from './ArticlesImages/podcast(2).jpg'
import PodCastThree from './ArticlesImages/podcast(3).png'
import PodCastFour from './ArticlesImages/podcast(4).png'
import MainPodCast from './ArticlesImages/Main-podcast.jpg'

const articlesData = [
    {image: PassNet, heading: "Analysing the passing networks of each Dstv Premiership team", journalist: "Reece Moore"},
    {image: scoutTalent, heading: "Talent Scout: Why Cape Town City promoted young midfielder, Taahir Goedeman(statistical analysis)?", journalist: "Jason McAllister"},
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
    <div id='Articles-main-container'>
        <Navbar idNav='nav-search'/>

        <section id="Articles-Top5-section">
            <h2 id='articles-heading'>Articles:</h2>
            <div id="container-top-5">

                <div className="first-top-main-article">
                    <div className="top-main-article-image-wrapper">
                        <img src={ballProgression} alt="main-article" className="article-sec-image" />
                    </div>

                    <div className="top-main-article-text-wrapper">
                        <h2 id="top-main-article-heading">Unpacking the secrets of ball progression</h2>
                        <p className="journalist">Jason MacAllister</p>
                    </div>
                </div>

                <div className="sub-top-main-articles">
                {
                    articlesData.map((articleInfo, key)=>{
                        return(
                        <div className='article-sub-info'> 
                        <div className="sub-main-article-image-wrapper">
                            <img src={articleInfo.image} alt="sub-article" className="article-sub-sec-image" />
                        </div>
    
                        <div className="sub-main-article-text-wrapper">
                            <h5 className="sub-main-article-heading">{articleInfo.heading}</h5>
                            <p className='journalist'>{articleInfo.journalist}</p>
                        </div>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        </section>

        <section id="podcasts-section">
            <h2 id='podcasts-heading'>Podcasts :</h2>

            <div id="container-podcasts-latest">
            <div className="sub-top-main-podcasts">
                {
                    podcastData.map((articleInfo, key)=>{
                        return(
                        <div className='podcast-sub-info'> 
                        <div className="sub-main-podcast-image-wrapper">
                            <img src={articleInfo.image} alt="sub-article" className="article-sub-sec-image" />
                        </div>
    
                        <div className="sub-main-podcast-text-wrapper">
                            <h5 className="sub-podcast-article-heading">{articleInfo.heading}</h5>
                            <p className='journalist'>{articleInfo.host}</p>
                        </div>
                        </div>
                        )
                    })
                }
            </div>
            </div>
        </section>
    </div>
  )
}

export default Articles