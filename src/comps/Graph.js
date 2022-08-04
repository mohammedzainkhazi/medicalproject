import React from 'react';
import CanvasJSReact from './canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const Graph = (props) => {	
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1",
			title:{
				text: "Patient Data"
			},
			data: [{
				type: props.type,
				indexLabel: "{label}: {y}%",		
				startAngle: 90,
				dataPoints: [
					{ y: 15, label: "Oxygen" },
					{ y: 10, label: "Heart Beat" },
					{ y: 40, label: "ECG" },
					{ y: 20, label: "Temperature" },
					{ y: 15, label: "Blood Pressure"},
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