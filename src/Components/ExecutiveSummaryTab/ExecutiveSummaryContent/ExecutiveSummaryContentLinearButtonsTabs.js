import React from "react";
import { useState } from "react";

const ExecutiveSummaryContentLinearButtonsTabs = (props) => {
    const [activeTab, setActiveTab] = useState('all-content')

    return (
        <div className="executive-summary-content-linear-tabs">
            <button className={activeTab === 'all-content' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                setActiveTab('all-content')
                props.TabValue('all-content')
            }}>All Content</button>
            <button className={activeTab === 'top-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => {
                setActiveTab('top-10')
                props.TabValue('top-10')
            }}>Top 10</button>
            <button className={activeTab === 'bottom-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear bdr-none")} onClick={() => {
                setActiveTab('bottom-10')
                props.TabValue('bottom-10')
            }}>Bottom 10</button>
        </div>
    )
}

export default ExecutiveSummaryContentLinearButtonsTabs;