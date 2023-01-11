import React, { useState } from "react";
import './ExecutiveSummaryContentLinear.css'
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";
import ExecutiveSummaryContentLinearContents from "./ExecutiveSummaryContentLinearContents";

const ExecutiveSummaryContentLinear = () => {
    const [activeTab, setActiveTab] = useState('all-content')

    let top10files = [];
    let count = 0;
    let bottom10files = [];

    const data = [
        { id: "Mithai", value: 427.3, img: 'https://themepack.me/i/c/749x467/media/g/2137/dark-galaxy-theme-jy8.jpg' },
        { id: "Tere Bina Jiya Jaye Na", value: 400.65, img: 'https://i.pinimg.com/736x/87/72/6d/87726d7ea80b5543672bb6f162a71034.jpg' },
        { id: "Bhagya Lakshmi", value: 491.58, img: 'https://themepack.me/i/c/749x467/media/g/2137/dark-galaxy-theme-jy8.jpg' },
        { id: "Kum Kum Bhagya", value: 437.68, img: 'https://i.pinimg.com/736x/87/72/6d/87726d7ea80b5543672bb6f162a71034.jpg' },
        { id: "Kundli Bhagya", value: 589.70 },
        { id: "Meet", value: 439.94 },
        { id: "LinkDistance", value: 391 },
        { id: "MaxFlowMinCut", value: 391 },
        { id: "ShortestPaths", value: 437 },
        { id: " SpanningTree", value: 1000 },
        { id: "flare.analytics.optimization", value: 1 },
        { id: "AspectRatioBanker", value: 500 },
        { id: "animate", value: 20 },
        { id: "Easing", value: 100 },
        { id: "FunctionSequence", value: 200 },
        { id: "interpolate", value: 300 },
        { id: "interpolate", value: 300 },
        { id: "interpolate", value: 300 },
    ]

    let sortedFiles = data.sort((r1, r2) => (r1.value > r2.value) ? 1 : (r1.value < r2.value) ? -1 : 0);

    for (let i = 0; i < sortedFiles.length; i++) {
        if (i < 10) {
            bottom10files.push(sortedFiles[i])
        }
    }
    for (let i = sortedFiles.length - 1; i > 0; i--) {
        count += 1;
        if (count <= 10) {
            top10files.push(sortedFiles[i])
        }
    }

    console.log(top10files);
    console.log('bottom10files', bottom10files);

    return (
        <div>
            <div className="executive-summary-content-linear-tabs">
                <button className={activeTab === 'all-content' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => setActiveTab('all-content')}>All Content</button>
                <button className={activeTab === 'top-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear")} onClick={() => setActiveTab('top-10')}>Top 10</button>
                <button className={activeTab === 'bottom-10' ? ("executive-summary-content-linear-actve-tab") : ("executive-summary-content-linear bdr-none")} onClick={() => setActiveTab('bottom-10')}>Bottom 10</button>
            </div>
            <div>
                {activeTab === 'all-content' &&
                    <div style={{
                        display: 'grid',
                        justifyItems: 'center'
                    }}>
                        <BubbleChart files={sortedFiles} />
                        <ExecutiveSummaryContentLinearContents />
                    </div>

                }
                {activeTab === 'top-10' && <BubbleChart files={top10files} />}
                {activeTab === 'bottom-10' && <BubbleChart files={bottom10files} />}
            </div>

        </div>
    )
}

export default ExecutiveSummaryContentLinear;