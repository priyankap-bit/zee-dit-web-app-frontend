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
        // const { width, height } =
        //     dimensions || wrapperRef.current.getBoundingClientRect();

        const { width, height } = wrapperRef.current.getBoundingClientRect();

        // console.log(width, height);

        // let width = 800, height = 400;

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
            .range([400, 0]);

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
            .attr("transform", `translate(0, ${height + 300})`)
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
            .range([0, 1350]);

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

        var tooltip = select('.tooltip-area')
            .style('opacity', 0);

        const mouseover = (event, d) => {
            tooltip.style("opacity", 1);
            console.log('mouseover');
        };

        const mouseleave = (event, d) => {
            tooltip.style('opacity', 0);
            console.log('mouseleave');
        }

        const mousemove = (event, d) => {

            console.log("event", "d", event.target.__data__.data.matchOne, event.target.__data__.data.matchTwo);
            const text = select('.tooltip-area__text');
            text.text(`MatchOne: ${event.target.__data__.data.matchOne}, MatchTwo:${event.target.__data__.data.matchTwo}`);
            const [x, y] = pointer(event);

            tooltip
                .attr('transform', `translate(${x}, ${y})`);

            console.log('mousemove');
        };

        svg
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on("mouseover", mouseover);

    }, [dimensions, colors, data, keys]);

    return (

        <div className="stacked-bar-chart-cont">
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
                        <g className="tooltip-area">
                            <text className="tooltip-area__text">aas</text>
                        </g>
                    </svg>
                </div>
            </div>
        </div>



    )


}

export default StackedBarChartForAllDays;