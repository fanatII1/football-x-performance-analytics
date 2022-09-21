import React from 'react'
import './Admin.css';
import Navbar from '../Global_Navbar/Navbar'
import { useEffect, useRef, useState } from 'react'
//import client module/package, so we able to fetch data from Contentful CMS
import  {client} from '../client'

//Component renders the Admin page. filled with content fetched from Contentful CMS api : 
function Admin() {
    const [bannerImage, setBannerImage] = useState('');
    const [bannerHeading, setBannerHeading] = useState('');
    const [bannerVideo, setBannerVideo] = useState('');
    const [videoHeading, setVideoHeading] = useState('')
    const [videoImage, setVideImage] = useState('')
    const [showHideVideBanner,setShowHideBanner] = useState('bannerVideo-text');
    const [allVideos, setAllVideos] = useState([])
    const videoElement = useRef();
    
    //after intial render, we fetch the content from Contentful
    useEffect(()=>{
        async function fetchData(){
            //we fetch Images and Data related to the articles
            const Imageresponse =  await client.getEntries({content_type: 'postBannerImage'});
            const ImageresponseData = Imageresponse.items;
            const bannerHeading = ImageresponseData[0].fields.bannerHeading;
            const bannerImage = ImageresponseData[0].fields.bannerImage.fields.file.url;
            setBannerHeading(bannerHeading)
            setBannerImage(bannerImage)

            //we fetch the  VIdeos and Data related to the video that's going to be on display
            const Videoresponse =  await client.getEntries({content_type: 'videos'});
            const Video_reponseData = Videoresponse.items;
            const bannerVideo = Video_reponseData[0].fields.bannerVideo.fields.file.url;
            const videoHeading = Video_reponseData[0].fields.bannerVideoHeading;
            const videoImage = Video_reponseData[0].fields.bannerVideoImage.fields.file.url;
            setBannerVideo(bannerVideo);
            setVideoHeading(videoHeading);
            setVideImage(videoImage)
            
            //remove 1st video so it's not be included in 'sub videos'(class) element and we then return first 3 videos
            let videosAll_rmFirst = Video_reponseData;
            videosAll_rmFirst.shift();
            let first_3 = videosAll_rmFirst.filter((video, index)=> index <= 2); //return first 3 videos
            setAllVideos(first_3)
        }
        
        fetchData();
    }, [])

    
    //onClick, allows the video to play
    //hides the video's banner image
    const handlePlay = () =>{
        let videoEl = videoElement.current;
        videoEl.play();
        setShowHideBanner('hideBanner')
    }


  return (
    <>
    <Navbar idNav='nav-search'/>

        {/* <aside id="aside-nav">
            #profile
        </aside> */}

        <section id="videos-articles-wrapper">


            <div className="videos-wrapper">
                <div className="videos-latest">

                    <div className="top-video">
                        <video src={bannerVideo} controls id='bannerVideo' ref={videoElement}>
                            Your browser does not support the video extension type
                        </video>
                        <div className={showHideVideBanner}>
                                <img src={videoImage} alt="videoImg" className='videoImage'/>
                                <div className="videoOverlay">
                                    <div className="videoOverlayText">
                                        <h2 className="bannerVideo-heading">
                                            {videoHeading}
                                        </h2>
                                        <i className="fa-solid fa-play" onClick={handlePlay}></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="sub-videos">
                    {allVideos.map((video, key)=>{
                            return (
                                <div className="video" key={key}>
                                    <div className="sub-video-bannerImg-wrapper">
                                        <img src={video.fields.bannerVideoImage.fields.file.url} alt="" className="sub-video-imageBanner" />
                                    </div>
                                    <div className="videoInfo">
                                        <h4 className="videoInfo_heading">
                                            {video.fields.bannerVideoHeading}
                                        </h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="articles-wrapper">
                <div className="articles-latest">

                    <div className="top-article">
                        <img src={bannerImage} alt="article-img" className='bannerImage'/>
                        <div className="bannerImage-text">
                            <h2 id="bannerImage-heading">
                                {bannerHeading}
                            </h2>
                        </div>
                    </div>

                    <div className="sub-articles">

                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Admin