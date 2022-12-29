import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import './ILTTdataTowers.css';
import Header from "../../Components/dataTowersHeader/ILTTdataTowersHeader";
import Body from "../../Components/dataTowersContain/ILTTdataTowersContain";

const ILTTdataTowers = (props) => {

    return (
        <div >
            <Header />
            <Body/>
    
        </div>
    )
}

export default ILTTdataTowers;