import React from "react";
import * as d3 from 'd3';   
import { useEffect } from "react";

const ExecutiveSummaryContent = () => {
const files = [
    // {id: "flare", value: 10},
    // {id: "flare.analytics", value: 15},
    // {id: "flare.analytics.cluster", value: 10},
    {id: "Mithai", value: 427.3},
    {id: "Tere Bina Jiya Jaye Na", value: 400.65},
    {id: "Bhagya Lakshmi", value: 491.58},
    {id: "Kum Kum Bhagya", value: 437.68},
    {id: "Kundli Bhagya", value: 589.70},
    {id: "meet", value: 439.94},
    {id: "flare.analytics.graph.LinkDistance", value: 391},
    {id: "flare.analytics.graph.MaxFlowMinCut", value: 391},
    {id: "flare.analytics.graph.ShortestPaths", value: 437},
    {id: "flare.analytics.graph.SpanningTree", value: 1000},
    // {id: "flare.analytics.optimization", value: null},
    // {id: "flare.analytics.optimization.AspectRatioBanker", value: 7074},
    // {id: "flare.animate", value: null},
    // {id: "flare.animate.Easing", value: 17010},
    // {id: "flare.animate.FunctionSequence", value: 5842},
    // {id: "flare.animate.interpolate", value: null},
]

useEffect(() => {
    const chart = BubbleChart(files, {
        label: d => [...d.id.split(".").pop().split(/(?=[A-Z][a-z])/g), d.value].join("\n"),
        value: d => d.value,
        group: d => d.id.split(".")[1],
        title: d => `${d.id}\n${d.value}`,
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
    width = 650, // outer width, in pixels
    height = 600, // outer height, in pixels
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
    const color = G && d3.scaleOrdinal(groups, colors);
  
    // Compute labels and titles.
    const L = label == null ? null : d3.map(data, label);
    const T = title === undefined ? L : title == null ? null : d3.map(data, title);
  
    // Compute layout: create a 1-deep hierarchy, and pack it.
    const root = d3.pack()
        .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
        .padding(padding)
      (d3.hierarchy({children: I})
        .sum(i => V[i]));
  
    const svg = d3.select("#bubbleChart")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-marginLeft, -marginTop, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
        .attr("fill", "currentColor")
        .attr("font-size", 15)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle");
  
    const leaf = svg.selectAll("a")
      .data(root.leaves())
      .join("a")
        .attr("xlink:href", link == null ? null : (d, i) => link(D[d.data], i, data))
        .attr("target", link == null ? null : linkTarget)
        .attr("transform", d => `translate(${d.x},${d.y})`);
  
    leaf.append("circle")
        .attr("stroke", '#945ED2')
        .attr("stroke-width", strokeWidth)
        .attr("stroke-opacity", strokeOpacity)
        .attr("fill", 'rgb(148, 94, 210, 0.1)')
        .attr("fill-opacity", fillOpacity)
        .attr("r", d => d.r);
  
    if (T) leaf.append("title")
        .text(d => T[d.data]);
  
    if (L) {
      // A unique identifier for clip paths (to avoid conflicts).
      const uid = `O-${Math.random().toString(16).slice(2)}`;
  
      leaf.append("clipPath")
          .attr("id", d => `${uid}-clip-${d.data}`)
        .append("circle")
          .attr("r", d => d.r);
  
      leaf.append("text")
        //   .attr("clip-path", d => `url(${new URL(`#${uid}-clip-${d.data}`, location)})`)
        .selectAll("tspan")
        .data(d => `${L[d.data]}`.split(/\n/g))
        .join("tspan")
          .attr("x", 0)
          .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
          .attr("fill-opacity", (d, i, D) => i === D.length - 1 ? 0.7 : null)
          .text(d => d);
    }
  
    return Object.assign(svg.node(), {scales: {color}});
  }
    return (
        <div>
            <div>
                <a href="#">Linear</a>
                <a href="#">OTT</a>
                <a href="#">Content Insights</a>
            </div>
            <div>
                <a href="#">All Content</a>
                <a href="#">Top 10</a>
                <a href="#">Bottom 10</a>
            </div>
            <div>
                <svg id='bubbleChart'></svg>
            </div>
        </div>
    )
}

export default ExecutiveSummaryContent;