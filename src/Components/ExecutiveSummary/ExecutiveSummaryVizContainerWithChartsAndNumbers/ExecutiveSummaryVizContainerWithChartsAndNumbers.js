import AreaChart from '../../Charts/AreaChart/AreaChart';
import StackedBarChart from '../../Charts/StackedBarChart/StackedBarChart';
import './ExecutiveSummaryVizContainerWithChartsAndNumbers.css';

const ExecutiveSummaryVizContainerWithChartsAndNumbers = (props) => {

    return (
        <div className='excutive-summary'>
            {/* <div>
                <h1>Digital</h1>
            </div> */}
            
                <div className='main-excutive-summary'>
                    <div className='digital-viewers'>
                      <div class="viewer-numbers">
                        <div className='exact-summary-viz-number'>
                            <p className='exact-summary-viz-number-entity'>Viewers</p>
                            <h2 className='exact-summary-viz-number-value'>15.632 M</h2>
                         </div>
                        <div className='exact-summary-viz-average'>
                            <p className='exact-summary-viz-number-entity'>Last 7days avg.</p>
                            <h4 className='exact-summary-viz-number-value'>1.2 M</h4>
                            <p className='exact-summary-viz-number-info'>
                                2%
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.64645 0.443632C3.84171 0.24837 4.15829 0.24837 4.35355 0.443632L7.53553 3.62561C7.7308 3.82087 7.7308 4.13746 7.53553 4.33272C7.34027 4.52798 7.02369 4.52798 6.82843 4.33272L4 1.50429L1.17157 4.33272C0.976311 4.52798 0.659729 4.52798 0.464467 4.33272C0.269204 4.13746 0.269204 3.82087 0.464467 3.62561L3.64645 0.443632ZM3.5 8.00098L3.5 0.797185L4.5 0.797185L4.5 8.00098L3.5 8.00098Z" fill="#00C48C" />
                                </svg>
                                from previous
                            </p>
                         </div>
                      </div>
                      <div className='exact-summary-viz-areachart-container'>
                        <AreaChart />
                       </div>
                       <div className='exact-summary-viz-updateinfo-container'>
                        <p>Updated as on 13/01/23 Next update expected by 14/01/23</p>
                       </div>
                    </div>
                    <div  className='digital-viewers-stackbarchart'>
                        <div className='exact-summary-viz-container-right'>
                        <StackedBarChart />
                        </div>
                    </div>
                    <div className='digital-watchtime'>
                    <div class="viewer-numbers">
                        <div className='exact-summary-viz-number'>
                            <p className='exact-summary-viz-number-entity'>Viewers</p>
                            <h2 className='exact-summary-viz-number-value'>15.632 M</h2>
                         </div>
                        <div className='exact-summary-viz-average'>
                            <p className='exact-summary-viz-number-entity'>Last 7days avg.</p>
                            <h4 className='exact-summary-viz-number-value'>1.2 M</h4>
                            <p className='exact-summary-viz-number-info'>
                                2%
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.64645 0.443632C3.84171 0.24837 4.15829 0.24837 4.35355 0.443632L7.53553 3.62561C7.7308 3.82087 7.7308 4.13746 7.53553 4.33272C7.34027 4.52798 7.02369 4.52798 6.82843 4.33272L4 1.50429L1.17157 4.33272C0.976311 4.52798 0.659729 4.52798 0.464467 4.33272C0.269204 4.13746 0.269204 3.82087 0.464467 3.62561L3.64645 0.443632ZM3.5 8.00098L3.5 0.797185L4.5 0.797185L4.5 8.00098L3.5 8.00098Z" fill="#00C48C" />
                                </svg>
                                from previous
                            </p>
                         </div>
                      </div>
                      <div className='exact-summary-viz-areachart-container'>
                        <AreaChart />
                       </div>
                       <div className='exact-summary-viz-updateinfo-container'>
                        <p>Updated as on 13/01/23 Next update expected by 14/01/23</p>
                       </div>
                    </div>
                    <div className='digital-watchtime-stackedchart'>
                        <div className='exact-summary-viz-container-right'>
                        <StackedBarChart />
                        </div>
                    </div>
                </div>
                   

        </div>
    )
}

export default ExecutiveSummaryVizContainerWithChartsAndNumbers;