import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import './ILTTdataTowersHeader.css';
// import logo from 'ZEE_LOGO.jpg'


const ILTTdataTowersHeader = (props) => {

    return (

        <div className="data-tower-head">
            <div className="logo-datatowers">
                <img src='/static/images/logos/zee-logo.png' height={30} alt='Viewers Logo' className='logo-image' />
            </div>
            <div className="logo-datatowers">
                <img src='/static/images/logos/background-image-final.png' alt='Viewers Logo' className='datatower-image' />
            </div>
            <div className='loginUser'>
            <img src='/static/images/logos/profile.svg'  className="profile"height={40} alt='profile Logo' />
            <p className='username'>Hello Deepak</p>
            <img src='/static/images/logos/logout.svg'className="logout" height={40} alt='logoutLogo' />
            </div>
        </div>


    )
}

export default ILTTdataTowersHeader;