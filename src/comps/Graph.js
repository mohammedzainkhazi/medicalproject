import React from 'react';
import CanvasJSReact from './canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
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
				type: "bar",
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
		<div className='mt-20' id="GRAPH">
			<CanvasJSChart options = {options}/>
		</div>
		);
	}
 
export default Graph;                           