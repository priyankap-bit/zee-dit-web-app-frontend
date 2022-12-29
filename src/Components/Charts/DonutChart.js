import React, { useState, useEffect } from "react";
import * as d3 from "d3v4";
import "./DonutChart.css";

const DonutChart = (props) => {
  const { donutChart } = props;
  console.log("donut chart data :", donutChart);
  useEffect(() => {
    // set the dimensions and margins of the graph
    var width = 250,
      height = 250,
      margin = 60;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    var svg = d3
      .select("#my_dataviz")
      // .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Create dummy data
    // var data = { a: 3, b: 25, c: 30 };

    // set the color scale
    var color = d3
      .scaleOrdinal()
      .domain(donutChart)
      .range(["#B73864", "#00C143", "#FFD354"]);

    // Compute the position of each group on the pie:
    var pie = d3.pie().value(function (d) {
      return d.value;
    });
    var data_ready = pie(d3.entries(donutChart));

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(100) // This is the size of the donut hole
          .outerRadius(radius)
      )
      .attr("fill", function (d) {
        return color(d.data.key);
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);
  }, [selectedFilterDate]);

  return (
    <div className="social-listening-title">
      <p>Sentiment distribution across mentions</p>
      <svg id="my_dataviz"></svg>
    </div>
  );
};

export default DonutChart;
