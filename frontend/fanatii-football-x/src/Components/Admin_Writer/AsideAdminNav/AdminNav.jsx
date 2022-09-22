import React from 'react'
import './AdminNav.css'
import MdcLogo from '../Aside_admin/AdminImage/MDC.jpg'
import GladAfricaLogo from '../Aside_admin/AdminImage/GladAfricaLeague.png'
import DSTVLeague from '../Aside_admin/AdminImage/DSTV-League.jpg'

const leagueImage = [MdcLogo, GladAfricaLogo, DSTVLeague];

function AdminNav() {
  return (
    <nav id='admin-nav'>

        <div id='admin-nav-list-wrapper'>
            <ul id='admin-nav-list'>
                <li className='admin-nav-item'>Home <span className='nav-hr'></span></li>
                <li className='admin-nav-item'>Search <span className='nav-hr'></span></li>
                <li className='admin-nav-item'>Articles <span className='nav-hr'></span></li>
                <li className='admin-nav-item'>Education <span className='nav-hr'></span></li>
                <li className='admin-nav-item'>About <span className='nav-hr'></span></li>
            </ul>
        </div>

        <div id='leagues'>
            {
                leagueImage.map((league)=>{
                    return(
                        <div className='league-image-wrapper'>
                            <div className='league-image-align'>
                                <img src={league} alt='' className='leagueImage' />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </nav>
  )
}

export default AdminNav