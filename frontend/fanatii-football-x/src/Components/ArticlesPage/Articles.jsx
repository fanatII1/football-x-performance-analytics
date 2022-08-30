import React from 'react'
import './Articles.css'
import Navbar from '../Global_Navbar/Navbar'
import PassNet from './ArticlesImages/pass-net.jpg'
import Shot from './ArticlesImages/shot.png'
import XA from './ArticlesImages/assists(3).png'
import ballProgression from './ArticlesImages/brooks.jpg'
import scoutTalent from './ArticlesImages/talent-scout.jpg'

const dataImages = [
    {image: PassNet, heading: "Analysing the passing networks of each Dstv Premiership team", journalist: "Reece Moore"},
    {image: scoutTalent, heading: "Talent Scout: Why Cape Town City promoted young midfielder, Taahir Goedeman(statistical analysis)?", journalist: "Jason McAllister"},
    {image: XA, heading: "The truth behind expected assists(xA)", journalist: "Njabulo Mokoena"},
    {image: Shot, heading: "Should clubs focus on shot quality using expected goals?", journalist: "Carol Hallie"}
]

function Articles() {
  return (
    <div id='Articles-main-container'>
        <Navbar idNav='nav-search'/>

        <section id="Articles-Top5-section">

            <div id="container-top-5">

                <div className="first-top-main-article">
                    <div className="top-main-article-image-wrapper">
                        <img src={ballProgression} alt="main-article" className="article-sec-image" />
                    </div>

                    <div className="top-main-article-text-wrapper">
                        <h2 id="top-main-article-heading">Unpacking ball progression</h2>
                        <p className="journalist">Jason MacAllister</p>
                    </div>
                </div>

                <div className="sub-top-main-articles">
                {
                    dataImages.map((articleInfo, key)=>{
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
    </div>
  )
}

export default Articles