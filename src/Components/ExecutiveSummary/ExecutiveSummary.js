import { useState, useEffect } from 'react';
import "./ExecutiveSummary.css";

import { async } from "q";
import * as d3 from 'd3';
import ILTTwentySummaryServices from "../../Services/ILTTwentySummaryServices";
import ExecutiveSummaryDigital from "./ExecutiveSummaryDigital";

const ExecutiveSummary = (props) => {

  const { selectedFilterDate } = props;
  const [value, setValue] = useState();

  const [executiveSummaryData, setExecutiveSummaryData] = useState({
    linearReach: null,
    linearWatchTime: null,
    updateDate: null,
  });
  const [LineData] = useState([0, 50, 100, 150, 300, 600, 0]);

  // LINE CHART
  useEffect(() => {
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
  }, [LineData]);

  useEffect(() => {
    const executiveSummaryLinear = async () => {
      let linearReach = await ILTTwentySummaryServices.getLinearReachApi(),
        linearWatchTime = await ILTTwentySummaryServices.getLinearWatchTime(),
        updateDate = await ILTTwentySummaryServices.getLinearUpdateDates();
      setExecutiveSummaryData({
        linearReach,
        linearWatchTime,
        updateDate,
      });
    };

    executiveSummaryLinear();
  }, []);

  useEffect(() => {
    // value = Math.random() * 100;
    setValue(Math.random() * 100)
  }, [selectedFilterDate]);

  return (
    <div className="executive-summary-container">
      <div className="executive-summary-linear">
        <div className="executive-summary-linear-title">
          <img
            src="/static/images/logos/Linear-icon.svg"
            height={50}
            alt="Linear Logo"
            className="executive-summary-linear-image"
          />
          <h3>Linear</h3>
        </div>
        <div className="executive-summary-linear-subtitle">
          <p>Day-wise Performance</p>
        </div>

        {value !== null && (<>
          <h2>{selectedFilterDate}</h2>
        </>)}
        {executiveSummaryData.linearReach !== null &&
          executiveSummaryData.linearWatchTime !== null &&
          executiveSummaryData.updateDate !== null && (
            <>
              <div className="executive-summary-tile">
                <div className="executive-summary-tile-name">
                  <h4>{executiveSummaryData.linearReach[0].title}</h4>
                </div>
                <div className="executive-summary-tile-primary-val">
                  <h2>{executiveSummaryData.linearReach[0].views}</h2>
                </div>
                <div className="executive-summary-tile-secondary-val">
                  <p className="executive-summary-tile-secondary-val-perneg">
                    {executiveSummaryData.linearReach[0].different}
                  </p>
                  <p className="executive-summary-tile-secondary-val-num">
                    Prev. {executiveSummaryData.linearReach[0].prev}
                  </p>
                </div>
              </div>

              <div className="executive-summary-tile">
                <div className="executive-summary-tile-name">
                  <h4>{executiveSummaryData.linearWatchTime[0].title}</h4>
                </div>
                <div className="executive-summary-tile-primary-val">
                  <h2>{executiveSummaryData.linearWatchTime[0].time}</h2>
                </div>
                <div className="executive-summary-tile-secondary-val">
                  <p className="executive-summary-tile-secondary-val-perneg">
                    {executiveSummaryData.linearWatchTime[0].different}
                  </p>
                  <p className="executive-summary-tile-secondary-val-num">
                    Prev. {executiveSummaryData.linearWatchTime[0].prev}
                  </p>
                </div>
              </div>

              <div className="update-detail">
                <small className="d-block">
                  Updated as on :{" "}
                  {executiveSummaryData.updateDate[0].updated_on}
                </small>
                <small className="d-block">
                  Next update expected by{" "}
                  {executiveSummaryData.updateDate[0].expected_update}
                </small>
              </div>
            </>
          )}
      </div>
      <ExecutiveSummaryDigital selectedFilterDate={selectedFilterDate} />

    </div>
  );
};

export default ExecutiveSummary;
