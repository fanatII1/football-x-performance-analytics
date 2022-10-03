import React from 'react'
import './AdminNav.css'
import MDC from '../Aside_admin/AdminImage/MDC.jpg'
import GladAfricaLogo from '../Aside_admin/AdminImage/GladAfricaLeague.png'
import DSTVLeague from '../Aside_admin/AdminImage/DSTV-League.jpg'
import { Link } from 'react-router-dom'

const leagueImage = [DSTVLeague, MDC, GladAfricaLogo];

function AdminNav() {
  return (
    <nav id='admin-nav'>

        <div id='admin-nav-list-wrapper'>
            <ul id='admin-nav-list'>
                <li className='admin-nav-item'><Link to='/'>Home <span className='nav-hr'></span></Link></li>
                <li className='admin-nav-item'><Link to='/GlobalSearch'>Search <span className='nav-hr'></span></Link></li>
                <li className='admin-nav-item'><Link to='/Articles'>Articles <span className='nav-hr'></span></Link></li>
                <li className='admin-nav-item'><Link to='/Education'>Stats Education <span className='nav-hr'></span></Link></li>
                <li className='admin-nav-item'><Link to='/Admin'>Admin<span className='nav-hr'></span></Link></li>
                {/* <li className='admin-nav-item'><Link to=''>About <span className='nav-hr'></span></Link></li>*/}
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