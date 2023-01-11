import React from "react";
import './ExecutiveSummaryContentLinearContents.css'
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";

const ExecutiveSummaryContentLinearContents = () => {
    const data = 300;
    const total = 500;
    return (
        <div className="executive-summary-content-linear-contents">
            <div className="executive-summary-content-linear-contents-headers">
                <h6 className="executive-summary-content-linear-contents-header">Reach & Ratings</h6>
                <h6 className="executive-summary-content-linear-contents-header">Impact on Consumer Journey</h6>
                <h6 className="executive-summary-content-linear-contents-header">Impact on Monetization</h6>
            </div>
            <div className="d-flex">
                <p className="mx-5">Shows</p>
                <p className="mx-5">Reach ‘000</p>
                <p className="mx-5">GRP</p>
                <p className="mx-5">Reach %(Acquisition)</p>
                <p className="mx-5">TSV(M min.) (Engagement)</p>
                <p className="mx-5">GRP Adbreak</p>
            </div>
            <div>
                <div className="d-flex">
                    <p>Kundli Bhagya</p>
                    <FrontBar data={100} total={total} />
                    <FrontBar data={300} total={total} />
                    <FrontBar data={200} total={total} />
                    <FrontBar data={300} total={total} />
                    <FrontBar data={420} total={total} />
                </div>
                <div className="d-flex">
                    <p>Bhagya lakshm</p>
                    <FrontBar data={220} total={total} />
                    <FrontBar data={340} total={total} />
                    <FrontBar data={290} total={total} />
                    <FrontBar data={320} total={total} />
                    <FrontBar data={320} total={total} />
                </div>
                <div className="d-flex">
                    <p>Kundli Bhagya</p>
                    <FrontBar data={100} total={total} />
                    <FrontBar data={300} total={total} />
                    <FrontBar data={200} total={total} />
                    <FrontBar data={300} total={total} />
                    <FrontBar data={420} total={total} />
                </div>
                <div className="d-flex">
                    <p>Kundli Bhagya</p>
                    <FrontBar data={220} total={total} />
                    <FrontBar data={340} total={total} />
                    <FrontBar data={290} total={total} />
                    <FrontBar data={320} total={total} />
                    <FrontBar data={320} total={total} />
                </div>
                <div className="d-flex">
                    <p>Kundli Bhagya</p>
                    <FrontBar data={100} total={total} />
                    <FrontBar data={300} total={total} />
                    <FrontBar data={200} total={total} />
                    <FrontBar data={300} total={total} />
                    <FrontBar data={420} total={total} />
                </div>
            </div>
        </div>
    )
}

export default ExecutiveSummaryContentLinearContents;