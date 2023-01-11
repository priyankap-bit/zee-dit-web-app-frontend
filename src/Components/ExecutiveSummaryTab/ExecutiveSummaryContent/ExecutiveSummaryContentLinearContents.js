import React from "react";
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";

const ExecutiveSummaryContentLinearContents = () => {
    const data = 300;
    return (
        <div>
            <div className="d-flex flex-row-reverse bd-highlight">
                <h6 className="p-2 bd-highlight">Reach & Ratings</h6>
                <h6 className="p-2 bd-highlight">Impact on Consumer Journey</h6>
                <h6 className="p-2 bd-highlight">Impact on Monetization</h6>
            </div>
            <div className="d-flex">
                <p className="mx-5">Shows</p>
                <p className="mx-5">Reach ‘000</p>
                <p className="mx-5">GRP</p>
                <p className="mx-5">Reach %(Acquisition)</p>
                <p className="mx-5">TSV(M min.) (Engagement)</p>
                <p className="mx-5">GRP Adbreak</p>
            </div>
            <div className="d-flex">
                <p>Kundli Bhagya</p>
                <div><FrontBar data = {100}/></div>
                
                <FrontBar data = {200}/>
                <FrontBar data = {300}/>
                <FrontBar data = {400}/>
            </div>
        </div>
    )
}

export default ExecutiveSummaryContentLinearContents;