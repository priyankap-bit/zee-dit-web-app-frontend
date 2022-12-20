import { useState,useEffect } from 'react';
import "./ExecutiveSummary.css";

import { async } from "q";
import ILTTwentySummaryServices from "../../Services/ILTTwentySummaryServices";
import ExecutiveSummaryDigital from "./ExecutiveSummaryDigital";

const ExecutiveSummary = (props) => {
  const [executiveSummaryData, setExecutiveSummaryData] = useState({
    linearReach: null,
    linearWatchTime: null,
    updateDate: null,
  });

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
      <ExecutiveSummaryDigital />
    </div>
  );
};

export default ExecutiveSummary;
