import React from "react";
import "./ExecutiveSummaryContent.css"
import { useState } from "react";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
// import TreeChart from "../../Charts/TreeChart/Treechart";
import ExecutiveSummaryContentOtt from "./ExecutiveSummaryContentOtt";

// import LinearBarchart from "../../Charts/LinearBarchart/LinearBarchart";

const ExecutiveSummaryContent = () => {
    const [activeTab, setActiveTab] = useState('linear');

    return (
        <div>
            <div className="executive-summary-content-tabs">
                <div onClick={() => setActiveTab('linear')} className={activeTab === 'linear' ? ("executive-summary-content-active-tab") : ("executive-summary-content-tab")}>Linear</div>
                <div onClick={() => setActiveTab('ott')} className={activeTab === 'ott' ? ("executive-summary-content-active-tab") : ("executive-summary-content-tab")}>OTT</div>
            </div>

            <div>
                {/* {activeTab === 'linear' &&  <LinearBarchart/> } */}
                {/* {activeTab === 'linear' && <TreeChart /> } */}

            </div>
        </div>
    )
}

export default ExecutiveSummaryContent;