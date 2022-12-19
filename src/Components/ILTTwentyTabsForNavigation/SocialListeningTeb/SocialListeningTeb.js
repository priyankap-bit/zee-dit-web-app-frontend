import { useState } from 'react';

import './SocialListeningTeb.css';

const SocialListeningTeb = (props) => {

    return (      
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

    )

}

export default SocialListeningTeb;