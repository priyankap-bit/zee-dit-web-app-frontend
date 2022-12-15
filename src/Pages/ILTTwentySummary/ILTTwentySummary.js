import { useCallback, useState } from 'react';
import ILTTwentrySummaryHeader from '../../Components/ILTTwentrySummaryHeader/ILTTwentrySummaryHeader';
import ILTTwentyFilterBar from '../../Components/ILTTwentyFilterBar/ILTTwentyFilterBar';
import ILTTwentyTabsForNavigation from '../../Components/ILTTwentyTabsForNavigation/ILTTwentyTabsForNavigation';
import './ILTTwentySummary.css';

const ILTTwentySummary = (props) => {

    const [isNavigationTabActive, setIsNavigationTabActive] = useState({
        viewershipPerformance: true,
        socialListing: false,
    })

    const handleNavigationTabClick = useCallback((tab, event) => {
        console.log('handleNavigationTabClick');
        tab === 'viewershipPerformance' ?
            setIsNavigationTabActive({
                viewershipPerformance: true,
                socialListing: false,
            }) :
            setIsNavigationTabActive({
                viewershipPerformance: false,
                socialListing: true,
            })
    }, [isNavigationTabActive])

    return (
        <div className='ilt20-summary-container'>
            <ILTTwentrySummaryHeader />
            <ILTTwentyFilterBar />
            <ILTTwentyTabsForNavigation
                // isNavigationTabActive={isNavigationTabActive}
                // handleNavigationTabClick={handleNavigationTabClick}
            />
        </div>
    )
}

export default ILTTwentySummary;