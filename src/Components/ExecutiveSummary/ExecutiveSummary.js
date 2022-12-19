import { useEffect, useState } from "react";
import "./ExecutiveSummary.css";
import * as d3 from "d3";

const ExecutiveSummary = (props) => {
  const [LineData] = useState([ 0, 44, 50, 51, 55, 54, 52, 50, 52, 55, 52, 50, 52, 49, 50, 53, 50,44, 50, 51, 55, 54, 52, 50, 52, 55, 52, 50, 52, 49, 50, 53, 50, 54, 55, 50, 51, 0]);
  

// LINE CHART
    useEffect(()=> {
      // setting up svg
        const w = 400;
        const h = 150;
        const svg = d3.select('.chart')
          .attr('width', w)
          .attr('height', h)
          .style('background', 'white')
          .style('border-radius', '9px')
          .style('margin-top', '50')
          .style('box-shadow', '0px 0px 14px -2px #cfd5ff');
      //setting scaling
        const xScale = d3.scaleLinear()
          .domain([0, LineData.length - 1])
          .range([0, w]);
        const yScale = d3.scaleLinear()
          .domain([0, h])
          .range([h, 0]);
        const generateScaledLine = d3.line()
          .x((d, i)=> xScale(i)) 
          .y(yScale)
          .curve(d3.curveCardinal); 
      //setting axes
      //setting up data for svg 
        svg.selectAll('.line')
      .data([LineData])
      .join('path')
      .attr('d', d => generateScaledLine(d))
      .attr('fill', 'rgb(192 233 192)')
      .attr('stroke', '#53d369')
      .attr('stroke-width', '2px');
}, [LineData]); 


  return (
    <div className="executive-summary-container">
      <div className="executive-summary-linear">
        <div className="executive-summary-linear-title">
        <img src="/static/images/logos/Linear-icon.svg" height={50} alt="Linear Logo"className="executive-summary-linear-image"/>
          <h3>Linear</h3>
        </div>
        <div className="executive-summary-linear-subtitle">
          <p>Day-wise Performance</p>
        </div>
        <div className="executive-summary-tile">
          <div className="executive-summary-tile-name">
            <h4>Reach</h4>
          </div>
          <div className="executive-summary-tile-primary-val">
            <h2>5.632 M</h2>
          </div>
          <div className="executive-summary-tile-secondary-val">
            <p className="executive-summary-tile-secondary-val-perneg">
              -39.9%
            </p>
            <p className="executive-summary-tile-secondary-val-num">
              Prev. 9.37K
            </p>
          </div>
        </div>
        <div className="executive-summary-tile">
          <div className="executive-summary-tile-name">
            <h4>Watch Time</h4>
          </div>
          <div className="executive-summary-tile-primary-val">
            <h2>5.632 M</h2>
          </div>
          <div className="executive-summary-tile-secondary-val">
            <p className="executive-summary-tile-secondary-val-perneg">
              -39.9%
            </p>
            <p className="executive-summary-tile-secondary-val-num">
              Prev. 9.37K
            </p>
          </div>
        </div>
        <div className="update-detail">
          <small className="d-block">Updated as on : 13/01/2023</small>
          <small className="d-block">Next update expected by 24/01/2023</small>
        </div>
      </div>
      <div className="executive-summary-digital">
        <div className="executive-summary-digital-title">
          <img src="/static/images/logos/Digital-icon.svg" height={50} alt="Digital Logo"className="executive-summary-linear-image"/>
          <h3>Digital</h3>
        </div>
        <div className="digital-daywise-and-cumulative">
          <div className="digital-performance">
            <div className="executive-summary-linear-subtitle">
              <p>Day-wise Performance</p>
            </div>
            <div className="executive-summary-tile">
              <div className="executive-summary-tile-name">
                <h4>Viewers</h4>
              </div>
              <div className="executive-summary-tile-primary-val">
                <h2>5.632 M</h2>
              </div>
              <div className="executive-summary-tile-secondary-val">
                <p className="executive-summary-tile-secondary-val-perneg">
                  -39.9%
                </p>
                <p className="executive-summary-tile-secondary-val-num">
                  Prev. 9.37K
                </p>
              </div>
            </div>
            <div className="executive-summary-tile">
              <div className="executive-summary-tile-name">
                <h4>Watch Time</h4>
              </div>
              <div className="executive-summary-tile-primary-val">
                <h2>5.632 M</h2>
              </div>
              <div className="executive-summary-tile-secondary-val">
                <p className="executive-summary-tile-secondary-val-perneg">
                  -39.9%
                </p>
                <p className="executive-summary-tile-secondary-val-num">
                  Prev. 9.37K
                </p>
              </div>
            </div>
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
    </div>
  );
};

export default ExecutiveSummary;
