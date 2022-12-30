import { useState } from 'react';
import ExecutiveSummary from '../../ExecutiveSummary/ExecutiveSummary';
import RealTimeMatchUpdate from '../../RealTimeMatchUpdate/RealTimeMatchUpdate';
import './ViewershipPerformanceTab.css';

const ViewershipPerformanceTab = (props) => {

    const [activeTab, setActiveTab] = useState('executivesummary');

    const { selectedFilterDate } = props;

    const handleOnNavigationTabClick = (tab, event) => {
        tab === 'realtimematchupdate' ? setActiveTab('realtimematchupdate') : setActiveTab('executivesummary');
    }

    // const handleOnExecutiveSumSelectChange = (event) => { }

    return (
        <div className='viewership-performance-tab-container'>
            <div className='viewership-navigationtab-container'>
                <div className='viewership-navigationtab-ul-div'>
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
                            Live Match Updates
                        </li>
                    </ul>
                </div>
                {/* <div className='viewership-navigationtab-select-div'>
                    <select onChange={handleOnExecutiveSumSelectChange}>
                        <option value='market' selected>Market</option>
                        <option value='global'>Global</option>
                        <option value='india'>India</option>
                    </select>
                </div> */}
            </div>

            <div className='viewership-preformance-summary'>
                {
                    activeTab === 'realtimematchupdate' ?
                        <RealTimeMatchUpdate selectedFilterDate={selectedFilterDate} /> :
                        <ExecutiveSummary selectedFilterDate={selectedFilterDate} />
                }
            </div>

        </div>
    )

}

export default ViewershipPerformanceTab;