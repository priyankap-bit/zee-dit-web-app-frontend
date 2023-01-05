import { useState } from "react";
import ExecutiveSummary from "../../ExecutiveSummary/ExecutiveSummary";
import RealTimeMatchUpdate from "../../RealTimeMatchUpdate/RealTimeMatchUpdate";
import "./ViewershipPerformanceTab.css";

const ViewershipPerformanceTab = (props) => {
  const [activeTab, setActiveTab] = useState("executivesummary");

  const { selectedFilterDate } = props;

  const handleOnNavigationTabClick = (tab, event) => {
    tab === "realtimematchupdate"
      ? setActiveTab("realtimematchupdate")
      : setActiveTab("executivesummary");
  };

  // const handleOnExecutiveSumSelectChange = (event) => { }

  return (
    <div className="viewership-performance-tab-container">
      <div className="viewership-navigationtab-container">
        <div className="viewership-navigationtab-ul-div viewership-performance-indicators">
          <ul className="viewership-navigationtab-ul">
            <li
              className={
                activeTab === "executivesummary"
                  ? "viewership-navigation-tab-active"
                  : "viewership-navigation-tab-inactive"
              }
              onClick={() => handleOnNavigationTabClick("executivesummary")}
              style={{ alignSelf: "center" }}
            >
              Executive Summary
            </li>
            <li
              className={
                activeTab === "realtimematchupdate"
                  ? "viewership-navigation-tab-active"
                  : "viewership-navigation-tab-inactive"
              }
              onClick={() => handleOnNavigationTabClick("realtimematchupdate")}
              style={{ alignSelf: "center" }}
            >
             Match Updates
            </li>
          </ul>
          <ul className="indicators">
            <li className="viewership-performance-indicator">--- Avg.</li>
            <li
              className={
                activeTab === "executivesummary"
                  ? "viewership-performance-indicator"
                  : "display-none"
              }
            >
              <label className="indicator-match1"></label>Match 1
            </li>
            <li
              className={
                activeTab === "executivesummary"
                  ? "viewership-performance-indicator"
                  : "display-none"
              }
            >
              <label className="indicator-match2 pr-0"></label>Match 2
            </li>
          </ul>
        </div>

        {/* <div className='viewership-navigationtab-select-div'>
                    <select onChange={handleOnExecutiveSumSelectChange}>
                        <option value='market' selected>Market</option>
                        <option value='global'>Global</option>
                        <option value='india'>India</option>
                    </select>
                </div> */}
      </div>

      <div className="viewership-preformance-summary">
        {activeTab === "realtimematchupdate" ? (
          <RealTimeMatchUpdate selectedFilterDate={selectedFilterDate} />
        ) : (
          <ExecutiveSummary selectedFilterDate={selectedFilterDate} />
        )}
      </div>
      <div className="tableau-dashboard">
        <a href="http://pulse.zeeconnect.in/#/site/Zee5India/workbooks/1152/views" target="_blank" >
          Detailed Tableau Dashboard &nbsp;
          <svg
            style={{verticalAlign: 'sub'}}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ViewershipPerformanceTab;
