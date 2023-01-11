import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import * as d3 from 'd3';
import { transition } from 'd3-transition';
import { scaleLinear } from 'd3-scale';

const FrontBar = () => {
    const ref = useRef();

    const data = 300;
    const width = 200;

    const total = 500;

    const margin = {
        top: 45,
        right: 0,
        bottom: 70,
        left: 0,
    };

    const barHeight = 37;
    const svgHeight = 140;

    // const parentWidth = 500;



    // const height = svgHeight - margin.top - margin.bottom;






    // const { xScale, barHeight } = props;


    useEffect(() => {
        const xScale = scaleLinear()
            .domain([0, total])
            .range([0, width])
            
        const node = ref.current;
        d3.select(node)
            .append('rect')
            .attr('class', 'bar')
            .attr('x', 0)
            .attr('y', 0)
            .attr('rx', 4)
            .attr('ry', 4)
            .attr('width', 0)
            .attr('height', barHeight);

        d3.select(node)
            .append('text')
            .attr('class', 'amount')
            .attr('x', 0)
            .attr('y', barHeight)
            .attr('dx', -10)
            .attr('dy', 2)
        //   const { data, xScale } = props;
        const t = transition().duration(300);

        d3.select('.bar')
            .transition(t).attr('width', xScale(data)).attr('fill', '#C996EB');

        d3.select('.amount')
            .transition(t)
            .attr('x', xScale(30))
            .attr('y', 20)
            .text(data);
    }, [])








    return (
        <>

            <div>
                <div>
                    {/* <button onClick={this.handleOnClick}>Randomize Data</button> */}
                    <svg
                        width={width + margin.left + margin.right}
                        height={svgHeight}
                    >
                        <g transform={`translate(${margin.left}, ${margin.top})`}>
                            <g className="budget-bar-group">
                                <rect x="0" y="0" width={width} height={barHeight} rx="0" ry="0" opacity="0.2" />
                                <text x={width} y="32" dy="-10" dx="-30">
                                    {total}
                                </text>
                                {/* <text x={width} y="0" dy="-30" dx="-55">
                                    (Total)
                                </text> */}
                            </g>
                            {/* <FrontBar
                                // {...{
                                //     xScale,
                                //     barHeight,
                                //     data,
                                // }}
                            /> */}
                            <g
                                ref={ref}
                                className="expenditure-bar-group"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default FrontBar;