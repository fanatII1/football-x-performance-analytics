import React from 'react';
import './Navbar.css'
import image from './NavbarImages/Logo.png'

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
              <li className='list-item'>Homepage</li>
              <li className='list-item'>Login</li>
              <li className='list-item'>SignUp</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
