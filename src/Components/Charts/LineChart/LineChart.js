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
      svg.selectAll(".myYaxis").transition().duration(3000).call(yAxis);

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

      // svg
      //   .selectAll(".tick")
      //   .attr("stroke", "#D8D8D8")
      //   .attr("stroke-width", "1")
      //   .attr("opacity", ".2")
      //   .attr("stroke-dasharray", "2");

      svg
        .selectAll(".tick")
        .attr("stroke", "#D8D8D8")
        .attr("stroke-width", "1")
        .attr("opacity", ".2")
        .attr("stroke-dasharray", "2");

      // svg
      //   .select(".y-axis")
      //   .attr("height", height)
      //   .call(yAxis)
      //   .selectAll("text")
      //   .attr("class", "stacekd-bar-chart-ticks");

      svg
        .select(".myYaxis")
        .selectAll(".domain")
        .attr("stroke", "#D8D8D8")
        .attr("stroke-width", "1")
        .attr("opacity", ".1")
        .attr("stroke-dasharray", "1");

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
        .transition()
        .duration(3000)
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
    }

    // At the beginning, I run the update function on the first dataset:
    update(data1);
  }, [data1]);

  return (
    <div>
      <svg ref={lineChart}></svg>
    </div>
  );
};

export default LineChart;
