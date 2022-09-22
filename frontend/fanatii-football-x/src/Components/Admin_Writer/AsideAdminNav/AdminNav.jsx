import React from 'react'
import './AdminNav.css'
import MDC from '../Aside_admin/AdminImage/MDC.jpg'
import GladAfricaLogo from '../Aside_admin/AdminImage/GladAfricaLeague.png'
import DSTVLeague from '../Aside_admin/AdminImage/DSTV-League.jpg'
import { Link } from 'contentful'

const leagueImage = [DSTVLeague, MDC, GladAfricaLogo];

function AdminNav() {
  return (
    <nav id='admin-nav'>

        <div id='admin-nav-list-wrapper'>
            <ul id='admin-nav-list'>
                <li className='admin-nav-item'><Link>Home <span className='nav-hr'></span></Link></li>
                <li className='admin-nav-item'><Link>Search <span className='nav-hr'></span></Link></li>
                <li className='admin-nav-item'><Link>Articles <span className='nav-hr'></span></Link></li>
                <li className='admin-nav-item'><Link>Education <span className='nav-hr'></span></Link></li>
                <li className='admin-nav-item'><Link>About <span className='nav-hr'></span></Link></li>
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