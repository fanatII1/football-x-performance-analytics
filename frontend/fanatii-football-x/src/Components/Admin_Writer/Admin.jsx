import React from 'react'
import './Admin.css';
import { useEffect, useRef, useState } from 'react'
import AsideAdmin from './Aside_admin/AsideAdmin';
import AdminNav from './AsideAdminNav/AdminNav';
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom';
import StatsModal from './AdminStatsModal/StatsModal';
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
    const [allImages, setAllImages] = useState([])
    const videoElement = useRef();
    //state for responsive styling
    const [showAside, setShowAside] = useState('admin-information')
    //state of admin modal
    const [adminModal, setAdminModal] = useState('hideModal')
    
    //after intial render, we fetch the content from Contentful
    useEffect(()=>{
        async function fetchData(){
            //we fetch Images and Data related to the articles
            const imageresponse =  await client.getEntries({content_type: 'postBannerImage'});
            const imageResponseData = imageresponse.items;
            const bannerHeading = imageResponseData[0].fields.bannerHeading;
            const bannerImage = imageResponseData[0].fields.bannerImage.fields.file.url;
            setBannerHeading(bannerHeading)
            setBannerImage(bannerImage)

            //remove 1st image.
            //thus not included in 'sub videos'(class) div and we return first 2 images data
            let imagesRmFirst = imageResponseData;
            imagesRmFirst.shift();
            let first3Images = imagesRmFirst.filter((video, index)=> index <= 1); //return first 2 images data
            console.log(first3Images)
            setAllImages(first3Images)

            //we fetch the  VIdeos and Data related to the video that's going to be on display
            const Videoresponse =  await client.getEntries({content_type: 'videos'});
            const Video_reponseData = Videoresponse.items;
            const bannerVideo = Video_reponseData[0].fields.bannerVideo.fields.file.url;
            const videoHeading = Video_reponseData[0].fields.bannerVideoHeading;
            const videoImage = Video_reponseData[0].fields.bannerVideoImage.fields.file.url;
            setBannerVideo(bannerVideo);
            setVideoHeading(videoHeading);
            setVideImage(videoImage)
            
            //remove 1st video data.
            //thus not be included in 'sub videos'(class) div and we return first 3 videos data
            let videosRmFirst = Video_reponseData;
            videosRmFirst.shift();
            let first3Videos = videosRmFirst.filter((video, index)=> index <= 2); //return first 3 videos data.
            setAllVideos(first3Videos)
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

    //onClick, we reveal the aside element(adminInfo)
    const showAdminInfo = (e) =>{
        e.preventDefault()
        console.log(showAside)
        setShowAside('admin-information-show')
    }


  return (
    <>
    <StatsModal adminModal={adminModal} setAdminModal={setAdminModal}/>

    <AsideAdmin adminInfo={showAside} setAdminInfo={setShowAside} setAdminModal={setAdminModal}/>
    <main id='admin-main-content'>
        <button id='showAdmin-info' onClick={showAdminInfo}>+</button>

        <section id='videos-articles-section'>
        <AdminNav/>

           <div className='videos-articles-main-container'>

           <div id='videos-content'>
           <div className='videos-wrapper'>
                <div className='videos-latest'>
                <h3 id='videos-main-heading'>Latest Videos : </h3>


                    <div className='top-video'>
                        <video src={bannerVideo} controls id='bannerVideo' ref={videoElement}>
                            Your browser does not support the video extension type
                        </video>
                        <div className={showHideVideBanner}>
                                <img src={videoImage} alt='videoImg' className='videoImage'/>
                                <div className='videoOverlay'>
                                    <div className='videoOverlayText'>
                                        <h2 className='bannerVideo-heading'>
                                            {videoHeading}
                                        </h2>

                                        <div className='video-player' onClick={handlePlay}>
                                        <i className='fa-solid fa-play'></i>
                                        </div>

                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='sub-videos'>
                    {allVideos.map((video, key)=>{
                        
                            return (
                                <div className='video' key={key}>
                                    <div className='sub-video-bannerImage-wrapper'>
                                        <img src={video.fields.bannerVideoImage.fields.file.url} alt='' className='sub-video-imageBanner' />
                                        
                                        <div className='video-player sub-video-player'>
                                            <i className='fa-solid fa-play'></i>
                                        </div>

                                    </div>
                                    <div className='videoInfo'>
                                        <h4 className='videoInfoHeading'>
                                            <i className='fa-regular fa-newspaper f-articles'></i>
                                            {video.fields.bannerVideoHeading}
                                        </h4>
                                        <p className='videoSummary' style={{color: 'black'}}>
                                            {video.fields.videoSummary}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
           </div>


            <div id='articles-content'>
            <div className='articles-wrapper'>
                
                <h3 id='articles-main-heading'>Latest Articles :</h3>

                <div className='articles-latest'>

                    <div className='top-article'>
                        <img src={bannerImage} alt='article-img' className='articlesBannerImage'/>
                        <div className='articlesBannerImage-text'>
                            <h2 id='bannerImage-heading'>
                                {bannerHeading}
                            </h2>
                        </div>
                    </div>

                    <div className='sub-articles'>
                        {
                            allImages.map((image, key)=>{
                                return(
                                    <div className='image' key={key}>
                                    <div className='sub-image-bannerImage-wrapper'>
                                        <img src={image.fields.bannerImage.fields.file.url} alt='subImg' className='sub-image-imageBanner' />
                                        <div className='imageInfo'>
                                            <h2 className='imageInfoHeading'>
                                                {image.fields.bannerHeading}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            </div>

           </div>
        </section>
    </main>
    <GlobalNavBottom navBottom='home-bottom-nav'/>
    </>
  )
}

export default Admin


