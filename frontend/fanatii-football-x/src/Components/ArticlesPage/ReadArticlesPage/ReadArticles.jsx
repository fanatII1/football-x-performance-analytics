import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { client } from '../../client';
//we import rich text editor content renderer from contentful package
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

function ReadArticles() {
  const location = useLocation();
  const [articleBannerHeading, setArticleBannerHeading] = useState();
  const [articlBannerImage, setArticleBannerImage] = useState();
  const [richTextContentField, setRichTextContentField] = useState();

  //we fetch specific article based of the title in location object
  //Got the title from navigate() object in Articles Component.
  useEffect(()=>{
    let articleTitle = location.state.articleKey;
    async function ArticleRead(){
      const response =  await client.getEntries({content_type: 'articles'});
      const articleData = response.items;
      let article = articleData.filter((article)=> article.fields.title === articleTitle);
      const articleBannerHeading = article[0].fields.title;
      const articleImage = article[0].fields.bannerImage.fields.file.url;
      setArticleBannerHeading(articleBannerHeading)
      setArticleBannerImage(articleImage)
      setRichTextContentField(article[0].fields.mainContent)
    }
    ArticleRead();
  },[location])

  //object that defines how the documentToReactComponents() function should render its content
  //content being the RichtTextEditor content from contentful CMS
  const renderOptions = {
    renderNode:{
      [BLOCKS.EMBEDDED_ASSET] : (node, children)=>{
        return <img src={node.data.target.fields.file.url} alt="rtc-img" className='rtc-img'/>
      },
      [BLOCKS.PARAGRAPH]: (node, children)=>{
        return <p className='rtc-paragraph'>{node.content[0].value}</p>
      },
      [BLOCKS.HEADING_1]: (node,children)=>{
        return <h1 className='rtf-heading-1'>{node.content[0].value}</h1>
      },
      [BLOCKS.HEADING_2]: (node,children)=>{
        return <h2 className='rtf-heading-2'>{node.content[0].value}</h2>
      },
      [BLOCKS.HEADING_3]: (node,children)=>{
        return <h3 className='rtf-heading-3'>{node.content[0].value}</h3>
      },
      [BLOCKS.HEADING_4]: (node,children)=>{
        return <h4 className='rtf-heading-4'>{node.content[0].value}</h4>
      },
      [BLOCKS.HEADING_5]: (node,children)=>{
        return <h5 className='rtf-heading-1=5'>{node.content[0].value}</h5>
      },
      [BLOCKS.HEADING_6]: (node,children)=>{
        return <h6 className='rtf-heading-6'>{node.content[0].value}</h6>
      }
    }
  }

  if(typeof articleBannerHeading !== 'undefined' && typeof articlBannerImage !== 'undefined'){
    return(
      <>
      <div id="articleBanner">
        <img src={articlBannerImage} alt="article-read-banner-img" id="article-banner-image" />
      </div>
      <main id="read-article-main-content">
        <div id="rtc-article-content">
        {documentToReactComponents(richTextContentField, renderOptions)}
        </div>
      </main>
      </>
    )
  }
}

export default ReadArticles