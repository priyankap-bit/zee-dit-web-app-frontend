import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import './ILTTdataTowersContain.css';


const ILTTdataTowersContain = (props) => {

    return (

        <div className="Data-towers">
           <a href='executive-summary' className='Executive-Summary-tile'>
              <div className='test'>
               <img src='/static/images/logos/summary.svg' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Executive Summary</div>
               </div>
           </a>
           <div className='data-towers'>
          <a className='Executive-Summary-tile'>
              <img src='/static/images/logos/Consumer-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Consumer</div>
           </a>
          
           <a className='Executive-Summary-tile'>
              <img src='/static/images/logos/Content-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Content</div>
           </a>
           <a className='Executive-Summary-tile'>
              <img src='/static/images/logos/Customer-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Customer</div>
           </a>
           <a href='/product' className='Executive-Summary-tile product'>
              <img src='/static/images/logos/Product-icon.png' height={20} alt='Viewers Logo' className='icon' />
               <div className="tile-name">Product</div>
           </a>
           </div>
           <a href='/ilt20-summary' className='sports'>
           <div className='Executive-Summary-tile'>
              <img src='/static/images/logos/Sports-icon.png' height={20} alt='Viewers Logo' className='icon' />
              <div className="tile-name">Sports</div>
           </div>
           </a>
        </div> 
    
    )
}

export default ILTTdataTowersContain;