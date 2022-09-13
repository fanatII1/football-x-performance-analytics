import React from 'react'
import { useState } from 'react'
import './CreatePostJournalist.css'
import Navbar from '../Global_Navbar/Navbar';

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
       <>
       <Navbar idNav='nav-search'/>
        <div id='Post-Container'>
            <h1 id='Page-Post-heading'>Create A Post</h1>
            <div className='formGroup'>
                <form id='Article-PostForm'>
                    <div className='writeContent first'>
                        <label htmlFor='bannerImage'>
                            <span className='addBannerImage'>+</span>
                        </label>
                        <input type='file' name='bannerImage' className='bannerImage writeInput' onChange={(e)=>{ setBannerImage(e.target.files[0])}} multiple/>
                        <input type='text' name='heading' className='heading writeInput' onChange={(e)=>{ setHeading(e.target.value)}} placeholder='Title'/>                    
                    </div>

                   <div className='writeContent second'>
                    <textarea name='mainContent' className='mainContent writeInput' placeholder='Content...' onChange={(e)=>{ setMainContent(e.target.value)}}></textarea>
                   </div>
                   <button type='submit' onClick={createPost} className='submitContent'>Create Post</button>
                </form>
            </div>
        </div>
       </>
    )
}

export default CreatePostJournalist