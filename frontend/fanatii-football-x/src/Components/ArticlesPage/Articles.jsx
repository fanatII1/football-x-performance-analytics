import React from 'react'
import './Articles.css'
import Navbar from '../Global_Navbar/Navbar'
import PodCastOne from './ArticlesImages/podcast(1).jpg'
import PodCastTwo from './ArticlesImages/podcast(2).jpg'
import PodCastThree from './ArticlesImages/podcast(3).png'
import PodCastFour from './ArticlesImages/podcast(3).png'
import Footer from '../Global_Footer/Footer'
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom'
import { useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
//import client module/package, so we able to fetch data from Contentful CMS
import  {client} from '../client'

const podcastData = [{image: PodCastOne, heading: 'The Back 3', host: 'Mpumelelo Lobelo | Ryan Mason | Melissa Partick'}, {image: PodCastTwo, heading: 'Fox Football Podcast', host: 'Ray Zondi | Lebogang Mofokeng'}, {image: PodCastThree, heading: 'The truth Football show', host: 'Gabrielle Noorodien | Ian Gonzalez'}, {image: PodCastFour, heading: 'Total Soccer show', host: 'Katie Parris'}];

function Articles() {
    const [allArt, setAllArt] = useState();
    const [articlesData, setArticlesData] = useState([]);
    const [filterArticlesType, setFilterArticlesType] = useState()
    const [allVideos, setAllVideos] = useState([])
    const [showHideVideoOverlay, setShowHideVideoOverlay] = useState('video-user-overlay')
    let navigate = useNavigate();
    const videoElement = useRef([]);

    useEffect(()=>{
        async function fetchData(){
            //we fetch Images and Data related to the article and return only first 3 images
            const contentfulResponse =  await client.getEntries({content_type: 'articles'});
            const allContentfulArticles = contentfulResponse.items;
            setAllArt(allContentfulArticles);
            let first3Articles = allContentfulArticles.filter((video, index)=> index <= 2);
            setArticlesData(first3Articles)
            
            //we fetch videos we need and return only the first 3
            const videoResponse =  await client.getEntries({content_type: 'videos'});
            const videoReponseData = videoResponse.items;
            let first3Videos = videoReponseData.filter((video, index)=> index <= 3);
            setAllVideos(first3Videos)
        }
        fetchData()
    },[])

    //onClick, plays video. hides banner
    const handlePlay = (key) =>{
        let video_element = videoElement.current[key];
        video_element.play();
        setShowHideVideoOverlay('hideVideoOverlay')
    }

    //onClick navigates to read article route. passes article(state) to new route
    const readArticle = (e, key)=>{
        let articleHeading = e.target.textContent;
        navigate(`/Articles/${articleHeading}`, {state: {articleKey: articleHeading}})
    }

    
    //onchange sets article filter type value.
    const filterArticle = (e) =>{
        console.log(e.target.value)
        setFilterArticlesType(e.target.value)
    }

    //after filter value is set, we return 3 articles that match article type
    useEffect(()=>{
        if(typeof allArt === 'undefined'){
            console.log(typeof allArt)
        }
        else{
            let articlesType = allArt.filter((articleType)=> articleType.fields.articleType === filterArticlesType)
            let first3Articles = articlesType.filter((article, index)=> index <= 2)
            setArticlesData(first3Articles)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filterArticlesType])

  return (
    <>
    <Navbar idNav='nav-search'/>

    <div id='Articles-main-container'>
        <h1 id='articles-section-main-heading'>Articles {'&'} Analysis</h1>
        <div id="filter-buttons">
            <label htmlFor='player analysis'>Player Analysis</label>
            <input type='radio' name='articlesFilter' id='player analysis' className='radio' value='player analysis' onChange={filterArticle} />
            <label htmlFor='scouting'>Scouting</label>
            <input type='radio' name='articlesFilter' id='scouting' className='radio' value='scouting' onChange={filterArticle}/>
            <label htmlFor='big data'>Big Data</label>
            <input type='radio' name='articlesFilter' id='big data' className='radio' value='big data' onChange={filterArticle}/>
            <label htmlFor="coach's pov">Coach's POV</label>
            <input type='radio' name='articlesFilter' id="coach's pov" className='radio' value="coach's pov" onChange={filterArticle}/>
            <label htmlFor='stories'>Stories</label>
            <input type='radio' name='articlesFilter' id='stories' className='radio' value='stories' onChange={filterArticle}/>
        </div>

        <section id='Articles-section'>
            {
                articlesData.map((article, key)=>{
                    return(
                        <div className='Article' key={key}>
            
                            <div className='article-bannerImg-wrapper'>
                                <img src={article.fields.bannerImage.fields.file.url} className='article-bannerImg' alt='bannerImage' />
                            </div>
                                            
                            <div className='article-summary-wrapper'>
                                <h3 className='article-summary-heading'  onClick={(e)=> readArticle(e,key)}>
                                    {article.fields.bannerHeading}
                                </h3>
                                <p className='article-summary-text'>
                                   {article.fields.title}
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
                                <img src={video.fields.bannerVideoImage.fields.file.url} alt='' className='video-user-overlay-image' />
                                <div className='banner-video-image-overlay'  onClick={()=> handlePlay(key)}>
                                    <i className='fa-solid fa-play player'></i>
                                    <h3 className='video-overlay-heading'>{video.fields.bannerVideoHeading}</h3>
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