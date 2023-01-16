import { useEffect, useState, useRef } from 'react';

import * as d3 from 'd3v4';

import './LineChartWithToolTip.css';
import lineChartWithToolTipsData from './data';

const LineChartWithToolTip = (props) => {

    const svgRef = useRef();

    const [data, setData] = useState(lineChartWithToolTipsData);

    // const { isViewers = true } = props;

    useEffect(() => {


        const width = 330, height = 150;

        // const { width, height } = svgRef.current.getBoundingClientRect();

        const margin = { top: 10, right: 20, bottom: 30, left: 40 };

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);
        // .attr("viewBox", `0 0 70 300`)

        const xExtent = d3.extent(data, d => d.date);

        const xScale = d3.scaleTime()
            .domain(xExtent)
            .range([margin.left, width - margin.right]);

        const yMax = d3.max(data, d => d.population);
        const yMin = 0;
        const yScale = d3.scaleLinear()
            .domain([yMin, yMax])
            .range([height - margin.bottom, margin.top]);

        // const area = d3.area()
        //     .x(d => xScale(d.date))
        //     .y1(d => yScale(d.population))
        //     .y0(yScale(0));

        // svg.append('path')
        //     .attr('d', area(data))
        //     .attr('stroke', 'rgb(148, 94, 210)')
        //     .attr('stroke-width', '1px')
        //     .attr('fill', 'rgba(148, 94, 210, 0.1)');

        const lineGenerator = d3
            .line()
            .x((d) => xScale(d.date))
            .y((d) => yScale(d.population));
        //.curve(d3.curveBasis);

        const line = svg
            .append("path")
            .attr("d", lineGenerator(data))
            .attr("fill", "none")
            .attr("stroke", "rgb(148, 94, 210)")
            .attr("stroke-width", 1);

        let x2 = d3.scaleOrdinal()
            .domain(data.map(d => d.key))
            .range([margin.left, width - margin.right]);

        const averageLine = d3.line()
            .x(function (d, i) {
                return x2(d.date) + i;
            })
            .y(function (d, i) { return yScale(37584000); });

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("stroke-width", "1")
            .attr("d", averageLine);

        // console.log(data);

        const xAxis = d3.axisBottom()
            .scale(xScale)
            .tickSize(-height);

        const xAxisTranslate = height - margin.bottom;

        svg.append('g')
            .attr('transform', `translate(0, ${xAxisTranslate})`)
            .call(xAxis)
            .selectAll("text")
            .attr("class", "line-chart-with-tool-tips-ticks");

        const yAxis = d3.axisLeft()
            .scale(yScale)
            .tickSize(0)
            .tickValues([0, 70000]);

        svg.append('g')
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(yAxis)
            .selectAll("text")
            .attr("class", "line-chart-with-tool-tips-ticks");

        svg
            .selectAll(".domain")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".1")
            .attr("stroke-dasharray", "2");

        svg
            .selectAll(".tick")
            .select("line")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", "1")
            .attr("stroke-dasharray", "2");

        svg
            .selectAll(".tick")
            .select("text")
            .attr("fill", "#D8D8D8");
        // .attr("opacity", "1");

        svg.append('line').classed('hoverLine', true)
        svg.append('circle').classed('hoverPoint', true);
        // svg.append("text").classed('hoverText', true);

        svg.append('rect')
            .attr('fill', 'transparent')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', width)
            .attr('height', height);

        const tooltip = d3.select(".line-chart-with-tooltips-container")
            .append("div")
            .style('visibility', 'hidden')
            .classed('hoverText', true);

        tooltip.selectAll("*").remove();

        svg.on('mouseover', mouseOver);
        svg.on('mousemove', mouseMove);
        svg.on('mouseout', mouseOut);

        function mouseOver(event) {
            svg.selectAll('.hoverLine')
                .style('visibility', 'visible');

            svg.selectAll('.hoverPoint')
                .style('visibility', 'visible');

            // svg.selectAll('.hoverText')
            //     .style('visibility', 'visible');

            tooltip
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
            const mousePopulation = data[xIndex].population;

            // svg.selectAll('.hoverLine')
            //     .attr('x1', xScale(mouseDateSnap))
            //     .attr('y1', margin.top)
            //     .attr('x2', xScale(mouseDateSnap))
            //     .attr('y2', height - margin.bottom)
            //     .attr('stroke', 'rgb(148, 94, 210)')
            //     .attr('fill', 'rgb(148, 94, 210)');

            svg.selectAll('.hoverPoint')
                .attr('cx', xScale(mouseDateSnap))
                .attr('cy', yScale(mousePopulation))
                .attr('r', '5')
                .attr('fill', 'rgb(148, 94, 210)');

            const isLessThanHalf = xIndex > data.length / 2;
            const hoverTextX = isLessThanHalf ? '-0.75em' : '0.75em';
            const hoverTextAnchor = isLessThanHalf ? 'end' : 'start';

            // svg.selectAll('.hoverText')
            //     .attr('x', xScale(mouseDateSnap))
            //     .attr('y', yScale(mousePopulation))
            //     .attr('dx', hoverTextX)
            //     .attr('dy', '1.25em')
            //     .style('text-anchor', hoverTextAnchor)
            //     .text(`${d3.format('.5s')(mousePopulation)} on ${d3.timeFormat("%d/%m/%Y")(mouseDateSnap)}`)

            tooltip
                .html(`<p>Date: ${d3.timeFormat("%d/%m/%Y")(mouseDateSnap)}</p><p>${mousePopulation}</p>`)
                // .style("left", (d3.mouse(this)[0] - 20) + "px") 
                // .style("top", (d3.mouse(this)[1] + 280) + "px");
                .style("left", d3.event.pageX + 20 + "px")
                .style("top", d3.event.pageY + 15 + "px");
        }

        function mouseOut(event) {
            svg.selectAll('.hoverLine')
                .style('visibility', 'hidden');

            svg.selectAll('.hoverPoint')
                .style('visibility', 'hidden');

            // svg.selectAll('.hoverText')
            //     .style('visibility', 'hidden');

            tooltip
                .style('visibility', 'hidden');
        }

    }, []);

    return (
        <div className='line-chart-with-tooltips-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default LineChartWithToolTip;