import { useCallback, useEffect, useState } from 'react';
// import { Link } from "react-router-dom"; 

import './ILTTloginPage.css';

const ILTTloginPage = (props) => {
    return (

        <div className='login-page-container'>
            <div className='branding-icon'>
                <img src='/static/images/logos/Branding.png' height={70} alt='Viewers Logo' className='branding-image' />
            </div>
            <form className='login-page'>
                <img src='/static/images/logos/login-email.svg' alt='Viewers Logo' className='email-image' />
                <input type="email" name="name" id="email" placeholder='Email' /> <br />
                <img src='/static/images/logos/password.svg' alt='Viewers Logo' className='password-image' />
                <input type="password" name="pass" id="pass" placeholder='Password' /> <br />
                <p className='forgot-password'>Forgot password?</p>
                <a href="/" className="login">LOGIN</a>
                
            </form>
        </div>


    )

}

export default ILTTloginPage;