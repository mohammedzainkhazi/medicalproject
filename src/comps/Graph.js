import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const Graph = () => {	
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1",
			title:{
				text: "Patient Data"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: 90,
				dataPoints: [
					{ y: 20, label: "Spo2" },
					{ y: 24, label: "Heart Beat" },
					{ y: 20, label: "Blood Pressure" },
					{ y: 14, label: "Sugar" },
					{ y: 12, label: "Activities" },
					{ y: 10, label: "Misc" }	
				]
			}]
		}
		
		return (
		<div className='mt-20'>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
 
export default Graph;                           