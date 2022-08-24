import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './SignUpImages/Logo.png'
import './SignUp.css';

function SignUp() {
  const [userData, setUserData] = useState([{}]);
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
    await fetch('SignUp', {
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
    <>
    <header id='header-signup'>
      <div className="header-signup-container">
        <img src={image} className='signup-img' alt='signup' />
      </div>
    </header>

    <main id="signup-content">
     <div id='signup-container'>
      <div className="company-signup-container">
        <img src={image} className='signup-img signup-image' alt='signup' />
      </div>

        <div id='form-wrapper'>
          <form id='signup' autoComplete='off' onSubmit={handleSubmit}>
            <h2 className='signup-form-heading'>Sign-Up</h2>
            <label htmlFor="Username">Username:</label>
            <input type='text' id='Username' className='form-input' placeholder='Username' name='username' onChange={handleChange}/>
            <label htmlFor="Password">Password:</label>
            <input type='password' id='Password' className='form-input' placeholder='Password' name='password' onChange={handleChange}/>
            <input type='submit' className='signup-btn' value='SIGN-UP' />
          </form>
        </div>

      </div>
   </main>
    </>
  );
}

export default SignUp;
