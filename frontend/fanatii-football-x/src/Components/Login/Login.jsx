import React from 'react';
import image from './LoginImages/Logo.png'
import './Login.css';

function Login() {
  return (
    <>
    <header id='header-login'>
      <div className="header-logo-container">
        <img src={image} className='logo-img' alt='logo' />
      </div>
    </header>

    <main id="login-content">
     <div id='login-container'>
      <div className="company-logo-container">
        <img src={image} className='logo-img logo-image' alt='logo' />
      </div>

        <div id='form-wrapper'>
          <form id='Login' autoComplete='off'>
            <h2 className='login-form-heading'>LOGIN</h2>
            <label htmlFor="Username">Username:</label>
            <input type='text' id='Username' className='form-input' placeholder='Username' />
            <label htmlFor="Password">Password:</label>
            <input type='password' id='Password' className='form-input' placeholder='Password' />
            <input type='submit' className='login-btn' value='LOG-in' />
          </form>
        </div>

      </div>
   </main>
    </>
  );
}

export default Login;
