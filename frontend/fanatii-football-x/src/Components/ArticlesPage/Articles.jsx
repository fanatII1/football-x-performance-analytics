import React from 'react'
import './Articles.css'
import Navbar from '../Global_Navbar/Navbar'
import PodCastOne from './ArticlesImages/podcast(1).jpg'
import PodCastTwo from './ArticlesImages/podcast(2).jpg'
import PodCastThree from './ArticlesImages/podcast(3).png'
import PodCastFour from './ArticlesImages/podcast(3).png'
import Footer from '../Global_Footer/Footer'
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom'
import { useState, useEffect, useRef } from 'react'
//import client module/package, so we able to fetch data from Contentful CMS
import  {client} from '../client'

const podcastData = [{image: PodCastOne, heading: 'The Back 3', host: 'Mpumelelo Lobelo | Ryan Mason | Melissa Partick'}, {image: PodCastTwo, heading: 'Fox Football Podcast', host: 'Ray Zondi | Lebogang Mofokeng'}, {image: PodCastThree, heading: 'The truth Football show', host: 'Gabrielle Noorodien | Ian Gonzalez'}, {image: PodCastFour, heading: 'Total Soccer show', host: 'Katie Parris'}];

function Articles() {
    const [articlesData, setArticlesData] = useState([]);
    const [allVideos, setAllVideos] = useState([])
    const videoElement = useRef([]);
    const [showHideVideoOverlay, setShowHideVideoOverlay] = useState('video-user-overlay')

    //on intial render, we fetch the data of articles(summary display) and videos that we going to show
    useEffect(()=>{
        async function fetchData(){
            //we fetch Images and Data related to the article and return only first 3 images
            const imageresponse =  await client.getEntries({content_type: 'postBannerImage'});
            const imageResponseData = imageresponse.items;
            let images = imageResponseData;
            let first3Images = images.filter((video, index)=> index <= 2); //return first 3 images data
            setArticlesData(first3Images)
            
            //we fetch videos we need and return only the first 3
            const Videoresponse =  await client.getEntries({content_type: 'videos'});
            const Video_reponseData = Videoresponse.items;
            let videos = Video_reponseData;
            let first3Videos = videos.filter((video, index)=> index <= 3); //return first 3 videos data.
            setAllVideos(first3Videos)
        }
        fetchData()
    },[])

    //onClick, allows the video to play
    //hides the video's banner image
    const handlePlay = (key) =>{
        let videoEl = videoElement.current[key];
        videoEl.play();
        setShowHideVideoOverlay('hideVideoOverlay')
        console.log(videoElement.current)
    }

  return (
    <>
    <Navbar idNav='nav-search'/>

    <div id='Articles-main-container'>
        <h1 id="articles-section-main-heading">Articles {'&'} Analysis</h1>
        <section id='Articles-section'>
            {
                articlesData.map((article)=>{
                    return(
                        <div className='Article'>
            
                            <div className='article-bannerImg-wrapper'>
                                <img src={article.fields.bannerImage.fields.file.url} className='article-bannerImg' alt='bannerImage' />
                            </div>
                                            
                            <div className='article-summary-wrapper'>
                                <h3 className='article-summary-heading'>
                                    {article.fields.bannerHeading}
                                </h3>
                                <p className='article-summary-text'>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                   Consequatur sunt sit accusantium quos molestias optio?
                                </p>
                            </div>

                        </div>
                    )
                })
            }
        </section>

        <section id='videos-section'>
            <h1 className='videos-main-heading'>
                Videos {'&'} Analysis
            </h1>
            <div id='all-videos'>
                {
                    allVideos.map((video, key)=>{
                        let display_vid = video.fields.bannerVideo.fields.file.url
                        return (
                        <div className='video-display' key={key}>
                        <div className='video-wrapper'>
                            <video src={display_vid} controls id='bannerVideo' className='bannerVideo' ref={(element)=> videoElement.current.push(element)}>
                                Your browser does not support the video extension type
                             </video>
                             <div className={showHideVideoOverlay}>
                                <img src={video.fields.bannerVideoImage.fields.file.url} alt="" className="video-user-overlay-image" />
                                <div className="banner-video-image-overlay"  onClick={()=> handlePlay(key)}>
                                    <i className='fa-solid fa-play player'></i>
                                    <h3 className="video-overlay-heading">{video.fields.bannerVideoHeading}</h3>
                                </div>
                             </div>
                        </div>
                        </div> 
                        )
                    })
                }
            </div>
        </section>






        <section id='podcasts-section'>
            <h2 id='podcasts-heading'>Podcasts :</h2>

            <div id='container-podcasts-latest'>
            <div className='sub-top-main-podcasts'>
                {
                    podcastData.map((article, key)=>{
                        return(
                        <div className='podcast-sub' key={key}> 
                        <div className='sub-main-podcast-image-wrapper'>
                            <img src={article.image} alt='sub-article' className='article-sub-sec-image' />
                        </div>
    
                        <div className='sub-main-podcast-text-wrapper'>
                            <h5 className='sub-podcast-article-heading'>
                                <a href='https://podcasts.apple.com/us/podcast/the-back-three/id1582621803'>
                                {article.heading} <i className='fa-solid fa-podcast'></i>
                                </a>
                            </h5>
                            <p className='host'>
                                Hosts: 
                                <br id='host-line-break'/>
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