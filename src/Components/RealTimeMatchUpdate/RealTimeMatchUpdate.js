import { useEffect, useState } from "react";
import ILTTwentySummaryServices from "../../Services/ILTTwentySummaryServices";
import LineChart from "../Charts/LineChart/LineChart";
import LinecharNormal from "../Charts/LineChart";
import "./RealTimeMatchUpdate.css";

const RealTimeMatchUpdate = (props) => {

  // const { selectedFilterDate } = props;

  const [realTimeMatchUpdateSummary, setRealTimeMatchUpdateSummary] = useState({
    viewers: null,
    watchTime: null,
    adImpressions: null,
    peakConcurrency: null,
  });

  const [selectedMatch, setSelectedMatch] = useState('matchOne');

  const handleMatchSelectionClick = (matchName, event) => {
    event.preventDefault();
    setSelectedMatch(matchName)
  }

  useEffect(() => {
    // const getRealTimeMatchUpdates = async () => {
    //   let viewers = await ILTTwentySummaryServices.getViewers(),
    //     watchTime = await ILTTwentySummaryServices.getWatchTime(),
    //     adImpressions = await ILTTwentySummaryServices.getAdImpressions(),
    //     peakConcurrency = await ILTTwentySummaryServices.getPeakConcurrency();

    //   setRealTimeMatchUpdateSummary({
    //     viewers,
    //     watchTime,
    //     adImpressions,
    //     peakConcurrency
    //   });
    // };

    // getRealTimeMatchUpdates();
  }, []);

  if (realTimeMatchUpdateSummary.viewers !== null) {
    console.log(realTimeMatchUpdateSummary.viewers[0].yesterday);
    console.log(realTimeMatchUpdateSummary.watchTime[0].yesterday);
    console.log(realTimeMatchUpdateSummary.adImpressions[0].yesterday);
  }

  return (
    <div className="real-time-match-update-container">
      {realTimeMatchUpdateSummary.viewers !== null &&
        realTimeMatchUpdateSummary.watchTime !== null &&
        realTimeMatchUpdateSummary.adImpressions !== null &&
        realTimeMatchUpdateSummary.updateDetails !== null && (
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
      <div className="real-time-match-update-match-name-cont">

        <div className={
          selectedMatch === "matchOne" ?
            "real-time-match-update-match-name-active" :
            "real-time-match-update-match-name-inactive"}
          onClick={event => handleMatchSelectionClick('matchOne', event)}
        >
          <div className="match-number-active">
            <h4>Match 1</h4>
          </div>
          <div className="match-icon-container">
            <div className="team-icon">
              <img src="/static/images/teams/CSK.png" alt="CKS" height={50} />
            </div>
            <div className="team-vs"><h5>VS</h5></div>
            <div className="team-icon">
              <img src="/static/images/teams/MI.png" alt="MI" height={50} />
            </div>
          </div>
        </div>

        <div className={
          selectedMatch !=="matchOne" ?
            "real-time-match-update-match-name-active" :
            "real-time-match-update-match-name-inactive"}
          onClick={event => handleMatchSelectionClick('matchTwo', event)}
        >
          <div className="match-number-inactive">
            <h4>Match 2</h4>
          </div>
          <div className="match-icon-container">
            <div className="team-icon">
              <img src="/static/images/teams/CSK.png" alt="CKS" height={50} />
            </div>
            <div className="team-vs"><h5>VS</h5></div>
            <div className="team-icon">
              <img src="/static/images/teams/MI.png" alt="MI" height={50} />
            </div>
          </div>
        </div>

      </div>
      <div className="real-time-match-update-match-data">

        <div className="real-time-match-update-info-container">
          <div className="real-time-match-update-info-div">
            <div className="real-time-match-update-info-title">
              <p>Viewers</p>
            </div>
            <div className="real-time-match-update-info-value">
              <p>0.3M</p>
            </div>
            <div className="real-time-match-update-info-chart">
              <LineChart />
            </div>
          </div>

          <div className="real-time-match-update-info-div">
            <div className="real-time-match-update-info-title">
              <p>Watch Time</p>
            </div>
            <div className="real-time-match-update-info-value">
              <p>0.3M</p>
            </div>
            <div className="real-time-match-update-info-chart">
              <LineChart />
            </div>
          </div>

          <div className="real-time-match-update-info-div">
            <div className="real-time-match-update-info-title">
              <p>Peak Concurrency</p>
            </div>
            <div className="real-time-match-update-info-value">
              <p>0.03M</p>
            </div>
            <div className="real-time-match-update-info-chart">
              <LineChart />
            </div>
          </div>

          <div className="real-time-match-update-info-div">
            <div className="real-time-match-update-info-title">
              <p>Ad Impressions</p>
            </div>
            <div className="real-time-match-update-info-value">
              <p>0.3M</p>
            </div>
            <div className="real-time-match-update-info-chart">
              <LineChart />
            </div>
          </div>
        </div>

        <div className="real-time-match-update-info-update">
          <p> Updated as on 21:42:14 13/01/23 Next update expected by 21:57:14 27/01/23</p>
        </div>
      </div>
      {/* <LineChart /> */}
      {/* <LinecharNormal /> */}
    </div>
  );
};

export default RealTimeMatchUpdate;
