import { async } from "q";
import React, { useEffect, useState } from "react";
import ILTTwentySummaryServices from "../../Services/ILTTwentySummaryServices";
import CumulativePerformanceChart from "./CumulativePerformanceChart";

const ExecutiveSummaryDigital = () => {
  const [LineData, setLineData] = useState(null);
  const [executiveSummaryData, setExecutiveSummaryData] = useState({
    digitalViewers: null,
    digitalWatchTime: null,
  });

  useEffect(() => {
    const executiveSummaryDigital = async () => {
      let digitalViewers = await ILTTwentySummaryServices.getDigitalViewers(),
        digitalWatchTime = await ILTTwentySummaryServices.getDigitalWatchTime();

      setLineData(
        await ILTTwentySummaryServices.getCumulativePerformanceData()
      );

      setExecutiveSummaryData({
        digitalViewers,
        digitalWatchTime,
      });
    };

    executiveSummaryDigital();
  }, []);

  // LINE CHART

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
          {LineData !== null && (
            <div className="chart-container">
              <CumulativePerformanceChart LineData={LineData} />
              <CumulativePerformanceChart LineData={[0, 50, 90, 150, 500, 0]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummaryDigital;
