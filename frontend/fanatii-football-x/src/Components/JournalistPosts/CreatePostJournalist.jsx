import React from 'react'
import { useState } from 'react'
import './CreatePostJournalist.css'
import { useEffect } from 'react';

//Component that will allow users to create a post
//we take form data: heading, title, stats image, and description text
//need text input, file input(2)--banner and stats, textarea, submit
//when submit is clicked, we upload a post

//when user enters a value(onChange) in the form, we want to set that value to the components state
//then we going to store that value into the formData() object
function CreatePostJournalist() {
    const [heading, setHeading] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    const [mainContent, setMainContent] = useState('');

    //when form gets submitted, we store form data into the FormData() object, and send it(post) to backend
    const createPost = async (e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('heading', heading)
        data.append('bannerImage', bannerImage)
        data.append('mainContent', mainContent)
        
        await fetch('/CreatePost', {
            method: 'POST',
            body: data
        })
        .then(()=>{
            alert('post created successfully')
        })
        .catch((error)=>{
            console.log(error)
        })
        console.log(`${data}`)
    }


    return(
        <div id='Post Container'>
            <h1 id='Page-Post-heading'>Create A Post</h1>
            <div className='formGroup'>
                <form id='post-creation-form'>
                    <input type='text' name='heading' className='post-heading' onChange={(e)=>{ setHeading(e.target.value)}} />
                    <input type='file' name='bannerImage' className='bannerImage' onChange={(e)=>{ setBannerImage(e.target.files[0])}} multiple/>
                    <textarea name='mainContent' id='mainContent' placeholder='Content...' onChange={(e)=>{ setMainContent(e.target.value)}}></textarea>
                    <button type='submit' onClick={createPost}>Create Post</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePostJournalist