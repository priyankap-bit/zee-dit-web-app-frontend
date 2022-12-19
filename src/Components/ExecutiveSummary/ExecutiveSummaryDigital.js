import { async } from "q";
import React, { useEffect, useState } from "react";
import ILTTwentySummaryServices from "../../Services/ILTTwentySummaryServices";

const ExecutiveSummaryDigital = () => {
  const [executiveSummaryData, setExecutiveSummaryData] = useState({
    digitalViewers: null,
    digitalWatchTime: null,
  });

  useEffect(() => {
    const executiveSummaryDigital = async () => {
      let digitalViewers = await ILTTwentySummaryServices.getDigitalViewers(),
        digitalWatchTime = await ILTTwentySummaryServices.getDigitalWatchTime();

      setExecutiveSummaryData({
        digitalViewers,
        digitalWatchTime,
      });
    };

    executiveSummaryDigital();
  }, []);
  console.log(executiveSummaryData);
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
  );
};

export default ExecutiveSummaryDigital;
