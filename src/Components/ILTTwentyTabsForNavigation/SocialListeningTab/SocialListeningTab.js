import { async } from "q";
import React, { useEffect, useState } from "react";
import ILTTwentySummaryServices from "../../../Services/ILTTwentySummaryServices";
import DonutChart from "../../Charts/DonutChart";

import "./SocialListeningTab.css";

const SocialListeningTab = (props) => {
  const [socialListingFetchData, setSocialListingFetchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setSocialListingFetchData(
        await ILTTwentySummaryServices.getSocialListening()
      );
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="social-listening-tile">
        {socialListingFetchData !== null && (
          <>
            <div className="social-listening-title">
              <h4>{socialListingFetchData[0].mentions.title}</h4>
              <div className="executive-summary-tile-primary-val">
                <h2>{socialListingFetchData[0].mentions.views}</h2>
              </div>
              <div className="executive-summary-tile-secondary-val">
                <p className="executive-summary-tile-secondary-val-perneg">
                  {socialListingFetchData[0].mentions.different}
                </p>
                <p className="executive-summary-tile-secondary-val-num">
                  {socialListingFetchData[0].mentions.prev}
                </p>
              </div>
            </div>
            <div className="social-listening-title">
              <h4>{socialListingFetchData[0].distinct_users.title}</h4>
              <div className="executive-summary-tile-primary-val">
                <h2>{socialListingFetchData[0].distinct_users.views}</h2>
              </div>
              <div className="executive-summary-tile-secondary-val">
                <p className="executive-summary-tile-secondary-val-perneg">
                  {socialListingFetchData[0].distinct_users.different}
                </p>
                <p className="executive-summary-tile-secondary-val-num">
                  Prev. {socialListingFetchData[0].distinct_users.prev}
                </p>
              </div>
            </div>
            <div className="social-listening-title">
              <h4>{socialListingFetchData[0].engagement.title}</h4>
              <div className="executive-summary-tile-primary-val">
                <h2>{socialListingFetchData[0].engagement.views}</h2>
              </div>
              <div className="executive-summary-tile-secondary-val">
                <p className="executive-summary-tile-secondary-val-perneg">
                  {socialListingFetchData[0].engagement.different}
                </p>
                <p className="executive-summary-tile-secondary-val-num">
                  Prev. {socialListingFetchData[0].engagement.prev}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="social-listening-tile">
        <DonutChart />
      </div>
    </div>
  );
};

export default SocialListeningTab;
