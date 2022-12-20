import React, { useEffect } from "react";
import * as d3 from "d3";

const CumulativePerformanceChart = (props) => {
  const { LineData } = props;

  useEffect(() => {
    drowLineChart(LineData);
  }, []);

  const drowLineChart = (LineData) => {
    console.log("LineData", LineData);
    // setting up svg
    const w = 500;
    const h = 130;
    const svg = d3
      .select(".chart-container")
      .append("svg")
      .attr("height", h)
      .attr("width", w)
      .style("background", "white")
      .style("border-radius", "9px");
    // .style("margin-top", "50")
    // .style("box-shadow", "0px 0px 14px -2px #cfd5ff");
    //setting scaling
    const xScale = d3
      .scaleLinear()
      .domain([0, LineData.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);
    //setting axes
    //setting up data for svg
    svg
      .selectAll(".line")
      .data([LineData])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "#145DA0")
      .attr("stroke", "#145DA0")
      .attr("stroke-width", "2px");
  };

  return <></>;
};

export default CumulativePerformanceChart;
