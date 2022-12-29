import { useCallback, useEffect, useState } from 'react';
// import { Link } from "react-router-dom"; 

import './ILTTloginPage.css';

const ILTTloginPage = (props) => {
    return (

        <div className='login-page-container'>
            <div className='branding-icon'>
                <img src='/static/images/logos/Branding.png' height={50} alt='Viewers Logo' className='branding-image' />
            </div>
            <form className='login-page'>
                <input type="email" name="name" placeholder='Email' /> <br />
                <input type="password" name="pass" placeholder='Password' /> <br />
                {/* <a href={<ILTTdataTowers/>} className="login">sdfsdf</a> */}
                <input className='login' type="submit" value="LOGIN" />
            </form>
        </div>


    )

}

export default ILTTloginPage;