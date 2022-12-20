import { useState } from 'react';
import DonutChart from '../../Charts/DonutChart';

import './SocialListeningTab.css';

const SocialListeningTab = (props) => {

    return (      
        <div className="social-listening-tile">
          <div className="social-listening-title">
            <h4>Total Mentions</h4>
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
          <div className="social-listening-title">
            <h4>Total Distinct Users</h4>
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
          <div className="social-listening-title">
            <h4>Total Engagement</h4>
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
         
          {/* <div>
            <DonutChart/>
          </div>
           */}
        </div>

    )

}

export default SocialListeningTab;