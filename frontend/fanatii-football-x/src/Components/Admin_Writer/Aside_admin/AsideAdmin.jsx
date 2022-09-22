import React from 'react'
import './AsideAdmin.css'
import AdminImage from './AdminImage/JournalistReporter.jpg'
import Logo from './AdminImage/Logo.png'

//in this component, we going to display the admins information and based on their role:
//we allow the admin to create posts(articles) and update stats
function AsideAdmin() {
  return (
    <aside id='admin-information'>

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
                    Create Article
                </li>
                <li className='options-item'>
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