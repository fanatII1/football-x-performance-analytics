import React from 'react'
import './AsideAdmin.css'
import AdminImage from './AdminImage/JournalistReporter.jpg'
import Logo from './AdminImage/Logo.png'

//in this component, we going to display the admins information and based on their role:
//we allow the admin to create posts(articles) and update stats

//below link will be used to go to contentful site where we are going to create article posts
let createArticleLink = 'https://app.contentful.com/spaces/ox8fxrfb2nbi/entries?id=wbkEQq5FIO2z46qM&contentTypeId=videos&order.fieldId=updatedAt&order.direction=descending&displayedFieldIds=contentType&displayedFieldIds=updatedAt&displayedFieldIds=author&page=0';

function AsideAdmin({adminInfo, setAdminInfo, setAdminModal}) {

    //onClick hides the admins aside information by applying the responsive styles('admi-information) on mobile phones that hides the aside elements(admin information)
    const hideAdminInfo = (e) =>{
        e.preventDefault();
        setAdminInfo('admin-information')
    }

    //onClick reveals admin modal
    const showAdminModal = () =>{
        setAdminModal('showAdminModal')
    }

  return (
    <aside className={adminInfo}>
        <button id='hideAdmin-info' onClick={hideAdminInfo}>X</button>

        <div id='company-logo'>
            <img src={Logo} alt='Company-logo' />
        </div>

        <div id='admin-summary-info'>

            <div className='admin-image-wrapper'>
                <img src={AdminImage} alt='' id='admin-image' />
            </div>

            <div className='admin-name'>
                <h3 id='admin-name-heading'>
                    Michael Cox
                </h3>
            </div>
        </div>

        <div id='admin-options'>
            <ul id='options-list'>
                <li className='options-item'>
                    <i className='fa-regular fa-newspaper f-article'></i>
                   <a href={createArticleLink}>Create Article</a>
                </li>
                <li className='options-item' onClick={showAdminModal}>
                    <i className='fa-solid fa-futbol'></i>
                    Update Stats
                </li>
                <li className='options-item'>
                    <i className='fa-solid fa-gear'></i>
                    Settings
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default AsideAdmin