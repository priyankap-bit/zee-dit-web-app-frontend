import React, { useState } from "react";
import './ExecutiveSummaryTab.css'
import ILTTwentrySummaryHeader from "../ILTTwentrySummaryHeader/ILTTwentrySummaryHeader";
import ExecutiveSummaryContent from "./ExecutiveSummaryContent/ExecutiveSummaryContent";
import ExecutiveSummaryProduct from "./ExecutiveSummaryProduct/ExecutiveSummaryProduct";


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
                <button className={activeTab === 'product' ? ('executive-summary-active-tab') : ("executive-summary-tab")} onClick={() => setActiveTab('product')}>Product</button>
            </div>
            {activeTab === 'content' && <ExecutiveSummaryContent />}
            {activeTab === 'product' && <ExecutiveSummaryProduct />}
        </div>
    )
}

export default ExecutiveSummaryTab;