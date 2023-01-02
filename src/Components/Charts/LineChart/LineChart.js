import { useState, useRef, useEffect } from 'react';
// import {
//     select,
//     scaleLinear,
//     line,
//     axisBottom,
//     scaleBand,
//     extent,
// } from 'd3';

import * as d3 from "d3"

import './LineChart.css';
import { data } from '../StackedBarChart/data';
import { axisBottom, extent, line, scaleBand, scaleLinear, select } from 'd3';

const LineChart = (props) => {
    const [LineData] = useState([0, 10, 95, 120, 25, 30, 40, 50, 120, 85, 25, 20, 75]);

    const [data] = useState(
        [
            { name: 'Jan', value: 30 },
            { name: 'Feb', value: 10 },
            { name: 'Mar', value: 50 },
            { name: 'Apr', value: 20 },
            { name: 'May', value: 80 },
            { name: 'Jun', value: 30 },
            { name: 'July', value: 0 },
            { name: 'Aug', value: 20 },
            { name: 'Sep', value: 100 },
            { name: 'Oct', value: 55 },
            { name: 'Nov', value: 60 },
            { name: 'Dec', value: 80 },
        ],
    )

    const svgRef = useRef();

    // useEffect(() => {
    //     // setting up svg
    //     const w = 300;
    //     const h = 150;
    //     const svg = d3.select(svgRef.current)
    //         .attr('width', w)
    //         .attr('height', h)
    //     // .style('background', 'white')
    //     // .style('border-radius', '9px')
    //     // .style('margin-top', '50')
    //     // .style('box-shadow', '0px 0px 14px -2px #cfd5ff');
    //     //setting scaling
    //     const xScale = d3.scaleLinear()
    //         .domain([0, LineData.length - 1])
    //         .range([0, w]);
    //     const yScale = d3.scaleLinear()
    //         .domain([0, h])
    //         .range([h, 0]);
    //     const generateScaledLine = d3.line()
    //         .x((d, i) => xScale(i))
    //         .y(yScale)
    //     // .curve(d3.curveCardinal);
    //     //setting axes
    //     //setting up data for svg 
    //     svg.selectAll('.line')
    //         .data([LineData])
    //         .join('path')
    //         .attr('d', d => generateScaledLine(d))
    //         .attr('fill', 'none')
    //         .attr('stroke', '#945ED2')
    //         .attr('stroke-width', '1px');
    //     // .attr('fill', '#945EE5')
    //     // // .attr('opacity', '0.2')
    //     // .attr('stroke', '#945ED2')
    //     // // .attr('opacity', '1')
    //     // .attr('stroke-width', '2px');
    // }, [LineData]);

    useEffect(() => {

        const width = 300, height = 150;

        const xScale = scaleBand()
            .domain(data.map(d => d.name))
            .rangeRound([0, width])
            .padding(0.1);

        const yScale = scaleLinear()
            .domain(extent(data, d => d.value))
            .range([height, 0])
            .nice();

        const xAxis = axisBottom(xScale)
            .tickSize(-150);

        const lineGenerator = line()
            .x(d => xScale(d.name))
            .y(d => yScale(d.value))
        // .curve(curveMonotoneX);

        const svg = select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(xAxis)
            .selectAll('text')
            .attr("class", "line-chart-ticks");

        // Style x-axes
        svg
            .select(".domain")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".6")
            .attr("stroke-dasharray", "2");

        svg
            .selectAll(".tick")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".1")
            .attr("stroke-dasharray", "2");

        svg.append("g")
            .call(d3.axisLeft(yScale));

        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d', d => lineGenerator(d))
            .attr('fill', 'none')
            .attr('stroke', '#945ED2')
            .attr('stroke-width', '1px');
    }, []);

    return (
        <div className='areachart-container'>
            <svg ref={svgRef}></svg>
        </div>
    )

}

export default LineChart;