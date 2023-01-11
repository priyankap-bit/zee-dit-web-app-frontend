import React from "react";
import "./ExecutiveSummaryContent.css"
import { useState } from "react";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import ExecutiveSummaryContentLinear from "./ExecutiveSummaryContentLinear";
import ExecutiveSummaryContentOtt from "./ExecutiveSummaryContentOtt";
// import LinearBarchart from "../../Charts/BubbleChart/LinearBarchart/LinearBarchart"  

const ExecutiveSummaryContent = () => {
    const [activeTab, setActiveTab] = useState('linear');

    return (
        <div>
            <div className="executive-summary-content-tabs">
                <div onClick={() => setActiveTab('linear')} className={activeTab === 'linear' ? ("executive-summary-content-active-tab") : ("executive-summary-content-tab")}>Linear</div>
                <div onClick={() => setActiveTab('ott')} className={activeTab === 'ott' ? ("executive-summary-content-active-tab") : ("executive-summary-content-tab")}>OTT</div>
                <div onClick={() => setActiveTab('content-insights')} className={activeTab === 'content-insights' ? ("executive-summary-content-active-tab") : ("executive-summary-content-tab")}>Content Insights</div>
            </div>

            <div>
                {activeTab === 'linear' && <ExecutiveSummaryContentLinear />}
                {/* {activeTab === 'linear' && <LinearBarchart />} */}
                {activeTab === 'ott' && <ExecutiveSummaryContentOtt />}
            </div>
        </div>
    )
}

export default ExecutiveSummaryContent;