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
            <table className="executive-summary-content-linear-contents-table">
                <thead className="executive-summary-content-linear-contents-t-headers">
                    <tr>
                        <th className="executive-summary-content-linear-contents-t-shows-header">Shows</th>
                        <th className="executive-summary-content-linear-contents-t-header">Reach ‘000</th>
                        <th className="executive-summary-content-linear-contents-t-header">GRP</th>
                        <th className="executive-summary-content-linear-contents-t-header">Reach %<span className="exe-sum-lin-con-h-lbr">(Acquisition)</span></th>
                        <th className="executive-summary-content-linear-contents-t-header">TSV<span className="exe-sum-lin-con-h-lbr">(M min.) (Engagement)</span></th>
                        <th className="executive-summary-content-linear-contents-t-header">GRP Adbreak</th>
                    </tr>
                </thead>
                <tbody className="executive-summary-content-linear-contents-t-body">
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Bhagya lakshm</td>
                        <td><FrontBar data={220} total={total} /></td>
                        <td><FrontBar data={340} total={total} /></td>
                        <td><FrontBar data={290} total={total} /></td>
                        <td><FrontBar data={320} total={total} /></td>
                        <td><FrontBar data={320} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr className="executive-summary-content-linear-contents-t-body-rows">
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExecutiveSummaryContentLinearContents;