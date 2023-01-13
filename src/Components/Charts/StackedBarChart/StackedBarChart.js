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

import useResizeObserver from "./useResizeObserver";

import {
    data, keys, colors
} from "./data";
import "./StackedBarChart.css";

const StackedBarChart = (props) => {
    const svgRef = useRef();
    const yAxisRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    const {
        handleActiveClassName,
        marginForRightChart = 0
    } = props;

    useEffect(() => {

        const svg = select(svgRef.current);

        let { width, height } = wrapperRef.current.getBoundingClientRect();

        // const width = 300, height = 90;

        let chartNumberDimensions;

        if (window.innerWidth > 1024) {
            chartNumberDimensions = {
                sevenDays: width - 35 + marginForRightChart,
                divider: width - 27 + marginForRightChart,
                max: width + marginForRightChart,
            }
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            if (marginForRightChart)
                chartNumberDimensions = {
                    sevenDays: width + 10 + marginForRightChart,
                    divider: width + 20 + marginForRightChart,
                    max: width + 45 + marginForRightChart
                }
            else
                chartNumberDimensions = {
                    sevenDays: width + 90,
                    divider: width + 98,
                    max: width + 125
                }
        } else if (window.innerWidth < 768) {
            if (marginForRightChart)
                chartNumberDimensions = {
                    sevenDays: width + 110 + marginForRightChart,
                    divider: width + 125 + marginForRightChart,
                    max: width + 150 + marginForRightChart
                }
            else
                chartNumberDimensions = {
                    sevenDays: width + 90,
                    divider: width + 98,
                    max: width + 125
                }
        }

        // const everything = svg.selectAll("*");
        // everything.remove();

        const yAxisSvg = select(yAxisRef.current);

        const stackGenerator = stack().keys(keys).order(stackOrderAscending);
        const layers = stackGenerator(data);

        const extent = [
            0,
            max(layers, layer => max(layer, sequence => sequence[1] + 10))
        ];

        const xScale = scaleBand()
            .domain(data.map(d => d.key))
            .range([0, 300])
            .padding(0.27);

        const yScale = scaleLinear()
            .domain(extent)
            .range([height + 50, 0]);

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
            })
            // .style("stroke", "none")
            .style("opacity", 1);

        const xAxis = axisBottom(xScale)
            .tickSize(0);

        const xAxisTop = axisTop(xScale)
            .tickSize(0)
            .ticks(0)
            .tickValues([]);

        svg
            .select(".x-axis")
            .attr("transform", `translate(0, ${height + 50})`)
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
            .attr('fill', ' red')
            .attr("stroke-width", "1")
            .attr("d", averageline);
        svg.append("text")
            .attr("class", "chart-label")
            .attr("text-anchor", "start")
            .attr('fill', '#808080')
            .attr("y", -5)
            // .attr
            // .attr("y", 0)
            // .attr("dy", ".75em")
            .text(marginForRightChart ? "Watch Time in Mn." : "Viewers in Mn.");
        svg.append("text")
            .attr("class", "x-label-7days")
            .attr("text-anchor", "end")
            .attr("x", chartNumberDimensions.sevenDays)
            .attr("y", -5)
            .text("Last 7 Days");

        svg.append("text")
            .attr("class", "x-label-7days")
            .attr("text-anchor", "end")
            // .attr("x", width - 27 + marginForRightChart)
            // .attr("y", -5)
            .attr("x", chartNumberDimensions.divider)
            .attr("y", -5)
            .text("|");

        svg.append("text")
            .attr("class", "x-label-max")
            .attr("text-anchor", "end")
            // .attr("x", width + marginForRightChart)
            // .attr("y", -5)
            .attr("x", chartNumberDimensions.max)
            .attr("y", -5)
            .text("Max")
            .on("click", () => {
                handleActiveClassName(true);
            });

        var Tooltip = select(wrapperRef.current)
            .append("div")
            .style("opacity", 0)
            .attr("class", marginForRightChart ? "tooltip-stacked-bar-chart-right" : "tooltip-stacked-bar-chart");

        Tooltip.selectAll("*").remove();

        var mouseover = function (event, d) {

            Tooltip
                .transition()
                .duration(200)
                .style("opacity", 1)
        }

        const tootTipHtml = (event) => `<div><p>Date: ${event.target.__data__.data.key}</p><p>Match 1: ${event.target.__data__.data.matchOne}</p><p>Match 2: ${event.target.__data__.data.matchTwo}</p></div>`;

        var mousemove = function (event, d) {
            Tooltip
                .html(tootTipHtml(event))
                .style("top", (pointer(event)[1]) + "px")
                .style("left", (pointer(event)[0] - 50) + "px");
        }
        var mouseleave = function (event, d) {
            Tooltip
                .transition()
                .duration(200)
                .style("opacity", 0);

            // select(this.node())
            //     .transition()
            //     .duration(200)
            //     .style("opacity", 0.7)
            //     .style("transform", "scale3d(1,1,1)");
        }

        svg
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on("mouseover", mouseover)

    }, [colors, data, keys]);

    return (

        <div>
            <div className="stacked-barchart-sub-div">
                <div ref={wrapperRef} className="svg-wrap">
                    <div>
                        <svg ref={yAxisRef} className="y-axis-svg" width="10">
                            <g className="y-axis" />
                        </svg>
                    </div>

                    <div className="x-axis-scroll">
                        <svg className="energy-svg" ref={svgRef}>
                            <g className="x-axis" />
                            <g className="x-axis-top" />
                            <g className="tooltip-area-stcked-barchart">
                                <text className="tooltip-area__text-stcked-barchart"></text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default StackedBarChart;