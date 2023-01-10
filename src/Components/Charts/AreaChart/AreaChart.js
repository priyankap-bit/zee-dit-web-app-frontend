import { useState, useEffect } from 'react';

import * as d3 from "d3v4";
// import * as d3 from "d3";

import './AreaChart.css';
import { useRef } from 'react';
import data from './data';

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

    // const areaChartData = [
    //     {
    //         date: "1900-01-01T00:00:00.000Z",
    //         population: 76094000
    //     },
    //     {
    //         date: "1901-01-01T00:00:00.000Z",
    //         population: 77584000
    //     },
    //     {
    //         date: "1902-01-01T00:00:00.000Z",
    //         population: 79163000
    //     },
    //     {
    //         date: "1903-01-01T00:00:00.000Z",
    //         population: 80632000
    //     },
    //     {
    //         date: "1904-01-01T00:00:00.000Z",
    //         population: 82166000
    //     },
    //     {
    //         date: "1905-01-01T00:00:00.000Z",
    //         population: 83822000
    //     },
    //     {
    //         date: "1906-01-01T00:00:00.000Z",
    //         population: 85450000
    //     },
    //     {
    //         date: "1907-01-01T00:00:00.000Z",
    //         population: 87008000
    //     },
    //     {
    //         date: "1908-01-01T00:00:00.000Z",
    //         population: 88710000
    //     },
    //     {
    //         date: "1909-01-01T00:00:00.000Z",
    //         population: 90490000
    //     },
    //     {
    //         date: "1910-01-01T00:00:00.000Z",
    //         population: 92407000
    //     },
    //     {
    //         date: "1911-01-01T00:00:00.000Z",
    //         population: 93863000
    //     },
    //     {
    //         date: "1912-01-01T00:00:00.000Z",
    //         population: 95335000
    //     },
    //     {
    //         date: "1913-01-01T00:00:00.000Z",
    //         population: 97225000
    //     },
    //     {
    //         date: "1914-01-01T00:00:00.000Z",
    //         population: 99111000
    //     },
    //     {
    //         date: "1915-01-01T00:00:00.000Z",
    //         population: 100546000
    //     },
    //     {
    //         date: "1916-01-01T00:00:00.000Z",
    //         population: 101961000
    //     },
    //     {
    //         date: "1917-01-01T00:00:00.000Z",
    //         population: 103268000
    //     },
    //     {
    //         date: "1918-01-01T00:00:00.000Z",
    //         population: 103208000
    //     },
    //     {
    //         date: "1919-01-01T00:00:00.000Z",
    //         population: 104514000
    //     },
    //     {
    //         date: "1920-01-01T00:00:00.000Z",
    //         population: 106461000
    //     },
    //     {
    //         date: "1921-01-01T00:00:00.000Z",
    //         population: 108538000
    //     },
    //     {
    //         date: "1922-01-01T00:00:00.000Z",
    //         population: 110049000
    //     },
    //     {
    //         date: "1923-01-01T00:00:00.000Z",
    //         population: 111947000
    //     },
    //     {
    //         date: "1924-01-01T00:00:00.000Z",
    //         population: 114109000
    //     },
    //     {
    //         date: "1925-01-01T00:00:00.000Z",
    //         population: 115829000
    //     },
    //     {
    //         date: "1926-01-01T00:00:00.000Z",
    //         population: 117397000
    //     },
    //     {
    //         date: "1927-01-01T00:00:00.000Z",
    //         population: 119035000
    //     },
    //     {
    //         date: "1928-01-01T00:00:00.000Z",
    //         population: 120509000
    //     },
    //     {
    //         date: "1929-01-01T00:00:00.000Z",
    //         population: 121767000
    //     },
    //     {
    //         date: "1930-01-01T00:00:00.000Z",
    //         population: 123076741
    //     },
    // ]

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
                console.log(event);
                Tooltip
                    // .text("Date: " + event.target.__data__.data.key + " " + "Match 1: " + event.target.__data__.data.matchOne + "\n" + "Match 2: " + event.target.__data__.data.matchTwo)
                    .html(tootTipHtml(event))
                    .style("top", event.pageY + "px")
                    .style("left", event.pageX + "px")
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

        // // console.log('data', data);

        // const xScale = d3.scaleTime()
        //     .domain(d3.extent(data, d => d.date))
        //     .range([0, width]);

        // const xAxis = d3.axisBottom()
        //     .scale(xScale);

        // // svg.append('g')
        // //     .attr('transform', `translate(0, ${height})`)
        // //     .call(xAxis);

        // const yScale = d3.scaleLinear()
        //     .domain([0, d3.max(data, d => d.population)])
        //     .range([height, 0]);

        // const area = d3.area()
        //     .x(d => xScale(d.date))
        //     .y1(d => yScale(d.population))
        //     .y0(yScale(0));

        // svg.append('path')
        //     .attr('d', area(data))
        //     .attr('stroke', 'rgb(148, 94, 210)')
        //     .attr('stroke-width', '1px')
        //     .attr('fill', 'rgba(148, 94, 210, 0.1)');

        // svg.append('line').classed('hoverLine', true)
        // svg.append('circle').classed('hoverPoint', true);
        // svg.append("text").classed('hoverText', true);

        // svg.append('rect')
        //     .attr('fill', 'transparent')
        //     .attr('x', 0)
        //     .attr('y', 0)
        //     .attr('width', width)
        //     .attr('height', height);

        // svg.on('mousemove', mouseMove);

        // function mouseMove(event) {
        //     d3.event.preventDefault();
        //     const mouse = d3.mouse(d3.event.target);
        //     const [
        //         xCoord,
        //         yCoord,
        //     ] = mouse;

        //     const mouseDate = xScale.invert(xCoord);
        //     const mouseDateSnap = d3.timeYear.floor(mouseDate);

        //     if (xScale(mouseDateSnap) < 0 ||
        //         xScale(mouseDateSnap) > width) {
        //         return;
        //     }

        //     const bisectDate = d3.bisector(d => d.date).right;
        //     const xIndex = bisectDate(data, mouseDateSnap, 1);

        //     // console.log('xIndex', xIndex);

        //     const mousePopulation = data[xIndex - 1].population;

        //     // svg.selectAll('.hoverLine')
        //     //     .attr('x1', xScale(mouseDateSnap))
        //     //     .attr('y1', 0)
        //     //     .attr('x2', xScale(mouseDateSnap))
        //     //     .attr('y2', height)
        //     //     .attr('stroke', '#147F90')
        //     //     .attr('fill', '#A6E8F2')
        //     //     ;

        //     // svg.selectAll('.hoverPoint')
        //     //     .attr('cx', xScale(mouseDateSnap))
        //     //     .attr('cy', yScale(mousePopulation))
        //     //     .attr('r', '7')
        //     //     .attr('fill', '#147F90')
        //     //     ;

        //     const isLessThanHalf = xIndex > data.length / 2;
        //     const hoverTextX = isLessThanHalf ? '-0.75em' : '0.75em';
        //     const hoverTextAnchor = isLessThanHalf ? 'end' : 'start';

        //     // svg.selectAll('.hoverText')
        //     //     .attr('x', xScale(mouseDateSnap))
        //     //     .attr('y', yScale(mousePopulation))
        //     //     .attr('dx', hoverTextX)
        //     //     .attr('dy', '-1.25em')
        //     //     .style('text-anchor', hoverTextAnchor)
        //     //     .text(d3.format('.5s')(mousePopulation));




    }, [LineData]);

    return (
        <div className='areachart-container' ref={wrapperRef.current}>
            <div>
                <svg ref={svgRef}></svg>
                {/* <g className="tooltip-area-area-chart">
                    <text className="tooltip-area__text-area-chart">ABC</text>
                </g> */}
            </div>
        </div>
    )
    // window.addEventListener('resize', LineData);
}

export default AreaChart;