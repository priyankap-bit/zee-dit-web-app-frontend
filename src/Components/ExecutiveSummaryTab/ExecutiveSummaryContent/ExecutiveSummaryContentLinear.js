import React, { useState } from "react";
import './ExecutiveSummaryContentLinear.css'
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";

const ExecutiveSummaryContentLinear = () => {
    const [activeTab, setActiveTab] = useState('all-content')
    const files = [
        { id: "Mithai", value: 427.3 },
        { id: "Tere Bina Jiya Jaye Na", value: 400.65 },
        { id: "Bhagya Lakshmi", value: 491.58 },
        { id: "Kum Kum Bhagya", value: 437.68 },
        { id: "Kundli Bhagya", value: 589.70 },
        { id: "Meet", value: 439.94 },
        { id: "LinkDistance", value: 391 },
        { id: "MaxFlowMinCut", value: 391 },
        { id: "ShortestPaths", value: 437 },
        { id: " SpanningTree", value: 1000 },
        {id: "flare.analytics.optimization", value: 1},
        // {id: "flare.analytics.optimization.AspectRatioBanker", value: 7074},
        // {id: "flare.animate", value: null},
        // {id: "flare.animate.Easing", value: 17010},
        // {id: "flare.animate.FunctionSequence", value: 5842},
        // {id: "flare.animate.interpolate", value: null},
    ]

    if (activeTab === 'top-10') {

    }

    if (activeTab === 'bottom-10') {

    }

    return (
        <div>
            <div className="executive-summary-content-linear-tabs">
                <button className={activeTab === 'all-content' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => setActiveTab('all-content')}>All Content</button>
                <button className={activeTab === 'top-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => setActiveTab('top-10')}>Top 10</button>
                <button className={activeTab === 'bottom-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear bdr-none")} onClick={() => setActiveTab('bottom-10')}>Bottom 10</button>
            </div>
            <div>
                <BubbleChart files={files} />
            </div>
        </div>
    )
}

export default ExecutiveSummaryContentLinear;