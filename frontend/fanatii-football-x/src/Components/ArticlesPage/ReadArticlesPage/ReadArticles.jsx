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
  const [richTextContentField, setRichTextContentField] = useState()

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
      console.log(article[0].fields.mainContent)
      setArticleBannerHeading(articleBannerHeading)
      setArticleBannerImage(articleImage)
      setRichTextContentField(article[0].fields.mainContent)
    }
    ArticleRead();
  },[location])

  const renderOptions = {
    renderNode:{
      [BLOCKS.EMBEDDED_ASSET] : (node, children)=>{
        console.log(node)
        return <img src={node.data.target.fields.file.url} alt="rtc-img" className='rtc-img'/>
      },

      [BLOCKS.PARAGRAPH]: (node, children)=>{
        return <p>{children}</p>
      },
      [BLOCKS.HEADING_2]: (node,children)=>{
        return <h2>{children}</h2>
      },
      [BLOCKS.HEADING_3]: (node,children)=>{
        return <h3>{children}</h3>
      },
      [BLOCKS.HEADING_4]: (node,children)=>{
        return <h4>{children}</h4>
      },
      [BLOCKS.HEADING_5]: (node,children)=>{
        return <h5>{children}</h5>
      },
      [BLOCKS.HEADING_6]: (node,children)=>{
        return <h6>{children}</h6>
      }
    }
  }

  if(typeof articleBannerHeading !== 'undefined' && typeof articlBannerImage !== 'undefined'){
    return(
      <div className="article-content">
        {documentToReactComponents(richTextContentField, renderOptions)}
      </div>
    )
  }
}

export default ReadArticles