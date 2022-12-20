import { useState } from 'react';
import './ILTTwentyTabsForNavigation.css';
import ViewershipPerformanceTab from './ViewershipPerformanceTab/ViewershipPerformanceTab';
import SocialListeningTab from './SocialListeningTab/SocialListeningTab';

const ILTTwentyTabsForNavigation = (props) => {

    const [activeTab, setActiveTab] = useState('viewershipPerformance');

    const { selectedFilterDate } = props;

    const handleOnNavigationTabClick = (tab, event) => {
        tab === 'viewershipPerformance' ? setActiveTab('viewershipPerformance') : setActiveTab('socialListing');
    }

    return (
        <div className='ilttwenty-navigation-tabs-container'>
            <ul className='navigationtab-ul'>
                <li
                    className={activeTab === 'viewershipPerformance' ? 'navigation-tab-active' : 'navigation-tab-inactive'}
                    onClick={() => handleOnNavigationTabClick('viewershipPerformance')}
                >
                    Viewership Performance
                </li>
                <li
                    className={activeTab === 'socialListing' ? 'navigation-tab-active' : 'navigation-tab-inactive'}
                    onClick={() => handleOnNavigationTabClick('socialListing')}
                >
                    Social Listening
                </li>
            </ul>
            <div className='ilttwenty-navigation-tabs-data'>
                {
                    activeTab === 'viewershipPerformance' ?
                        <ViewershipPerformanceTab selectedFilterDate={selectedFilterDate} /> :
                        <SocialListeningTab selectedFilterDate={selectedFilterDate} />
                }
            </div>
        </div>
    )
}

export default ILTTwentyTabsForNavigation;