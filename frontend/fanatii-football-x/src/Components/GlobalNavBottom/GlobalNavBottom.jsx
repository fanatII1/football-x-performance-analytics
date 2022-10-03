import React from 'react';
import './GlobalNavBottom.css';
import { Link } from 'react-router-dom';

function GlobalNavBottom({ navBottom }) {
  return (
    <div id={navBottom}>
      <ul id='bottom-nav-list'>
        <li className='list'>
          <Link to='/'>
            <span className='icon'>
              <i className='fa-solid fa-house'></i>
            </span>
            <span className='text'>Home</span>
          </Link>
        </li>
        <li className='list'>
          <Link to='/GlobalSearch'>
            <span className='icon'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </span>
            <span className='text'>Search</span>
          </Link>
        </li>
        <li className='list'>
          <Link to='/Articles'>
            <span className='icon'>
              <i className='fa-solid fa-newspaper'></i>
            </span>
            <span className='text'>Articles</span>
          </Link>
        </li>
        {localStorage.getItem('adminToken') ? (
          <li className='list'>
            <Link to='/Admin'>
              <span className='icon'>
                <i className='fa-solid fa-user-plus'></i>
              </span>
              <span className='text'>Admin</span>
            </Link>
          </li>
        ) : (
          <></>
        )}
        {localStorage.getItem('adminToken') || localStorage.getItem('userToken') ? (
          <></>
        ) : (
          <>
            <li className='list'>
              <Link to='/Login'>
                <span className='icon'>
                  <i class='fa-solid fa-right-to-bracket'></i>
                </span>
                <span className='text'>Articles</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default GlobalNavBottom;
