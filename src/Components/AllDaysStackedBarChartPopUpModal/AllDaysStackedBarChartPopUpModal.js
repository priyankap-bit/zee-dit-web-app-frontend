import { useState } from 'react';
import { useEffect } from 'react';
import StackedBarChart from '../Charts/StackedBarChart/StackedBarChart';
import './AllDaysStackedBarChartPopUpModal.css';
import StackedBarChartForAllDays from './StackedBarChartForAllDays/StackedBarChartForAllDays';

const AllDaysStackedBarChartPopUpModal = (props) => {

    const { data = [1, 25, 16, 70, 10, 11, 56, 89, 78, 45, 32, 14, 25, 36, 74, 52, 63, 49, 23, 37] } = props;

    const [popUpDimensions, setPopUpDimensions] = useState({
        width: null,
        height: null,
    });

    const { className = "all-days-stkd-bar-chart-pop-up-mdl-cnt-invsbl" } = props;

    useEffect(() => {
        let elem = document.getElementById('all-days-stkd-bar-chart-pop-up-mdl');
        console.log(elem.clientHeight, elem.clientWidth);
        // let resize = new ResizeObserver(() => { console.log('called') });
        // resize.observe(elem);
        // console.log(resize.observe(elem));

        setPopUpDimensions({
            width: elem.clientWidth,
            height: elem.clientHeight,
        })

    }, [])

    return (
        <div className={className} id='all-days-stkd-bar-chart-pop-up-mdl-cnt'>
            <div className='all-days-stkd-bar-chart-pop-up-mdl-vsbl' id='all-days-stkd-bar-chart-pop-up-mdl'>
                <div className='all-days-stkd-bar-chart-pop-up-mdl-vsbl-info-cont'>
                    <p className='all-days-stkd-bar-chart-pop-up-mdl-vsbl-title'>Digital</p>
                    <div className='all-days-stkd-bar-chart-pop-up-mdl-legends'>
                        <ul className="indicators">
                            <li className="viewership-performance-indicator">--- Avg.</li>
                            <li
                                className="viewership-performance-indicator"
                            >
                                <label className="indicator-match1"></label>Match 1
                            </li>
                            <li
                                className="viewership-performance-indicator"
                            >
                                <label className="indicator-match2 pr-0"></label>Match 2
                            </li>
                            <li
                                className="viewership-performance-indicator-close"
                                onClick={() => {
                                    let div = document.getElementById('all-days-stkd-bar-chart-pop-up-mdl-cnt');
                                    div.classList.remove('all-days-stkd-bar-chart-pop-up-mdl-cnt-vsbl');
                                    div.classList.add('all-days-stkd-bar-chart-pop-up-mdl-cnt-invsbl');
                                }}

                            >
                                <svg color="neutral.white" width="24px" height="24px" viewBox="0 0 1024 1024" className="close-icon">
                                    <path d="M512 452.267l226.133-226.133c17.067-17.067 42.667-17.067 59.733 0s17.067 42.667 0 59.733l-226.133 226.133 226.133 226.133c17.067 17.067 17.067 42.667 0 59.733s-42.667 17.067-59.733 0l-226.133-226.133-226.133 226.133c-17.067 17.067-42.667 17.067-59.733 0s-17.067-42.667 0-59.733l226.133-226.133-226.133-226.133c-17.067-17.067-17.067-42.667 0-59.733s42.667-17.067 59.733 0l226.133 226.133z" fill="currentColor" style={{ fill: "currentcolor" }}>
                                    </path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <StackedBarChartForAllDays
                    dimensions={popUpDimensions}
                    data={data}
                />
                {/* {console.log(elem.clientWidth, elem.clientHeight)} */}
            </div>
        </div>
    );

}

export default AllDaysStackedBarChartPopUpModal;