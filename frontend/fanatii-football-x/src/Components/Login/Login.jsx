import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './LoginImages/Logo.png'
import './Login.css';

function Login() {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

    
  /*take user data, store in the array*/
  const handleChange = (e) =>{
    const name = e.target.name;
    const user_value = e.target.value;
    setUserData((prevData)=>{
      return {...prevData, [name]: user_value} 
    })
  }

  /*user submition of data to backend*/ 
  const handleSubmit = async(e) =>{
    e.preventDefault();
    await fetch('Login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData)
    })
    .then((response)=>{
      response.json()
    })
    .then((token)=>{
      localStorage.setItem('user_token', token);
      navigate('/');
    })
  }


  return (
    <div id='login-main-container'>
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
          <form id='Login' autoComplete='off' onSubmit={handleSubmit}>
            <h2 className='login-form-heading'>LOGIN</h2>
            <label htmlFor="Username">Username:</label>
            <input type='text' id='Username' className='form-input' placeholder='Username' name='username' onChange={handleChange}/>
            <label htmlFor="Password">Password:</label>
            <input type='password' id='Password' className='form-input' placeholder='Password' name='password' onChange={handleChange}/>
            <input type='submit' className='login-btn' value='LOG-in' />
          </form>
        </div>

      </div>
   </main>
    </div>
  );
}

export default Login;
