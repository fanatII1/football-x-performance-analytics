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

const podcastData = [
    {image: PodCastOne, heading: 'The Back 3', host: 'Mpumelelo Lobelo | Ryan Mason | Melissa Partick'},
    {image: PodCastTwo, heading: 'Talent Scout: Why Cape Town City promoted young midfielder, Taahir Goedeman(statistical analysis)?', host: 'Ray Zondi | Lebogang Mofokeng'},
    {image: PodCastThree, heading: 'The truth behind expected assists(xA)', host: 'Gabrielle Noorodien | Ian Gonzalez'},
    {image: PodCastFour, heading: 'Should clubs focus on shot quality using expected goals?', host: 'Katie Parris'}
];

//number that will be used to go to next and previous articles that will be inside array 
let num = 0;

function Articles() {
    const [articlesData, setArticlesData] = useState([]);
    const [bannerImage, setBannerImage] = useState('');
    const [bannerHeading, setBannerHeading] = useState('');

    //on intial render, we fetch the data of articles(summary display) that we going to show
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
        }
        fetchData()
    },[])

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
           setBannerHeading(bannerHeading)
        }
        else{
            let article = articlesData[num];
            let bannerImage = article.fields.bannerImage.fields.file.url;
            let bannerHeading = article.fields.bannerHeading;
            setBannerImage(bannerImage);
            setBannerHeading(bannerHeading)
        }
    }
    

    //navigate to previous article
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
            setBannerHeading(bannerHeading)
        }
        else{
            let article = articlesData[num];
            let bannerImage = article.fields.bannerImage.fields.file.url;
            let bannerHeading = article.fields.bannerHeading;
            setBannerImage(bannerImage);
            setBannerHeading(bannerHeading)
        }
    }




    //onclick navigagte to prev article

  return (
    <>
    <Navbar idNav='nav-search'/>

    <h1 id='articles-main-heading'>Articles {'&'} Analysis</h1>
    <div id='Articles-main-container'>

        <section id='Articles-section'>
            <div id='all-articles'>
            <div className='article'>

                <div className='article-bannerImg-wrapper'>
                    <img src={bannerImage} className='article-bannerImg' alt={bannerImage} />
                    <button id='next' onClick={nextArticle}>{'>'}</button>
                    <button id='prev' onClick={prevArticle}>{'<'}</button>
                </div>
                                
                <div className='article-summary-wrapper'>
                    <h3 className='article-summary-heading'>{bannerHeading}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Consequatur sunt sit accusantium quos molestias optio?
                    </p>
                </div>

            </div> 
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