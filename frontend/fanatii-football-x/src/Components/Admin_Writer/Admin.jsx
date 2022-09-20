import React from 'react'
import './Admin.css'
import Navbar from '../Global_Navbar/Navbar'
import { useEffect } from 'react'
//import client module/package, so we able to fetch data from Contentful CMS
import  {client} from '../client'
import { useState } from 'react'

//Component renders the Admin page. filled with content fetched from Contentful CMS api : 
function Admin() {
    const [bannerImage, setBannerImage] = useState('');
    const [bannerHeading, setBannerHeading] = useState('');
    const [bannerVideo, setBannerVideo] = useState('');
    const [videoHeading, setVideoHeading] = useState('')
    
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
            setBannerVideo(bannerVideo);
            setVideoHeading(videoHeading)
            
            // console.log(Video_reponseData[0].fields.bannerVideoHeading, 'video')
            // console.log(bannerHeading, bannerImage)
        }
        
        fetchData();
    }, [])


  return (
    <>
    <Navbar idNav='nav-search'/>

    <main id="main-content-admin">
        <div id="videos-articles-wrapper">


            <div className="videos-wrapper">
                <div className="videos-latest">

                    <div className="top-video">
                        <video src={bannerVideo} controls muted>
                            Your browser does not support the video extension type
                        </video>
                        <div className="bannerVideo-text">
                            <h2 className="bannerVideo-heading">{videoHeading}</h2>
                        </div>
                    </div>

                    <div className="sub-videos">

                    </div>
                </div>
            </div>

            <div className="aricles-wrapper">
                <div className="articles-latest">

                    <div className="top-aritlce">
                        <img src={bannerImage} alt="" />
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

        </div>
    </main>
    </>
  )
}

export default Admin