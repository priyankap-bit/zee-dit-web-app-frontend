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
} from "d3";
import useResizeObserver from "./useResizeObserver";
import { data, keys, colors } from "./data";

import "./StackedBarChart.css";

const StackedBarChart = (props) => {
    const svgRef = useRef();
    const yAxisRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    useEffect(() => {

        const svg = select(svgRef.current);
        const yAxisSvg = select(yAxisRef.current);
        const { width, height } =
            dimensions || wrapperRef.current.getBoundingClientRect();

        // const height = 100;

        const stackGenerator = stack().keys(keys).order(stackOrderAscending);
        const layers = stackGenerator(data);

        const extent = [
            0,
            max(layers, layer => max(layer, sequence => sequence[1] + 10))
        ];

        const xScale = scaleBand()
            .domain(data.map(d => d.key))
            .range([0, 300])
            .padding(0.3);

        const yScale = scaleLinear()
            .domain(extent)
            .range([height + 50, 0]);

        svg
            // .attr("width", 'auto')
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