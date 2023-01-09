import React, { useState } from "react";
import './ExecutiveSummaryTab.css'
import ILTTwentrySummaryHeader from "../ILTTwentrySummaryHeader/ILTTwentrySummaryHeader";
import ExecutiveSummaryContent from "./ExecutiveSummaryContent/ExecutiveSummaryContent";

const ExecutiveSummaryTab = () => {
    const [activeTab, setActiveTab] = useState(null);

    return (
        <div>
            <div>
                <ILTTwentrySummaryHeader header="Executive Summary" />
            </div>
            <div className="executive-summary-tabs">
                <button className="executive-summary-tab">Consumer</button>
                <button className={activeTab === 'content' ? ('executive-summary-active-tab') : ("executive-summary-tab")} onClick={() => setActiveTab('content')}>Content</button>
                <button className="executive-summary-tab">Customer</button>
                <button className="executive-summary-tab">Product</button>
            </div>
            {activeTab === 'content' && <ExecutiveSummaryContent />}
        </div>
    )
}

export default ExecutiveSummaryTab;