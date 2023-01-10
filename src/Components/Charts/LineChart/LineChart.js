import React, { useEffect } from "react";
import * as d3 from "d3v4";
import data from "./data.csv";
import { useRef } from "react";
const LineChart = (props) => {
  const lineChart = useRef();
  var data1 = [
    { date: 0, value: 2 },
    { date: 2, value: 2000 },
    { date: 3, value: 800 },
    { date: 4, value: 1700 },
  ];
  useEffect(() => {
    // Create 2 datasets


    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 50 },
      width = 300 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select(lineChart.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // const bounds = svg
    //   .append("g")
    //   .style("transform", `translate(${margin.left}px,${margin.top}px)`);

    // Initialise a X axis:
    var x = d3.scaleLinear().range([0, width]);
    var xAxis = d3.axisBottom().scale(x).tickSize(-height)
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("class", "myXaxis");

    // Initialize an Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);

    // console.log('y(100)', y(100));

    var yAxis = d3.axisLeft().scale(y).ticks(1).tickSize(0);
    svg.append("g").attr("class", "myYaxis");

    // Create a function that takes a dataset as input and update the plot:
    function update(data) {
      // Create the X axis:
      x.domain([
        0,
        d3.max(data, function (d) {
          return d.date;
        }),
      ]);
      svg.selectAll(".myXaxis").call(xAxis);

      // create the Y axis
      y.domain([
        0,
        d3.max(data, function (d) {
          return d.value;
        }),
      ]);
      svg.selectAll(".myYaxis")
        // .transition()
        // .duration(3000)
        .call(yAxis);

      svg
        .select(".myXaxis")
        // .attr("transform", `translate(0, ${height + 50})`)
        .call(xAxis)
        .selectAll("text")
        .attr("class", "stacekd-bar-chart-ticks");

      svg
        .select(".domain")
        .attr("stroke", "#D8D8D8")
        .attr("stroke-width", "1")
        .attr("opacity", ".1")
        .attr("stroke-dasharray", "2");

      svg
        .selectAll(".tick")
        .attr("stroke", "#D8D8D8")
        .attr("stroke-width", "1")
        .attr("opacity", ".2")
        .attr("stroke-dasharray", "2");

      svg
        .select(".myYaxis")
        .selectAll(".domain")
        .attr("stroke", "#D8D8D8")
        .attr("stroke-width", "1")
        .attr("opacity", ".1")
        .attr("stroke-dasharray", "1");

      // const listeningRect = bounds
      //   .append("rect")
      //   .attr("class", "listening-rect")
      //   .attr("width", width + margin.left + margin.right)
      //   .attr("height", height + margin.top + margin.bottom);
      // .on("mousemove", onMouseMove)
      // .on("mouseleave", onMouseLeave);

      let x2 = d3.scaleOrdinal()
        .domain(data.map(d => d.key))
        .range([0, 300]);

      const line = d3.line()
        .x(function (d, i) {
          return x2(d.date) + i;
        })
        .y(function (d, i) { return y(500); });

      svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("stroke-width", "1")
        .attr("d", line);

      // Create a update selection: bind to the new data
      var u = svg.selectAll(".lineTest").data([data], function (d) {
        return d.date;
      });

      // Updata the line
      u.enter()
        .append("path")
        .attr("class", "lineTest")
        .merge(u)
        // .transition()
        // .duration(3000)
        .attr(
          "d",
          d3
            .line()
            .x(function (d) {
              return x(d.date);
            })
            .y(function (d) {
              return y(d.value);
            })
        )
        .attr("fill", "none")
        .attr("stroke", "#945ED2")
        .attr("stroke-width", 1.32592);

      var Tooltip = d3.select(lineChart.current)
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip");

      // Tooltip.selectAll("*").remove();

      var mouseover = function (d) {
        Tooltip
          .style("opacity", 1)
      }

      const tootTipHtml = (event) => `<div><p>Data</p></div>`;

      var mousemove = function (event, d) {
        Tooltip
          .html(tootTipHtml(event))
          .style("top", (d3.mouse(this)[1]) + "px")
          .style("left", (d3.mouse(this)[0] - 50) + "px")
      }
      var mouseleave = function (d) {
        Tooltip
          .style("opacity", 0)
        // d3.select(this)
        //   .style("stroke", "none")
        //   .style("opacity", 1)
      }

      // var Tooltip = d3.select(lineChart.current)
      //   .append("div")
      //   .style("opacity", 0)
      //   // .attr("class", "tooltip-line-chart")
      //   // .style("background-color", "black")
      //   // .style("border", "solid")
      //   // .style("border-width", "2px")
      //   // .style("border-radius", "5px")
      //   // .style("padding", "5px")

      // // Three function that change the tooltip when user hover / move / leave a cell
      // var mouseover = function (d) {
      //   Tooltip
      //     .transition()
      //     .duration(300)
      //     .style("opacity", 1)
      //   d3.select(this)
      //     .style("stroke", "black")
      //     .style("opacity", 1)
      // }
      // var mousemove = function (d) {
      //   Tooltip
      //     .html("The exact value of<br>this cell is: " + "d.value")
      //     .style("left", (d3.mouse(this)[0] + 70) + "px")
      //     .style("top", (d3.mouse(this)[1]) + "px")
      // }
      // var mouseleave = function (d) {
      //   Tooltip
      //     .style("opacity", 0)
      //   d3.select(this)
      //     .style("stroke", "none")
      //     .style("opacity", 0.8)
      // }

      svg
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .on("mouseover", mouseover)

    }

    // At the beginning, I run the update function on the first dataset:
    update(data1);
  }, [data1]);

  return (
    <div>
      <svg ref={lineChart}>
        <g className="tooltip-area-line-chart">
          <text className="tooltip-area__text"></text>
        </g>
      </svg>
    </div>
  );
};

export default LineChart;
