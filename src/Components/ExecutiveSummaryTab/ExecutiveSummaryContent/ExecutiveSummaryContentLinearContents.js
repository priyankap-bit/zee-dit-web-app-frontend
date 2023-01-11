import React from "react";
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";

const ExecutiveSummaryContentLinearContents = () => {
    return (
        <div>
            <div className="d-flex flex-row-reverse bd-highlight">
                <h6 className="p-2 bd-highlight">Reach & Ratings</h6>
                <h6 className="p-2 bd-highlight">Impact on Consumer Journey</h6>
                <h6 className="p-2 bd-highlight">Impact on Monetization</h6>
            </div>
            <div className="d-flex">
                <div className="mx-5">
                    <p>Shows</p>
                </div>
                <div className="mx-5">
                    <p>Reach ‘000</p>
                </div>
                <div className="mx-5">
                    <p>GRP</p>
                </div>
                <div className="mx-5">
                    <p>Reach %(Acquisition)</p>
                </div>
                <div className="mx-5">
                    <p>TSV(M min.) (Engagement)</p>
                </div>
                <div className="mx-5">
                    <p>GRP Adbreak</p>
                </div>
            </div>
            <FrontBar />
        </div>
    )
}

export default ExecutiveSummaryContentLinearContents;