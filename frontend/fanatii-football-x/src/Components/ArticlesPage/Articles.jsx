import React from 'react'
import './Articles.css'
import Navbar from '../Global_Navbar/Navbar'
import PodCastOne from './ArticlesImages/podcast(1).jpg'
import PodCastTwo from './ArticlesImages/podcast(2).jpg'
import PodCastThree from './ArticlesImages/podcast(3).png'
import PodCastFour from './ArticlesImages/podcast(4).png'
import Footer from '../Global_Footer/Footer'
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom'
import { useState, useEffect } from 'react'
//import client module/package, so we able to fetch data from Contentful CMS
import  {client} from '../client'

const podcastData = [{image: PodCastOne, heading: 'The Back 3', host: 'Mpumelelo Lobelo | Ryan Mason | Melissa Partick'}, {image: PodCastTwo, heading: 'Fox Football Podcast', host: 'Ray Zondi | Lebogang Mofokeng'}, {image: PodCastThree, heading: 'The truth Football show', host: 'Gabrielle Noorodien | Ian Gonzalez'}, {image: PodCastFour, heading: 'Total Soccer show', host: 'Katie Parris'}];

//number that will be used to go to next and previous articles that will be inside array 
let num = 0;
function Articles() {
    const [articlesData, setArticlesData] = useState([]);
    const [bannerImage, setBannerImage] = useState('');
    const [bannerHeading, setBannerHeading] = useState('');
    const [allVideos, setAllVideos] = useState([])
    const [summaryAnimationClass, setSummaryAnimationClass] = useState('article-summary-heading')

    //on intial render, we fetch the data of articles(summary display) and videos that we going to show
    useEffect(()=>{
        async function fetchData(){
            //we fetch Images and Data related to the articles
            const imageresponse =  await client.getEntries({content_type: 'postBannerImage'});
            const imageResponseData = imageresponse.items;
            const bannerHeading = imageResponseData[0].fields.bannerHeading;
            const bannerImage = imageResponseData[0].fields.bannerImage.fields.file.url;
            setArticlesData(imageResponseData)
            setBannerHeading(bannerHeading)
            setBannerImage(bannerImage)            
            
            //we fetch videos we need and return only the first 4
            const Videoresponse =  await client.getEntries({content_type: 'videos'});
            const Video_reponseData = Videoresponse.items;
            let videos = Video_reponseData;
            let first3Videos = videos.filter((video, index)=> index <= 4); //return first 4 videos data.
            setAllVideos(first3Videos)
        }
        fetchData()
    },[])

    //function that checks state of animation and applies correct styling/animation to article heading
    function animationTest(){
        if(summaryAnimationClass === 'article-summary-heading'){
            setSummaryAnimationClass('summary-animation')
        }
        else{
            setSummaryAnimationClass('article-summary-heading')
        }
    }

    //onclick navigate to next article
    const nextArticle = (e) =>{
        e.preventDefault();
        num++;
        //if number is greater then the last item in array(index), we set  it back to start at first item
        if(num > articlesData.length - 1){
           num = 0
           let article = articlesData[num];
           let bannerImage = article.fields.bannerImage.fields.file.url;
           let bannerHeading = article.fields.bannerHeading;
           setBannerImage(bannerImage);
           setBannerHeading(bannerHeading);
           animationTest();
        }
        else{
            let article = articlesData[num];
            let bannerImage = article.fields.bannerImage.fields.file.url;
            let bannerHeading = article.fields.bannerHeading;
            setBannerImage(bannerImage);
            setBannerHeading(bannerHeading);
            animationTest();
        }
    }

    //onclick navigates to previous article
    const prevArticle = (e) =>{
        e.preventDefault();
        num--;
        //if number is less than 0, we set it back to start at last item in array
        if(num < 0){
            num = articlesData.length;
            num--;
            let article = articlesData[num];
            let bannerImage = article.fields.bannerImage.fields.file.url;
            let bannerHeading = article.fields.bannerHeading;
            setBannerImage(bannerImage);
            setBannerHeading(bannerHeading);
            animationTest();
        }
        else{
            let article = articlesData[num];
            let bannerImage = article.fields.bannerImage.fields.file.url;
            let bannerHeading = article.fields.bannerHeading;
            setBannerImage(bannerImage);
            setBannerHeading(bannerHeading);
            animationTest();
        }
    }



  return (
    <>
    <Navbar idNav='nav-search'/>

    <div id='Articles-main-container'>

        <section id='Articles-section'>
            <div id='all-articles'>
            <h1 id='article-main-heading'>Articles {'&'} Analysis</h1>

            <div className='Article'>

                <div className='article-bannerImg-wrapper'>
                    <img src={bannerImage} className='article-bannerImg' alt={bannerImage} />
                    <button id='next' onClick={nextArticle}>{'>'}</button>
                    <button id='prev' onClick={prevArticle}>{'<'}</button>
                </div>
                                
                <div className='article-summary-wrapper'>
                    <h3 className={summaryAnimationClass}>
                        {bannerHeading}
                    </h3>
                    <p className={summaryAnimationClass}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Consequatur sunt sit accusantium quos molestias optio?
                    </p>
                </div>

            </div> 
            </div>
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
                            <video src={display_vid} autoPlay id='bannerVideo'>
                                Your browser does not support the video extension type
                             </video>
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
                                <a href='https://podcasts.apple.com/us/podcast/the-back-three/id1582621804'>
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