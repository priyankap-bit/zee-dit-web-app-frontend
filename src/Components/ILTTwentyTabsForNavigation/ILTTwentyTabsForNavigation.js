import './ILTTwentyTabsForNavigation.css';

const ILTTwentyTabsForNavigation = (props) => {

    // const { isNavigationTabActive, handleNavigationTabClick } = props;

    return (
        <div className='ilttwenty-navigation-tabs-container'>
            <div
                // className={isNavigationTabActive.viewershipPerformance ? 'navigation-tab-active' : 'navigation-tab-inactive'}
                className='navigation-tab-active'
            // onClick={handleNavigationTabClick('viewershipPerformance')}
            >
                <p>Viewership Performance</p>
            </div>
            <div
                // className={isNavigationTabActive.socialListing ? 'navigation-tab-active' : 'navigation-tab-inactive'}
                className='navigation-tab-inactive'
            // onClick={handleNavigationTabClick('socialListing')}
            >
                <p>Social Listening</p>
            </div>
        </div>
    )
}

export default ILTTwentyTabsForNavigation;