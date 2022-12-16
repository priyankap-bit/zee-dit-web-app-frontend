import { useState } from 'react';
import RealTimeMatchUpdate from '../../RealTimeMatchUpdate/RealTimeMatchUpdate';
import './ViewershipPerformanceTab.css';

const ViewershipPerformanceTab = (props) => {

    const [activeTab, setActiveTab] = useState('realtimematchupdate');

    const handleOnNavigationTabClick = (tab, event) => {
        tab === 'realtimematchupdate' ? setActiveTab('realtimematchupdate') : setActiveTab('executivesummary');
    }

    return (
        <div className='viewership-performance-tab-container'>
            <ul className='viewership-navigationtab-ul'>
                <li
                    className={activeTab === 'executivesummary' ? 'viewership-navigation-tab-active' : 'viewership-navigation-tab-inactive'}
                    onClick={() => handleOnNavigationTabClick('executivesummary')}
                >
                    Executive Summary
                </li>
                <li
                    className={activeTab === 'realtimematchupdate' ? 'viewership-navigation-tab-active' : 'viewership-navigation-tab-inactive'}
                    onClick={() => handleOnNavigationTabClick('realtimematchupdate')}
                >
                    Real - time Match Update
                </li>
            </ul>

            <div className='viewership-preformance-summary'>
                {
                    activeTab === 'realtimematchupdate' ? <RealTimeMatchUpdate /> : <p>Executive Summary</p>
                }
            </div>

        </div>
    )

}

export default ViewershipPerformanceTab;