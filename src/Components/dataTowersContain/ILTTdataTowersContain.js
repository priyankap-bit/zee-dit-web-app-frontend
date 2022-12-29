import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import './ILTTdataTowersContain.css';


const ILTTdataTowersContain = (props) => {

    return (

        <div className="">
           <div className='Executive-Summary-tile'>
               <img src='/static/images/logos/Executive-summary-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Executive Summary</div>
           </div>
           <div className='data-towers'>
          <div className='Executive-Summary-tile'>
              <img src='/static/images/logos/Consumer-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Consumer</div>
           </div>
          
           <div className='Executive-Summary-tile'>
              <img src='/static/images/logos/Content-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Content</div>
           </div>
           <div className='Executive-Summary-tile'>
              <img src='/static/images/logos/Customer-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Customer</div>
           </div>
           <div className='Executive-Summary-tile'>
              <img src='/static/images/logos/Product-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Product</div>
           </div>
           </div>
           <div className='Executive-Summary-tile'>
              <img src='/static/images/logos/Sports-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <a href='/ilt20-summary' className='sports'><div className="tile-name">Sports</div></a>
           </div>
        </div> 
    
    )
}

export default ILTTdataTowersContain;