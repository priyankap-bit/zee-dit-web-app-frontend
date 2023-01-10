import React from "react";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";

const ExecutiveSummaryContentOtt = () => {

    const files = [
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
        {id: "AspectRatioBanker", value: 500},
        {id: "animate", value: 20},
        {id: "Easing", value: 100},
        {id: "FunctionSequence", value: 200},
        {id: "interpolate", value: 300},
    ]


    return (
        <div id="chart">
            <BubbleChart files={files} />
            <svg height={500} width={800}>
                <defs>
                    <marker id='arrw' viewBox="0 -5 10 10" refX='0' refY='0' markerWidth='12' markerHeight='12' orient='auto'>
                        <path d="M0,-5L10,0"></path>
                    </marker>
                    <linearGradient>
                        <stop offset='0%' stopColor="#F433FF" stopOpacity='1'></stop>
                        <stop offset='100%' stopColor="#3DFF33" stopOpacity='1'></stop>
                    </linearGradient>

                    <radialGradient id='circleGradient'>
                        <stop offset='0%' stopColor="#F433FF" stopOpacity='1'></stop>
                        <stop offset='100%' stopColor="#3DFF33" stopOpacity='1'></stop>
                    </radialGradient>

                    <linearGradient id='divergingGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor='#d73027' stopOpacity='1'></stop>
                        <stop offset='30%' stopColor='#ffffbf' stopOpacity='1'></stop>
                        <stop offset='70%' stopColor='#ffffbf' stopOpacity='1'></stop>
                        <stop offset='100%' stopColor='#1a9850' stopOpacity='1'></stop>
                    </linearGradient>

                    <pattern id='jon-snow' height='100%' width='100%' patternContentUnits='objectBoundingBox'>
                        <image height='1' width='1' preserveAspectRatio='none'  ></image>
                    </pattern>
                </defs>
            </svg>
        </div>
    )
}

export default ExecutiveSummaryContentOtt;