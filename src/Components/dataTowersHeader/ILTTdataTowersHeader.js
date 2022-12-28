import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import './ILTTdataTowersHeader.css';
// import logo from 'ZEE_LOGO.jpg'


const ILTTdataTowersHeader = (props) => {

    return (

        <div className="head">
            <div className="logo">
                <img className='logoImg' src='{logo}' alt='logo'/>
            </div>  

            <div className='loginUser'>
                <p>Hello Deepak,</p>
            </div>
        </div> 
        

    )
}

export default ILTTdataTowersHeader;