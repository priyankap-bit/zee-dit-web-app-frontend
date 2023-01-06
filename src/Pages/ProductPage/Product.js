import React from "react";
import './Product.css'

const Product = () => {
    return (
        <div>
            <div className="product-engagement">
                <div>
                    <h4>Charters</h4>
                    <div></div>
                </div>
                <div className="product-engagement-tabs">
                    <a href="#" className="product-engagement-anchor"><div className="product-engagement-div">Video</div></a>
                    <a href="#" className="product-engagement-anchor"><div className="product-engagement-div">Music</div></a>
                    <a href="#" className="product-engagement-anchor"><div className="product-engagement-div">Games</div></a>
                </div>
                <div className="product-engagement-indicators-and-experiance d-flex flex-row">
                    <div className="">
                        <p className="">Key Performance Indicators</p>
                        <div className="d-flex flex-row">
                        <div className="product-engagement-card">
                            <p>Watch Time</p>
                            <h2>322.6 Minutes</h2>
                            <p>6 % from last period</p>
                        </div>
                        <div className="product-engagement-card">
                            <p>Watch Time per Unique Viewer</p>
                            <h2>42.8 Minutes</h2>
                            <p>40% from last period</p>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <p>Start-up Experience</p>
                        <div className="d-flex flex-row">
                        <div className="product-engagement-card">
                            <p>Attempts (Mn)</p>
                            <h2>58.48 Mn</h2>
                            <p>31% from last period</p>
                        </div>
                        <div className="product-engagement-card">
                            <p>Plays %</p>
                            <h2>76.95%</h2>
                            <p>16% from last period</p>
                        </div>
                        <div className="product-engagement-card">
                            <p>Plays (Mn)</p>
                            <h2>Plays (Mn)</h2>
                            <p>11% from last period</p>
                        </div>
                        </div>
                    </div>
                    <div>
                        <p>Playback Experience</p>
                        <div className="d-flex flex-row">
                        <div className="product-engagement-card">
                            <p>Watch Time</p>
                            <h2>322.6 Minutes</h2>
                            <p>6 % from last period</p>
                        </div>
                        <div className="product-engagement-card">
                            <p>Watch Time per Unique Viewer</p>
                            <h2>42.8 Minutes</h2>
                            <p>40% from last period</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;