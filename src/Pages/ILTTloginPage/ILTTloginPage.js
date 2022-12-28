import { useCallback, useEffect, useState } from 'react';
import ILTTwentrySummaryHeader from '../../Components/ILTTwentrySummaryHeader/ILTTwentrySummaryHeader';
import ILTTwentyFilterBar from '../../Components/ILTTwentyFilterBar/ILTTwentyFilterBar';
import ILTTwentyTabsForNavigation from '../../Components/ILTTwentyTabsForNavigation/ILTTwentyTabsForNavigation';
import ILTTwentySummaryServices from '../../Services/ILTTwentySummaryServices';
import './ILTTloginPage.css';

const ILTTloginPage = (props) => {



    return (
        <form className='login-page'>
            <input type="email" name="name" placeholder='Email' /> <br />
            <input type="password" name="pass" placeholder='Password' /> <br />
            <input className='login' type="submit" value="LOGIN" />
        </form>
    )


}

export default ILTTloginPage;