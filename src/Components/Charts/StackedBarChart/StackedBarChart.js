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
} from "d3";

import useResizeObserver from "./useResizeObserver";

import { data, keys, colors } from "./data";
import "./StackedBarChart.css";
import { useMediaQuery } from "@material-ui/core";

const StackedBarChart = (props) => {
    const svgRef = useRef();
    const yAxisRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    const { handleActiveClassName } = props;

    useEffect(() => {

        const svg = select(svgRef.current);
        const yAxisSvg = select(yAxisRef.current);
        // const { width, height } =
        //     dimensions || wrapperRef.current.getBoundingClientRect();
        var range = 300;
        // if(isMobile){
        //     range = 270;
        // } 
        const { width, height } = wrapperRef.current.getBoundingClientRect();

        const maxBarWidth = 35;
        const svg_height = 100;
        const svg_width = svg.node().getBoundingClientRect().width;
        let bar_width = Math.round((svg_width - 60) / data.length);

        if (bar_width > maxBarWidth)
            bar_width = maxBarWidth;

        const spacing = 0.20 * bar_width;

        // const height = 100;

        const stackGenerator = stack().keys(keys).order(stackOrderAscending);
        const layers = stackGenerator(data);

        const extent = [
            0,
            max(layers, layer => max(layer, sequence => sequence[1] + 10))
        ];

        const xScale = scaleBand()
            .domain(data.map(d => d.key))
            .range([0, range])
            .padding(0.27);
        // const xScale = scaleBand()
        //     .domain(data.map(d => d.key))
        //     .range([0, svg_height])
        //     .padding(0.27);

        const yScale = scaleLinear()
            .domain(extent)
            .range([height + 50, 0]);
        // const yScale = scaleLinear()
        //     .domain(extent)
        //     .range([svg_height, 0]);

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

        svg.append("text")
            .attr("text-anchor", "start")
            .style("fill", '#808080')
            .attr("class", "barchart-title")
            .attr("y",  7)
            .attr("x", 11)
            .text("Viewers in Mn.")


        const xAxis = axisBottom(xScale)
            .tickSize(0);

        svg
            .select(".x-axis")
            .attr("transform", `translate(0, ${height + 50})`)
            .call(xAxis)
            .selectAll("text")
            .attr("class", "stacekd-bar-chart-ticks");

        svg
            .select(".domain")
            .attr("stroke", "#D8D8D8")
            .attr("stroke-width", "1")
            .attr("opacity", ".6")
            .style("stroke-dasharray", ("3, 3"))

        const yAxis = axisLeft(yScale)
            .tickSize(0)
            .ticks(2)
            .tickValues([0, 120, 80]);

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

        let x2 = scaleOrdinal()
            .domain(data.map(d => d.key))
            .range([0, 300]);

        const averageline = line()
            .x(function (d, i) {
                return x2(d.key) + i;
            })
            .y(function (d, i) { return yScale(80); });

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr('fill', 'red')
            .attr("stroke-width", "1")
            .attr("d", averageline);

        svg.append("text")
            .attr("class", "x-label-7days")
            .attr("text-anchor", "end")
            .attr("x", width - 35)
            .attr("y", -5)
            .text("Last 7 Days");

        svg.append("text")
            .attr("class", "x-label-7days")
            .attr("text-anchor", "end")
            .attr("x", width - 27)
            .attr("y", -5)
            .text("|");

        svg.append("text")
            .attr("class", "x-label-max")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", -5)
            .text("Max")
            .on("click", () => {
                // console.log("max clicked");
                handleActiveClassName(true);
            });

    }, [dimensions, colors, data, keys]);

    return (
        <div ref={wrapperRef} className="svg-wrap">
            <div>
                <svg ref={yAxisRef} className="y-axis-svg" width="10">
                    <g className="y-axis" />
                </svg>
            </div>
            <div className="x-axis-scroll">
                <svg className="energy-svg" ref={svgRef}>
                    <g className="x-axis" />
                </svg>
            </div>
        </div>
    )

}

export default StackedBarChart;