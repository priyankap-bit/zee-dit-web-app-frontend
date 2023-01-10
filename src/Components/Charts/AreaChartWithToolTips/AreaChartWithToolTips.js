import { useEffect, useState, useRef } from 'react';

import * as d3 from 'd3v4';
import * as d3v2 from "d3";

import './AreaChartWithToolTips.css';
import areaChartWithToolTipsData from './data';

const AreaChartWithToolTips = (props) => {

    const svgRef = useRef();

    const [data, setData] = useState(areaChartWithToolTipsData);

    let preParedData = data.map(d => {
        // let dateParser = d3.timeParse("%d/%m/%Y");
        return {
            date: new Date(d.date),
            population: d.population
        }
    })

    useEffect(() => {

        setData(preParedData);

        console.log(data);

        const width = 100, height = 500;

        const margin = { top: 40, right: 20, bottom: 20, left: 40 };

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);

        const xExtent = d3.extent(data, d => d.date);
        const xScale = d3.scaleTime()
            .domain(xExtent)
            .range([margin.left, width - margin.right]);

        const yMax = d3.max(data, d => d.population);
        const yMin = 0;
        const yScale = d3.scaleLinear()
            .domain([yMin, yMax])
            .range([height - margin.bottom, margin.top]);

        const area = d3.area()
            .x(d => xScale(d.date))
            .y1(d => yScale(d.population))
            .y0(yScale(0));

        svg.append('path')
            .attr('d', area(data))
            .attr('stroke', '#147F90')
            .attr('stroke-width', '2px')
            .attr('fill', '#A6E8F2');

        const xAxis = d3.axisBottom()
            .scale(xScale);
        const xAxisTranslate = height - margin.bottom;

    }, []);

    return (
        <div className='area-chart-with-tooltips-container'>
            <div>
                <svg ref={svgRef}></svg>
                {/* <g className="tooltip-area-area-chart">
                    <text className="tooltip-area__text-area-chart"></text>
                </g> */}
            </div>
        </div>
    )
}

export default AreaChartWithToolTips;