import { useCallback, useEffect, useState } from 'react';
import AreaChart from '../../Components/Charts/AreaChart/AreaChart';
import ExecutiveSummaryVizContainerWithChartsAndNumbers from '../../Components/ExecutiveSummary/ExecutiveSummaryVizContainerWithChartsAndNumbers/ExecutiveSummaryVizContainerWithChartsAndNumbers';
import ILTTwentrySummaryHeader from '../../Components/ILTTwentrySummaryHeader/ILTTwentrySummaryHeader';
import ILTTwentyFilterBar from '../../Components/ILTTwentyFilterBar/ILTTwentyFilterBar';
import ILTTwentyTabsForNavigation from '../../Components/ILTTwentyTabsForNavigation/ILTTwentyTabsForNavigation';
import ILTTwentySummaryServices from '../../Services/ILTTwentySummaryServices';
import './ILTTwentySummary.css';

const ILTTwentySummary = (props) => {

    const [isNavigationTabActive, setIsNavigationTabActive] = useState({
        viewershipPerformance: true,
        socialListing: false,
    })

    const [selectedFilterDate, setSelectedFilterDate] = useState(null);

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
    }, [isNavigationTabActive]);

    const handleFilterValueChange = date => setSelectedFilterDate(date);

    return (
        <div className='ilt20-summary-container'>
            <ILTTwentrySummaryHeader />
            {/* <ILTTwentyFilterBar
                handleFilterValueChange={handleFilterValueChange}
            /> */}
            <ILTTwentyTabsForNavigation
                // isNavigationTabActive={isNavigationTabActive}
                // handleNavigationTabClick={handleNavigationTabClick}
                selectedFilterDate={selectedFilterDate}
            />
            {/* <AreaChart /> */}
            <div className='executive-summary-main-container'>
                <div className='exect-summary-main-1'>
                    <h2>Digital</h2>
                </div>
                <div className='exect-summary-main-2'>
                    <ExecutiveSummaryVizContainerWithChartsAndNumbers />
                    <div className='executive-summary-main-container-partition'></div>
                    <ExecutiveSummaryVizContainerWithChartsAndNumbers />
                </div>

            </div>
        </div>
    )
}

export default ILTTwentySummary;