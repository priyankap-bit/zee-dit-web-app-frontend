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
            <table className="">
                <thead className="">
                    <tr>
                        <th>Shows</th>
                        <th>Reach ‘000</th>
                        <th>GRP</th>
                        <th>Reach %(Acquisition)</th>
                        <th>TSV(M min.) (Engagement)</th>
                        <th>GRP Adbreak</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr>
                        <td>Bhagya lakshm</td>
                        <td><FrontBar data={220} total={total} /></td>
                        <td><FrontBar data={340} total={total} /></td>
                        <td><FrontBar data={290} total={total} /></td>
                        <td><FrontBar data={320} total={total} /></td>
                        <td><FrontBar data={320} total={total} /></td>
                    </tr>
                    <tr>
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr>
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr>
                        <td>Kundli Bhagya</td>
                        <td><FrontBar data={100} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={200} total={total} /></td>
                        <td><FrontBar data={300} total={total} /></td>
                        <td><FrontBar data={420} total={total} /></td>
                    </tr>
                    <tr>
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