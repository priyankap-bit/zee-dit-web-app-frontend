import React, { useEffect } from "react";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import * as d3 from 'd3';
import ExecutiveSummaryContentLinearContents from "./ExecutiveSummaryContentLinearContents";

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
        { id: "AspectRatioBanker", value: 500 },
        { id: "animate", value: 20 },
        { id: "Easing", value: 100 },
        { id: "FunctionSequence", value: 200 },
        { id: "interpolate", value: 300 },
    ]

    useEffect(() => {
        const defs = d3.select('bubble-img-svg').append('g')
    }, [])


    return (
        <div id="chart">
            <BubbleChart files={files} />
            <div className="executive-summary-content-linear-filter">
                <ExecutiveSummaryContentLinearContents />
            </div>

            {/* <svg className='bubble-img-svg' height={500} width={800}>
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
                        <image id='image-chart' height='500' width='500' preserveAspectRatio='none' xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="https://html.com/wp-content/uploads/very-large-flamingo.jpg"></image>
                    </pattern>
                </defs> 
                <circle cx='100' cy='100' r='40' fill='red'></circle>
                <circle cx='300' cy='100' r='40' fill='url(yellow)'></circle>
                <rect x='200' y='200' width='100' height='100' fill='url(https://themepack.me/i/c/749x467/media/g/2137/dark-galaxy-theme-jy8.jpg)'></rect>
                <circle cx='400' cy='100' r='50' fill='url(https://themepack.me/i/c/749x467/media/g/2137/dark-galaxy-theme-jy8.jpg)'></circle>
                <circle cx='500' cy='100' r='30' fill='url(https://themepack.me/i/c/749x467/media/g/2137/dark-galaxy-theme-jy8.jpg)'></circle>
            </svg> */}
        </div>
    )
}

export default ExecutiveSummaryContentOtt;