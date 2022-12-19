import "./ExecutiveSummary.css";

const ExecutiveSummary = (props) => {
  return (
    <div className="executive-summary-container">
      <div className="executive-summary-linear">
        <div className="executive-summary-linear-title">
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
        <div className="update-detail">
          <small className="d-block">Updated as on : 13/01/2023</small>
          <small className="d-block">Next update expected by 24/01/2023</small>
        </div>
      </div>
      <div className="executive-summary-digital">
        <div className="executive-summary-digital-title">
          <h3>Digital</h3>
        </div>
        <div className="digital-daywise-and-cumulative">
          <div className="digital-performance">
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
          </div>
          <div className="digital-performance">
            <div className="executive-summary-linear-subtitle">
              <p>Cumulative Performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
