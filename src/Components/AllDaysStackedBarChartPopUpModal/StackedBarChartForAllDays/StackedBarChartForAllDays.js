import { useEffect, useRef } from "react";
import {
    select,
    scaleBand,
    axisBottom,
    axisLeft,
    stack,
    max,
    scaleLinear,
    stackOrderAscending,
    line,
    scaleOrdinal,
    axisTop,
    pointer,
} from "d3";

import useResizeObserver from "../../Charts/StackedBarChart/useResizeObserver";

import {
    data,
    keys, colors
} from "./data";

import './StackedBarChartForAllDays.css';

const StackedBarChartForAllDays = (props) => {

    const svgRef = useRef();
    const yAxisRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    // const { dimensions } = props;

    useEffect(() => {

        const svg = select(svgRef.current);
        const yAxisSvg = select(yAxisRef.current);

        const everything = svg.selectAll("*");
        everything.remove();
        // yAxisSvg.selectAll("*").remove();
        // const { width, height } =
        //     dimensions || wrapperRef.current.getBoundingClientRect();

        const { width, height } = wrapperRef.current.getBoundingClientRect();

        console.log(width, height);

        const stackGenerator = stack().keys(keys).order(stackOrderAscending);
        const layers = stackGenerator(data);

        const extent = [
            0,
            max(layers, layer => max(layer, sequence => sequence[1] + 10))
        ];

        const xScale = scaleBand()
            .domain(data.map(d => d.key))
            .range([0, width - 90])
            .padding(0.3);

        const yScale = scaleLinear()
            .domain(extent)
            .range([height - 70, 0]);

        svg
            .attr("width", data.length * 10)
            .attr("height", height)
            .selectAll(".layer")
            .data(layers)
            .join("g")
            .attr("class", "layer")
            .attr("fill", (layer) => colors[layer.key])
            .selectAll("rect")
            .data((layer) => layer)
            .join("rect")
            .attr("class", "data-bar")
            .attr("x", (sequence) => xScale(sequence.data.key))
            .attr("width", xScale.bandwidth())
            .attr("y", (sequence) => yScale(sequence[1]))
            .attr("height", (sequence) => {
                if (!isNaN(sequence[0]) && !isNaN(sequence[1])) {
                    return yScale(sequence[0]) - yScale(sequence[1]);
                } else {
                    return 0;
                }
            });

        const xAxis = axisBottom(xScale)
            .tickSize(0);

        const xAxisTop = axisTop(xScale)
            .tickSize(0)
            .ticks(0)
            .tickValues([]);

        svg
            .select(".x-axis")
            .attr("transform", `translate(0, ${height})`)
            .call(xAxis)
            .selectAll("text")
            .attr("class", "stacekd-bar-chart-ticks");

        svg
            .select(".x-axis-top")
            .call(xAxisTop)
            .selectAll("text")
            .attr("class", "stacekd-bar-chart-ticks");

        svg
            .selectAll(".domain")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".6")
            .attr("stroke-dasharray", "2");

        const yAxis = axisLeft(yScale)
            // .tickSize(-1450)
            .tickSize(0)
            .ticks(11)
            .tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

        yAxisSvg
            .select(".y-axis")
            .attr("height", height)
            .call(yAxis)
            .selectAll("text")
            .attr("class", "stacekd-bar-chart-ticks");

        yAxisSvg
            .select(".domain")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".6")
            .attr("stroke-dasharray", "2");

        yAxisSvg
            .selectAll('tick')
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".6")
            .attr("stroke-dasharray", "2");

        let x2 = scaleOrdinal()
            .domain(data.map(d => d.key))
            .range([0, width - 120]);

        const averageline = line()
            .x(function (d, i) {
                return x2(d.key) + i;
            })
            .y(function (d, i) { return yScale(80); });

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("stroke-width", "1")
            .attr("d", averageline);

        var Tooltip = select(wrapperRef.current)
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip");

        Tooltip.selectAll("*").remove();

        var mouseover = function (d) {
            Tooltip
                .style("opacity", 1)
        }

        const tootTipHtml = (event) => `<div><p>Date: ${event.target.__data__.data.key}</p><p>Match 1: ${event.target.__data__.data.matchOne}</p><p>Match 2: ${event.target.__data__.data.matchTwo}</p></div>`;

        var mousemove = function (event, d) {
            Tooltip
                // .text("Date: " + event.target.__data__.data.key + " " + "Match 1: " + event.target.__data__.data.matchOne + "\n" + "Match 2: " + event.target.__data__.data.matchTwo)
                .html(tootTipHtml(event))
                .style("top", event.pageY - 180 + "px")
                .style("left", event.pageX - 400 + "px")
        }
        var mouseleave = function (d) {
            Tooltip
                .style("opacity", 0)
            select(this)
                .style("stroke", "none")
                .style("opacity", 1)
        }

        svg
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on("mouseover", mouseover)

    }, [dimensions, colors, data, keys]);

    return (

        <div className="stacked-bar-chart-cont">
            <div ref={wrapperRef} className="svg-wrap-all-days-stacked-bar-chart">
                <div>
                    <svg ref={yAxisRef} className="y-axis-svg" width="10">
                        <g className="y-axis" />
                    </svg>
                </div>
                <div className="x-axis-scroll">

                    <svg className="energy-svg" ref={svgRef}>
                        <g className="x-axis" />
                        <g className="x-axis-top" />
                        <g className="tooltip-area">
                            <text className="tooltip-area__text"></text>
                        </g>
                    </svg>
                </div>
            </div>
        </div>

    )


}

export default StackedBarChartForAllDays;