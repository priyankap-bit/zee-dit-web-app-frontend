import React from "react";
import "./BubbleChart.css";
import * as d3 from "d3v4";
import { useEffect } from "react";
import { select } from "d3";

const BubbleChart2 = () => {
  var json = [
    { Name: "Accounting Services", Count: 7 },
    { Name: "Architectural Consulting Services", Count: 1 },
    { Name: "Commercial/Industrial Real Estate Brokerage Services", Count: 2 },
    { Name: "Construction/Engineering Consulting Services", Count: 2 },
    { Name: "Coworking Space", Count: 1 },
    { Name: "Customs Brokerage Services", Count: 3 },
    { Name: "Energy Audit or Consulting Services", Count: 4 },
    { Name: "E", Count: 4 },
    {
      Name: "Human Resources and/or Executive Talent Search Services",
      Count: 4,
    },
    { Name: "Insurance Brokerage Services", Count: 4 },
    { Name: "Legal Services", Count: 11 },
    { Name: "Managed IT Services", Count: 4 },
    { Name: "Marketing and Communications Services", Count: 6 },
    { Name: "Relocation Specialists", Count: 1 },
  ];

  useEffect(() => {
    // d3 colour scheme for bubbles
    // var color = d3.scaleOrdinal().range(["rgb(148, 94, 210, 0.1)"]);

    // tooltip with styling
    var tooltip = d3
      .select("#chart")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("color", "black")
      .style("padding", "8px")
      .style("background-color", "white")
      .style("border-radius", "4px")
      .style("font", "12px GothamLight")
      .text("tooltip");

    // fit bubble chart to the user's window
    var margin = { left: 10, right: 10, top: 10, bottom: 10 },
      width = 850,
      height = 350,
      svg = d3
        .select("#chart")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 850 200")
        .classed("svg-content", true)
        .append("g");

    // var button = d3
    //   .select("#chart")
    //   .append("button")
    //   .attr("id", "btn1")
    //   .attr("class", "btn1")
    //   .text("Show Legend")
    //   .on("click", myFunction());

    var simulation = d3
      .forceSimulation()
      .velocityDecay(0.1)
      .force("x", d3.forceX(width / 2).strength(0.005))
      .force("y", d3.forceY(height / 3.5).strength(0.09))
      .force(
        "collide",
        d3
          .forceCollide(function (d) {
            return d.Count * 7 + 3;
          })
          .iterations(10)
      );

    var circles = svg
      .selectAll(".artist")
      .data(json)
      .enter()
      .append("circle")
      .attr("stroke", "#945ED2")
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 2)
      .attr("fill", "rgb(148, 94, 210, 0.1)")
      .attr("class", "artist")
      .attr("fill", "rgb(148, 94, 210, 0.1)")
      .attr("r", function (d) {
        return d.Count * 7;
      })
      //   .style("fill", function (d, i) {
      //     var bubbleColor = color(d.Name);
      //       select("#bubble-legend").append(
      //         '<li><span class="bubble-legend-box" style="background:' +
      //           bubbleColor +
      //           '"></span><span class="accessible">' +
      //           d.Count +
      //           '</span><span class="bubble-legend-label" >' +
      //           d.Name +
      //           "</span></li>"
      //       );
      //     return bubbleColor;
      //   })

    //   .attr("color", function (d) {
    //     return d3.select(this).style("fill");
    //   })
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      )
      .on("mouseover", function (d) {
        //tooltips
        tooltip.text(d.Name + ": " + d.Count);
        tooltip.style("visibility", "visible");
      })
      .on("mousemove", function () {
        return tooltip
          .style("top", d3.event.pageY - 10 + "px")
          .style("left", d3.event.pageX + 10 + "px");
      })
      .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
      });

    function wrap(text, width) {
      text.each(function () {
        var text = d3.select(this),
          words = text.text().split(" ", 3).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 0, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan");
        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("dx", "-6.5em")
              .attr("dy", lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    }

    //text for name in bubble
    var textName = svg
      .selectAll(null)
      .data(json)
      .enter()
      .append("text")
      .style("text-anchor", "middle")
      .attr("dy", "1.5em")
      .text(function (d) {
        return d.Count > 4 ? d.Name : " ";
      })
      .call(wrap, 80);

    //text for count in bubble
    var textCount = svg
      .selectAll(null)
      .data(json)
      .enter()
      .append("text")
      .text(function (d) {
        return d.Count > 4 ? d.Count : "";
      })
      .attr("dy", "0.1em")
      .style("text-anchor", "middle")
      .attr("class", "service-title");

    simulation.nodes(json).on("tick", ticked);

    function ticked() {
      circles
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
      textName
        .attr("x", function (d) {
          return d.x;
        })
        .attr("y", function (d) {
          return d.y;
        });
      textCount
        .attr("x", function (d) {
          return d.x;
        })
        .attr("y", function (d) {
          return d.y;
        });
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = null;
      d.fy = null;
    }

    function myFunction() {
      // $("#btn1").on("click", function() {
      //   if ($("#bubble-legend-container").css("display") == "none") {
      //     //$("#bubble-legend").css("display","block");
      //     $("#bubble-legend-container").slideDown("slow");
      //     $("#btn1").text("Hide Legend");
      //   } else {
      //     $("#bubble-legend-container").slideUp("slow");
      //     // $("#bubble-legend").css("display","none");
      //     $("#btn1").text("Show Legend");
      //   }
      // });
    }
  }, [json]);

  return (
    <>
      {/* <div className="article">
        <div className="container-12">
          <div className="grid-12">
            <h2>
              <strong>54</strong> Companies in <strong>14</strong> Service
              Categories
            </h2>
          </div>
        </div>
      </div> */}

      <div id="chart" className="chart"></div>

      {/* <div className="article" id="bubble-legend-container">
        <div className="container-12">
          <div className="grid-12">
            <ul id="bubble-legend"></ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BubbleChart2;
