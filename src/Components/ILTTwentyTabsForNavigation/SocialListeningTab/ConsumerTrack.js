import React from "react";

const ConsumerTrack = (props) => {
  const { consumerTrackData } = props;

  return (
    <div className="social-listening-title">
      <p>Consumer Track</p>
      {consumerTrackData.map((e, index) => (
        <div style={{ display: "flex", margin: "16px" }}>
          <label style={{width:'200px'}}>{e.rating}</label>
          <p>{e.percent}%</p>
          <div>
            <div >
              <progress className="consumer-track" value={e.percent} max={100} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsumerTrack;
