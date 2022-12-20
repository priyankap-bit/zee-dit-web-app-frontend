import React, { useEffect } from "react";
import * as d3 from "d3v4";
import ReactWordcloud from "react-wordcloud";
import './DonutChart.css'

const DonutChart = (props) => {
  const words = [
    {
      text: "told",
      value: 64,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "correct",
      value: 10,
    },
    {
      text: "day",
      value: 54,
    },
    {
      text: "prescription",
      value: 12,
    },
    {
      text: "time",
      value: 77,
    },
    {
      text: "thing",
      value: 45,
    },
    {
      text: "left",
      value: 19,
    },
    {
      text: "pay",
      value: 13,
    },
    {
      text: "people",
      value: 32,
    },
    {
      text: "month",
      value: 22,
    },
    {
      text: "again",
      value: 35,
    },
    {
      text: "review",
      value: 24,
    },
    {
      text: "call",
      value: 38,
    },
    {
      text: "doctor",
      value: 70,
    },
    {
      text: "asked",
      value: 26,
    },
    {
      text: "finally",
      value: 14,
    },
    {
      text: "insurance",
      value: 29,
    },
    {
      text: "week",
      value: 41,
    },
    {
      text: "called",
      value: 49,
    },
    {
      text: "problem",
      value: 20,
    },
    {
      text: "going",
      value: 59,
    },
    {
      text: "help",
      value: 49,
    },
    {
      text: "felt",
      value: 45,
    },
    {
      text: "discomfort",
      value: 11,
    },
    {
      text: "lower",
      value: 22,
    },
    {
      text: "severe",
      value: 12,
    },
    {
      text: "free",
      value: 38,
    },
    {
      text: "better",
      value: 54,
    },
    {
      text: "muscle",
      value: 14,
    },
    {
      text: "neck",
      value: 41,
    },
    {
      text: "root",
      value: 24,
    },
    {
      text: "adjustment",
      value: 16,
    },
    {
      text: "therapy",
      value: 29,
    },
    {
      text: "injury",
      value: 20,
    },
    {
      text: "excruciating",
      value: 10,
    },
    {
      text: "chronic",
      value: 13,
    },
    {
      text: "chiropractor",
      value: 35,
    },
    {
      text: "treatment",
      value: 59,
    },
    {
      text: "tooth",
      value: 32,
    },
    {
      text: "chiropractic",
      value: 17,
    },
    {
      text: "dr",
      value: 77,
    },
    {
      text: "relief",
      value: 19,
    },
    {
      text: "shoulder",
      value: 26,
    },
    {
      text: "nurse",
      value: 17,
    },
    {
      text: "room",
      value: 22,
    },
    {
      text: "hour",
      value: 35,
    },
    {
      text: "wait",
      value: 38,
    },
    {
      text: "hospital",
      value: 11,
    },
    {
      text: "eye",
      value: 13,
    },
    {
      text: "test",
      value: 10,
    },
    {
      text: "appointment",
      value: 49,
    },
    {
      text: "medical",
      value: 19,
    },
    {
      text: "question",
      value: 20,
    },
    {
      text: "office",
      value: 64,
    },
    {
      text: "care",
      value: 54,
    },
    {
      text: "minute",
      value: 29,
    },
    {
      text: "waiting",
      value: 16,
    },
    {
      text: "patient",
      value: 59,
    },
    {
      text: "health",
      value: 49,
    },
    {
      text: "alternative",
      value: 24,
    },
    {
      text: "holistic",
      value: 19,
    },
    {
      text: "traditional",
      value: 20,
    },
    {
      text: "symptom",
      value: 29,
    },
    {
      text: "internal",
      value: 17,
    },
    {
      text: "prescribed",
      value: 26,
    },
    {
      text: "acupuncturist",
      value: 16,
    },
    {
      text: "pain",
      value: 64,
    },
    {
      text: "integrative",
      value: 10,
    },
    {
      text: "herb",
      value: 13,
    },
    {
      text: "sport",
      value: 22,
    },
    {
      text: "physician",
      value: 41,
    },
    {
      text: "herbal",
      value: 11,
    },
    {
      text: "eastern",
      value: 12,
    },
    {
      text: "chinese",
      value: 32,
    },
    {
      text: "acupuncture",
      value: 45,
    },
    {
      text: "prescribe",
      value: 14,
    },
    {
      text: "medication",
      value: 38,
    },
    {
      text: "western",
      value: 35,
    },
    {
      text: "sure",
      value: 38,
    },
    {
      text: "work",
      value: 64,
    },
    {
      text: "smile",
      value: 17,
    },
    {
      text: "teeth",
      value: 26,
    },
    {
      text: "pair",
      value: 11,
    },
    {
      text: "wanted",
      value: 20,
    },
    {
      text: "frame",
      value: 13,
    },
    {
      text: "lasik",
      value: 10,
    },
    {
      text: "amazing",
      value: 41,
    },
    {
      text: "fit",
      value: 14,
    },
    {
      text: "happy",
      value: 22,
    },
    {
      text: "feel",
      value: 49,
    },
    {
      text: "glasse",
      value: 19,
    },
    {
      text: "vision",
      value: 12,
    },
    {
      text: "pressure",
      value: 16,
    },
    {
      text: "find",
      value: 29,
    },
    {
      text: "experience",
      value: 59,
    },
    {
      text: "year",
      value: 70,
    },
    {
      text: "massage",
      value: 35,
    },
    {
      text: "best",
      value: 54,
    },
    {
      text: "mouth",
      value: 20,
    },
    {
      text: "staff",
      value: 64,
    },
    {
      text: "gum",
      value: 10,
    },
    {
      text: "chair",
      value: 12,
    },
    {
      text: "ray",
      value: 22,
    },
    {
      text: "dentistry",
      value: 11,
    },
    {
      text: "canal",
      value: 13,
    },
    {
      text: "procedure",
      value: 32,
    },
    {
      text: "filling",
      value: 26,
    },
    {
      text: "gentle",
      value: 19,
    },
    {
      text: "cavity",
      value: 17,
    },
    {
      text: "crown",
      value: 14,
    },
    {
      text: "cleaning",
      value: 38,
    },
    {
      text: "hygienist",
      value: 24,
    },
    {
      text: "dental",
      value: 59,
    },
    {
      text: "charge",
      value: 24,
    },
    {
      text: "cost",
      value: 29,
    },
    {
      text: "charged",
      value: 13,
    },
    {
      text: "spent",
      value: 17,
    },
    {
      text: "paying",
      value: 14,
    },
    {
      text: "pocket",
      value: 12,
    },
    {
      text: "dollar",
      value: 11,
    },
    {
      text: "business",
      value: 32,
    },
    {
      text: "refund",
      value: 10,
    },
  ];

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
    var data = { a: 3, b: 25, c: 30 };

    // set the color scale
    var color = d3
      .scaleOrdinal()
      .domain(data)
      .range(["#48c4fc", "#88147c", "#08bc34", "#6b486b", "#a05d56"]);

    // Compute the position of each group on the pie:
    var pie = d3.pie().value(function (d) {
      return d.value;
    });
    var data_ready = pie(d3.entries(data));

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
  }, []);

  const options = {
    rotations: 2,
    rotationAngles: [0, 0],
  };
  return (
    <div className="social-listening-tile">
      <div className="social-listening-title">
        <p>Sentiment distribution across mentions</p>
        <svg id="my_dataviz"></svg>
      </div>
      <div className="social-listening-title">
        <p>Word Cloud - Positive</p>
        <div className="words-cloud">
          <ReactWordcloud options={options} words={words} />
        </div>
      </div>
      <div className="social-listening-title">
        <p>Sentiment distribution across mentions</p>
      </div>
    </div>
  );
};

export default DonutChart;
