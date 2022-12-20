import { useEffect, useState } from "react";
import ILTTwentySummaryServices from "../../Services/ILTTwentySummaryServices";
import "./RealTimeMatchUpdate.css";

const RealTimeMatchUpdate = (props) => {
  const [realTimeMatchUpdateSummary, setRealTimeMatchUpdateSummary] = useState({
    viewers: null,
    watchTime: null,
    adImpressions: null,
    updateDetails: null,
  });

  useEffect(() => {
    const getRealTimeMatchUpdates = async () => {
      let viewers = await ILTTwentySummaryServices.getViewers(),
        watchTime = await ILTTwentySummaryServices.getWatchTime(),
        adImpressions = await ILTTwentySummaryServices.getAdImpressions(),
        updateDetails = await ILTTwentySummaryServices.getUpdateNextUpdate();

      setRealTimeMatchUpdateSummary({
        viewers,
        watchTime,
        adImpressions,
        updateDetails
      });
    };

    getRealTimeMatchUpdates();
  }, []);

  // if(realTimeMatchUpdateSummary.viewers !== null){
  //   console.log(realTimeMatchUpdateSummary.viewers[0].yesterday);
  //   console.log(realTimeMatchUpdateSummary.watchTime[0].yesterday);
  //   console.log(realTimeMatchUpdateSummary.adImpressions[0].yesterday);
  // }

  return (
    <div className="real-time-match-update-container">
      {realTimeMatchUpdateSummary.viewers !== null &&
        realTimeMatchUpdateSummary.watchTime !== null &&
        realTimeMatchUpdateSummary.adImpressions !== null &&
        realTimeMatchUpdateSummary.updateDetails !== null &&(
          <>
            <div className="real-time-container">
              <div class="realtime-update-summary-item">
                <img
                  src="/static/images/logos/Viewers.svg"
                  height={50}
                  alt="Viewers Logo"
                />
                <p className="realtime-update-title">Viewers</p>
                <h2 className="realtime-update-api">
                  {realTimeMatchUpdateSummary.viewers[0].yesterday}
                </h2>
              </div>
              <div class="realtime-update-summary-item">
                <img
                  src="/static/images/logos/Watchtime.svg"
                  height={50}
                  alt="Viewers Logo"
                />
                <p className="realtime-update-title">Watch Time</p>
                <h2 className="realtime-update-api">
                  {realTimeMatchUpdateSummary.watchTime[0].yesterday}
                </h2>
              </div>
              <div class="realtime-update-summary-item">
                <img
                  src="/static/images/logos/Ads.svg"
                  height={50}
                  alt="Viewers Logo"
                />
                <p className="realtime-update-title">Ad Impressions</p>
                <h2 className="realtime-update-api">
                  {realTimeMatchUpdateSummary.adImpressions[0].yesterday}
                </h2>
              </div>
            </div>

            <div className="realtime-update-timeline update-detail">
              <div className="realtime-update-timeline-child">
                <span>Updated as on</span>
                <h3>{realTimeMatchUpdateSummary.updateDetails[0].update.time}</h3>
                <span>{realTimeMatchUpdateSummary.updateDetails[0].update.date}</span>
              </div>
              <div className="realtime-update-timeline-child">
                <span>Next updated expected by</span>
                <h3>{realTimeMatchUpdateSummary.updateDetails[0].nextUpdate.time}</h3>
                <span>{realTimeMatchUpdateSummary.updateDetails[0].nextUpdate.date}</span>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default RealTimeMatchUpdate;
