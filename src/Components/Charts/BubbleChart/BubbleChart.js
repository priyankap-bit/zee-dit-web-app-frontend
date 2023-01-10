import React from "react";
import * as d3 from 'd3';
import './BubbleChart.css'
import { useEffect } from "react";
import { drag, dragDisable, dragEnable, forceY, scaleLinear, ticks } from "d3";
const BubbleChart = (props) => {
    const { files } = props
    const width = window.innerWidth;
    
    

    
    useEffect(() => {
        const chart = BubbleChart(files, {
            label: d => [...d.id.split(".").pop().split(/(?=[A-Z][a-z])/g), d.value].join("\n"),
            value: d => d.value,
            group: d => d.id.split(".")[1],
            title: d => `${d.id}\n${d.value}`,
            width: width
            // link: d => `https://github.com/prefuse/Flare/blob/master/flare/src/${d.id.replace(/\./g, "/")}.as`,
        })
    }, [files])

    // Copyright 2021 Observable, Inc.
    // Released under the ISC license.
    // https://observablehq.com/@d3/bubble-chart
    function BubbleChart(data, {
        name = ([x]) => x, // alias for label
        label = name, // given d in data, returns text to display on the bubble
        value = ([, y]) => y, // given d in data, returns a quantitative size
        group, // given d in data, returns a categorical value for color
        title, // given d in data, returns text to show on hover
        link, // given a node d, its link (if any)
        linkTarget = "_blank", // the target attribute for links, if any
        width = width, // outer width, in pixels
        height = 500, // outer height, in pixels
        padding = 3, // padding between circles
        margin = 1, // default margins
        marginTop = margin, // top margin, in pixels
        marginRight = margin, // right margin, in pixels
        marginBottom = margin, // bottom margin, in pixels
        marginLeft = margin, // left margin, in pixels
        groups, // array of group names (the domain of the color scale)
        colors = d3.schemeTableau10, // an array of colors (for groups)
        fill = "#ccc", // a static fill color, if no group channel is specified
        fillOpacity = 0.7, // the fill opacity of the bubbles
        stroke, // a static stroke around the bubbles
        strokeWidth, // the stroke width around the bubbles, if any
        strokeOpacity, // the stroke opacity around the bubbles, if any
    } = {}) {
        // Compute the values.
        const D = d3.map(data, d => d);
        const V = d3.map(data, value);
        const G = group == null ? null : d3.map(data, group);
        const I = d3.range(V.length).filter(i => V[i] > 0);
        // Unique the groups.
        if (G && groups === undefined) groups = I.map(i => G[i]);
        groups = G && new d3.InternSet(groups);

        // Construct scales.
        // const color = G && d3.scaleOrdinal(groups, colors);

        // Compute labels and titles.
        const L = label == null ? null : d3.map(data, label);
        const T = title === undefined ? L : title == null ? null : d3.map(data, title);
        var xCenter = [100, 300, 500];
        function ticked() {
            var u = d3.select('svg g')
                .selectAll('circle')
                .data(data)
                .join('circle')
                .attr('r', function(d) {
                    return d.radius;
                })
                .style('fill', function(d) {
                    // return colorScale[d.category];
                })
                .attr('cx', function(d) {
                    return d.x;
                })
                .attr('cy', function(d) {
                    return d.y;
                });
        }
        
        // Compute layout: create a 1-deep hierarchy, and pack it.
        var simulation = d3.forceSimulation(data)
        .force('charge', d3.forceManyBody().strength(5))
        .force('x', d3.forceX().x(function(d) {
            return xCenter[d.category];
        }))
        .force('collision', d3.forceCollide().radius(function(d) {
            return d.radius;
        }))
        .on('tick', ticked);

        const root = d3.pack()
            .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
            .padding(padding + 5)
            (d3.hierarchy({ children: I })
                .sum(i => V[i]));

        const svg = d3.select("#bubbleChart")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [-marginLeft, -marginTop, width, height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
            .attr("fill", "currentColor")
            .attr("font-size", 10)
            .attr("font-family", "GothamLight")
            .attr("text-anchor", "middle")

        const leaf = svg.selectAll("a")
            .data(root.leaves())
            .join("a")
            .attr("xlink:href", link == null ? null : (d, i) => link(D[d.data], i, data))
            .attr("target", link == null ? null : linkTarget)

        const trans = leaf.attr("transform", 'translate(750, 200)')
        trans.transition().duration(1000).attr("transform", d => `translate(${d.x},${d.y})`)
        const circle = leaf.append("circle")
            .attr("stroke", '#945ED2')
            .attr("stroke-width", strokeWidth)
            .attr("stroke-opacity", strokeOpacity)
            .attr("fill", 'rgb(148, 94, 210, 0.1)')
            .attr("fill-opacity", fillOpacity)
            .attr("r", d => d.r)
            .style("cursor", "pointer")
            .on('click', function (d, i) {
                d3.select(this)
                    // .transition()
                    // .duration(1000)
                    .attr("stroke-width", 5)
                    // .ease(d3.easeBounce)
                    // .attr("r", 50)
                    // .style("fill", "orange");

                leaf.filter(function (e) {
                    return e.rank === d.rank;
                }).transition()
                    .duration(1000)
                    .ease(d3.easeBounce)    
                    .attr("font-size", "10px")
            })
            .on('mouseout', function (d, i) {
                d3.select(this)
                // .transition()
                .attr("stroke-width", strokeWidth)
                //     .style("opacity", 0.3)
                //     .attr("r", 50)
                //     .style("fill", "blue");
                // leaf.filter(function (e) {
                //     return e.rank === d.rank;
                // }).attr("font-size", "10px")
            })
        
        if (T) leaf.append("title")
            .attr("class", "tooltip-title")
            .text(d => T[d.data])
            .style("stroke", "black")
            .attr('font-size', '10px')

        if (L) {
            // A unique identifier for clip paths (to avoid conflicts).
            const uid = `O-${Math.random().toString(16).slice(2)}`;

            leaf.append("clipPath")
                .attr("id", d => `${uid}-clip-${d.data}`)
                .append("circle")
                .attr("r", d => d.r);

            const text = leaf.append("text")
                //   .attr("clip-path", d => `url(${new URL(`#${uid}-clip-${d.data}`, location)})`)
                .selectAll("tspan")
                .data(d => `${L[d.data]}`.split(/\n/g))
                .join("tspan")
                .style("cursor", "pointer")
                .attr("x", 0)
                .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
                .attr("fill-opacity", (d, i, D) => i === D.length - 1 ? 0.7 : null)
                .text(d => d);

        }

        // return Object.assign(svg.node(), { scales: { color } });
    }

    return (
        <div className="bubble-chart-div">
            <svg id='bubbleChart'>

            </svg>
        </div>
    )
}

export default BubbleChart;