import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
//fetch data from contentful
//display image and screen and navbar
function ReadArticles() {
  const location = useLocation();
  //we fetch specific article based of the value in location object
  //we got value from navigate() in Articles page, which is the key that links to a specific article
  useEffect(()=>{
    
  },[location])

  return (
    <div style={{color: '#fff'}}>ReadArticles</div>
  )
}

export default ReadArticles