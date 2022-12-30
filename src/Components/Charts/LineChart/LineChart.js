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

const LineChart = (props) => {
    const [LineData] = useState(
        [
            {
                name: 'Jan',
                value: 16
            },
            {
                name: 'Feb',
                value: 32
            },
            {
                name: 'Mar',
                value: 7
            },
            {
                name: 'Apr',
                value: 45
            },
            {
                name: 'May',
                value: 25
            },
            // 16, 32, 7, 45, 25
        ]
    );

    const svgRef = useRef();

    useEffect(() => {
        // setting up svg
        const w = 300;
        const h = 60;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
        // .style('background', 'white')
        // .style('border-radius', '9px')
        // .style('margin-top', '50')
        // .style('box-shadow', '0px 0px 14px -2px #cfd5ff');

        //setting scaling
        // const xScale = d3.scaleLinear()
        //     .domain([0, LineData.length - 1])
        //     .range([0, w]);
        // const yScale = d3.scaleLinear()
        //     .domain([0, h])
        //     .range([h, 0]);
        // const generateScaledLine = d3.line()
        //     .x((d, i) => xScale(i))
        //     .y(yScale)

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.name))
            .rangeRound([0, w])
        // .padding(0.2)

        const yScale = d3.scaleLinear()
            .domain(d3.extent(data, d => d.value))
            .range([h, 0]);

        const generateScaledLine = d3.line()
            .x(d => xScale(d.name))
            .y(d => yScale(d.value));


        // .curve(d3.curveCardinal);
        //setting axes
        //setting up data for svg 
        svg.selectAll('.line')
            .data([LineData])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', '#945ED2')
            .attr('stroke-width', '1px');
        // .attr('fill', '#945EE5')
        // // .attr('opacity', '0.2')
        // .attr('stroke', '#945ED2')
        // // .attr('opacity', '1')
        // .attr('stroke-width', '2px');
    }, [LineData]);

    return (
        <div className='areachart-container'>
            <svg ref={svgRef}></svg>
        </div>
    )

}

export default LineChart;