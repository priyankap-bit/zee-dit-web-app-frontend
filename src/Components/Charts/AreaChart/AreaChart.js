import { useState, useEffect } from 'react';

import * as d3 from "d3";

import './AreaChart.css';
import { useRef } from 'react';

const AreaChart = (props) => {

    // const [LineData] = useState([0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);

    const { LineData = [2, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,40,0] } = props;

    const svgRef = useRef();

    useEffect(() => {
        // setting up svg
        const w = 330;
        const h = 60;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
        // .style('background', 'white')
        // .style('border-radius', '9px')
        // .style('margin-top', '50')
        // .style('box-shadow', '0px 0px 14px -2px #cfd5ff');
        //setting scaling
        const xScale = d3.scaleLinear()
            .domain([0, LineData.length - 1])
            .range([0, w]);
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0]);
        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal);
        //setting axes
        //setting up data for svg 
        svg.selectAll('.line')
            .data([LineData])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'rgb(148, 94, 210, 0.2)')
            .attr('stroke', '#945ED2')
            .attr('stroke-width', '1px')
            // .attr("d", d3.area().x(d => d).y0(yScale(0)).y1(d => d))
        // .attr('fill', 'rgb(148, 94, 210, 0.2)')
        // // .attr('opacity', '0.2')
        // .attr('stroke', '#945ED2')
        // // .attr('opacity', '1')
        // .attr('stroke-width', '2px');
    }, [LineData]);

    return (
        <div className='areachart-container'>
            <svg ref={svgRef}></svg>
        </div>
    )
    window.addEventListener('resize', LineData );
}

export default AreaChart;