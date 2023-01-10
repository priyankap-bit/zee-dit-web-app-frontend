import { useState, useEffect } from 'react';

// import * as d3 from "d3v4";
import * as d3 from "d3";

import './AreaChart.css';
import { useRef } from 'react';
import areaChartData from './data';

const AreaChart = (props) => {
    // const { areaChartData, yAxisToolTipDifference = 300, xAxisToolTipDifference = 0 } = props
    // console.log('areaChartData', areaChartData);
    // var LineData = [];
    // LineData.unshift(0)
    // areaChartData && areaChartData.forEach(element => {
    //     if (element !== null) {
    //         LineData.push(element)
    //     }

    // });

    // console.log(areaChartData);

    // const LineData = useState([0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 0]);

    const { LineData = [0, 111100, 120200, 203700, 333345, 422500, 550000, 670008, 750150] } = props;

    const svgRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        // setting up svg

        if (LineData.length > 0) {
            // console.log(LineData);
            LineData.push(0);
            const w = 330;
            const h = 60;
            const svg = d3.select(svgRef.current)
                .attr('width', w)
                .attr('height', h);

            const everything = svg.selectAll("*");
            everything.remove();

            const xScale = d3.scaleLinear()
                .domain([0, LineData.length - 1])
                .range([0, w]);
            const yScale = d3.scaleLinear()
                .domain([0, d3.max(LineData, data => data)])
                .range([h, 0]);
            const generateScaledLine = d3.line()
                .x((d, i) => xScale(i))
                .y(yScale)
                .curve(d3.curveCardinal);

            //setting axes
            //setting up data for svg 
            svg.selectAll('.line')
                .data([LineData])
                .join('path')
                .attr('d', d => generateScaledLine(d))
                .attr('fill', 'rgb(148, 94, 210, 0.1)')
                .attr('stroke', '#945ED2')
                .attr('stroke-width', '1px')

            var Tooltip =
                // svg
                d3.select(wrapperRef.current)
                    .append("div")
                    .style("opacity", 0)
                    .attr("class", "tooltip-area-chart");

            Tooltip.selectAll("*").remove();

            var mouseover = function (d) {
                Tooltip
                    .style("opacity", 1)
            }

            const tootTipHtml = (event) => `<div><p>ABC</p></div>`;

            var mousemove = function (event, d) {
                console.log('event on mouse move', event);
                Tooltip
                    .text("Date: " + event.target.__data__.data.key + " " + "Match 1: " + event.target.__data__.data.matchOne + "\n" + "Match 2: " + event.target.__data__.data.matchTwo)
                    // .html(tootTipHtml(event))
                    .style("top", event.pageY + "px")
                    .style("left", event.pageX + "px")

                // const mouse = d3.pointer(d3.eve)
            }
            var mouseleave = function (d) {
                Tooltip
                    .style("opacity", 0)
                d3.select(this)
                    .style("stroke", "none")
                    .style("opacity", 1)
            }

            svg
                .on("mousemove", mousemove)
                .on("mouseleave", mouseleave)
                .on("mouseover", mouseover)
        }

        // const height = 60, width = 330;

        // const svg = d3.select(svgRef.current)
        //     .attr('width', width)
        //     .attr('height', height);

        // const xScale = d3.scaleTime()
        //     .domain(d3.extent(areaChartData, d => d.date))
        //     .range([0, width]);

        // const yScale = d3.scaleLinear()
        //     .domain([0, d3.max(areaChartData, d => d.population)])
        //     .range([height, 0]);


    }, [LineData]);

    return (
        <div className='areachart-container' ref={wrapperRef.current}>
            <div>
                <svg ref={svgRef}></svg>
                <g className="tooltip-area-area-chart">
                    {/* <text className="tooltip-area__text-area-chart">ABC</text> */}
                </g>
            </div>
        </div>
    )
    // window.addEventListener('resize', LineData);
}

export default AreaChart;