import React from "react";

const QualitativeInputs = (props) => {
  const { qualitativeInputData } = props;

  return (
    <div className="">
      <h3 style={{ textAlign: "center" }}>Qualitative Inputs</h3>
      <div className="social-listening-tile">
        {qualitativeInputData.map((e, index) => (
          <div className="social-listening-tile w-90">
            <div>
              <p style={{textAlign:'center', marginTop:'15px'}}>{e.rating}</p>
              <div className="" style={{ display: "flex", margin: "2px" }}>
                {/* <label style={{ width: "90%" }}>{e.rating}</label> */}
                {/* <p>{e.percent}%</p> */}
                <div>
                  <div>
                    <progress className="qualitative-input-chart" style={{width:'550px', height:'50px'}} value={e.percent} max={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualitativeInputs;
