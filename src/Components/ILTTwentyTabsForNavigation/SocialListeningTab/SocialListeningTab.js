import React, { useEffect, useState } from "react";
import "./SocialListeningTab.css";
import DonutChart from "../../Charts/DonutChart";
import GroupedBar from "../../Charts/GroupedBar";
import LineChart from "../../Charts/LineChart";
import WordsCloud from "./WordsCloud";
import ConsumerTrack from "./ConsumerTrack";
import SocialListeningTotalCards from "./SocialListeningTotalCards";
import ILTTwentySummaryServices from "../../../Services/ILTTwentySummaryServices";
import QualitativeInputs from "./QualitativeInputs";
import SocialListeningText from "./SocialListeningText";

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
  console.log(socialListingFetchData);

  return (
    <div>
      {socialListingFetchData !== null && (
        <div>
          <div className="social-listening-tile">
            <SocialListeningTotalCards
              socialListingFetchData={
                socialListingFetchData[0].total_numbers.mentions
              }
            />
            <SocialListeningTotalCards
              socialListingFetchData={
                socialListingFetchData[0].total_numbers.distinct_users
              }
            />
            <SocialListeningTotalCards
              socialListingFetchData={
                socialListingFetchData[0].total_numbers.engagement
              }
            />
          </div>

          <div className="social-listening-tile" >
            
            {/* <GroupedBar/> */}

            <LineChart/>
          
            <DonutChart
              donutChart={socialListingFetchData[0].chart_data.donut_chart.data}
            />
            <WordsCloud
              wordsCloud={socialListingFetchData[0].chart_data.words_cloud.data}
            />
            <ConsumerTrack
              consumerTrackData={
                socialListingFetchData[0].chart_data.consumer_track.data
              }
              />



          </div>


          <div className="border" >
            <QualitativeInputs
              qualitativeInputData={
                socialListingFetchData[0].chart_data.qualitative_input.data
              }
            />
            <SocialListeningText />
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialListeningTab;
