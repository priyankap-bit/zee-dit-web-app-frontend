import React from "react";
import './ExecutiveSummaryContentLinear.css'
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";

const ExecutiveSummaryContentLinear = () => {
    return (
        <div>
        <div>
            <button className="executive-summary-content-linear">All Content</button>
            <button className="executive-summary-content-linear">Top 10</button>
            <button className="executive-summary-content-linear">Bottom 10</button>
        </div>
        <div>
            <BubbleChart />
        </div>
        </div>
    )
}

export default ExecutiveSummaryContentLinear;