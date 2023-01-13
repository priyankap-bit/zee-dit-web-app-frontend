import { useEffect, useState, useRef } from 'react';

import * as d3 from 'd3v4';

import './AreaChartWithToolTips.css';
import areaChartWithToolTipsData from './data';
import { useMediaQuery } from '@material-ui/core';

const AreaChartWithToolTips = (props) => {

    const svgRef = useRef();


    const width1366 = useMediaQuery('(max-width:1366px)');
    const myWidth = window.outerWidth
    console.log(myWidth);

    var width = 330, height = 70;

    console.log(width1366);
    if (width1366) {
        width = 250
        height = 50
        console.log('working');
    }

    const [data, setData] = useState(areaChartWithToolTipsData);

    useEffect(() => {
        // const { width, height } = svgRef.current.getBoundingClientRect();

        console.log('areaChartWithToolTipsData dimensions', width, height);

        // const margin = { top: 40, right: 20, bottom: 20, left: 40 };
        const margin = { top: 0, right: 0, bottom: 0, left: 0 };

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
            .attr('stroke', 'rgb(148, 94, 210)')
            .attr('stroke-width', '1px')
            .attr('fill', 'rgba(148, 94, 210, 0.1)');

        // console.log(data);

        // const xAxis = d3.axisBottom()
        //     .scale(xScale);
        // const xAxisTranslate = height - margin.bottom;

        // svg.append('g')
        //     .attr('transform', `translate(0, ${xAxisTranslate})`)
        //     .call(xAxis);

        // const yAxis = d3.axisLeft()
        //     .scale(yScale);

        // svg.append('g')
        //     .attr('transform', `translate(${margin.left}, 0)`)
        //     .call(yAxis);

        svg.append('line').classed('hoverLine', true)
        svg.append('circle').classed('hoverPoint', true);
        svg.append("text").classed('hoverText', true);

        svg.append('rect')
            .attr('fill', 'transparent')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', width)
            .attr('height', height);

        svg.on('mousemove', mouseMove);

        svg.on('mouseover', mouseOver);
        svg.on('mousemove', mouseMove);
        svg.on('mouseout', mouseOut);

        function mouseOver(event) {
            svg.selectAll('.hoverLine')
                .style('visibility', 'visible');

            svg.selectAll('.hoverPoint')
                .style('visibility', 'visible');

            svg.selectAll('.hoverText')
                .style('visibility', 'visible');
        }

        function mouseMove(event) {

            d3.event.preventDefault();

            const mouse = d3.mouse(d3.event.target);
            const [
                xCoord,
                // yCoord,
            ] = mouse;

            const mouseDate = xScale.invert(xCoord);
            const mouseDateSnap = d3.timeYear.floor(mouseDate);

            if (xScale(mouseDateSnap) < margin.left ||
                xScale(mouseDateSnap) > width - margin.right) {
                return;
            }

            const bisectDate = d3.bisector(d => d.date).right;
            const xIndex = bisectDate(data, mouseDateSnap, 1);
            const mousePopulation = data[xIndex - 1].population;

            svg.selectAll('.hoverLine')
                .attr('x1', xScale(mouseDateSnap))
                .attr('y1', margin.top)
                .attr('x2', xScale(mouseDateSnap))
                .attr('y2', height - margin.bottom)
                .attr('stroke', 'rgb(148, 94, 210)')
                .attr('fill', 'rgb(148, 94, 210)');

            svg.selectAll('.hoverPoint')
                .attr('cx', xScale(mouseDateSnap))
                .attr('cy', yScale(mousePopulation))
                .attr('r', '5')
                .attr('fill', 'rgb(148, 94, 210)');

            const isLessThanHalf = xIndex > data.length / 2;
            const hoverTextX = isLessThanHalf ? '-0.75em' : '0.75em';
            const hoverTextAnchor = isLessThanHalf ? 'end' : 'start';

            svg.selectAll('.hoverText')
                .attr('x', xScale(mouseDateSnap))
                .attr('y', yScale(mousePopulation))
                .attr('dx', hoverTextX)
                .attr('dy', '-1.25em')
                .style('text-anchor', hoverTextAnchor)
                .text(d3.format('.5s')(mousePopulation));
        }

        function mouseOut(event) {
            svg.selectAll('.hoverLine')
                .style('visibility', 'hidden');

            svg.selectAll('.hoverPoint')
                .style('visibility', 'hidden');

            svg.selectAll('.hoverText')
                .style('visibility', 'hidden');
        }

    }, [width,height]);

    return (
        <div className='area-chart-with-tooltips-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default AreaChartWithToolTips;