import React from 'react';
import './Navbar.css'
import image from './NavbarImages/Logo.png'
import {Link} from 'react-router-dom'

function Navbar({idNav}) {
  return (
    <>
      <nav id={idNav}>
        <div id='navbar-items'>
          <div className='logo'>
            <img src={image} className='nav-logo' alt='Logo' />
          </div>
          <div className='nav-list'>
            <ul id='nav-list-items'>
              <li className='list-item li-1'><Link to='/'>Homepage</Link><span className="nav-hr"></span></li>
              <li className='list-item li-2'><Link to='/GlobalSearch'>Search</Link><span className="nav-hr"></span></li>
              <li className='list-item li-3'><Link to='/Articles'>Articles</Link><span className="nav-hr"></span></li>
              <li className='list-item li-3'><Link to='/Education'>Stats Education</Link><span className="nav-hr"></span></li>
              {
                (localStorage.getItem('adminToken')) ? (
                  <li className='list-item li-3'><Link to='/Admin'>Admin</Link><span className="nav-hr"></span></li>
                ):
                (
                  <></>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
