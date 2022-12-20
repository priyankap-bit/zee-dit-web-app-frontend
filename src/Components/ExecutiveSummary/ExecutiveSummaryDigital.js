import { async } from "q";
import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import ILTTwentySummaryServices from "../../Services/ILTTwentySummaryServices";

const ExecutiveSummaryDigital = () => {
  // const [LineData, setLineData] = useState(null);
  const [executiveSummaryData, setExecutiveSummaryData] = useState({
    digitalViewers: null,
    digitalWatchTime: null,
  });

  useEffect(() => {
    const executiveSummaryDigital = async () => {
      let digitalViewers = await ILTTwentySummaryServices.getDigitalViewers(),
        digitalWatchTime = await ILTTwentySummaryServices.getDigitalWatchTime();

      const LineData =
        await ILTTwentySummaryServices.getCumulativePerformanceData();
      drowLineChart(LineData);

      setExecutiveSummaryData({
        digitalViewers,
        digitalWatchTime,
      });
    };

    executiveSummaryDigital();
  }, []);

  // LINE CHART
  const drowLineChart = (LineData) => {
    // setting up svg
      const w = 400;
      const h = 150;
      const svg = d3
        .select(".chart")
        .attr("width", w)
        .attr("height", h)
        .style("background", "white")
        .style("border-radius", "9px")
        .style("margin-top", "50")
        .style("box-shadow", "0px 0px 14px -2px #cfd5ff");
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

  return (
    <div className="executive-summary-digital">
      <div className="executive-summary-digital-title">
        <img
          src="/static/images/logos/Digital-icon.svg"
          height={50}
          alt="Digital Logo"
          className="executive-summary-linear-image"
        />
        <h3>Digital</h3>
      </div>
      <div className="digital-daywise-and-cumulative">
        <div className="digital-performance">
          <div className="executive-summary-linear-subtitle">
            <p>Day-wise Performance</p>
          </div>
          {executiveSummaryData.digitalViewers !== null &&
            executiveSummaryData.digitalWatchTime !== null && (
              <>
                <div className="executive-summary-tile">
                  <div className="executive-summary-tile-name">
                    <h4>{executiveSummaryData.digitalViewers[0].title}</h4>
                  </div>
                  <div className="executive-summary-tile-primary-val">
                    <h2>{executiveSummaryData.digitalViewers[0].views}</h2>
                  </div>
                  <div className="executive-summary-tile-secondary-val">
                    <p className="executive-summary-tile-secondary-val-perneg">
                      {executiveSummaryData.digitalViewers[0].different}
                    </p>
                    <p className="executive-summary-tile-secondary-val-num">
                      Prev. {executiveSummaryData.digitalViewers[0].prev}
                    </p>
                  </div>
                </div>
                <div className="executive-summary-tile">
                  <div className="executive-summary-tile-name">
                    <h4>{executiveSummaryData.digitalWatchTime[0].title}</h4>
                  </div>
                  <div className="executive-summary-tile-primary-val">
                    <h2>{executiveSummaryData.digitalWatchTime[0].time}</h2>
                  </div>
                  <div className="executive-summary-tile-secondary-val">
                    <p className="executive-summary-tile-secondary-val-perneg">
                      {executiveSummaryData.digitalWatchTime[0].different}
                    </p>
                    <p className="executive-summary-tile-secondary-val-num">
                      {executiveSummaryData.digitalWatchTime[0].prev}
                    </p>
                  </div>
                </div>
              </>
            )}
        </div>
        <div className="digital-performance">
          <div className="executive-summary-linear-subtitle">
            <p>Cumulative Performance</p>
          </div>
          <div>
            <svg className="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummaryDigital;
