import React from "react";

const SocialListeningTotalCards = (props) => {
  const { socialListingFetchData } = props;

  return (
    <div className="social-listening-title" style={{marginBottom: '0px'}}>
      <h4>{socialListingFetchData.title}</h4>
      <div className="executive-summary-tile-primary-val">
        <h2>{socialListingFetchData.views}</h2>
      </div>
      <div className="executive-summary-tile-secondary-val">
        <p className="executive-summary-tile-secondary-val-perneg">
          {socialListingFetchData.different}
        </p>
        <p className="executive-summary-tile-secondary-val-num">
          {socialListingFetchData.prev}
        </p>
      </div>
    </div>
  );
};

export default SocialListeningTotalCards;
