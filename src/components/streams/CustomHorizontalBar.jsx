// /** @format */

// import React, { useState, useRef, useEffect } from 'react';
// import { HorizontalBar } from 'react-chartjs-2';
// const CustomHorizontalBar = () => {
// 	const chart = useRef();
// 	// console.log('CustomHorizontalBar :  >');
// 	const [legend, setLegend] = useState([]);
// 	var data = {
// 		labels: ['MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT', 'SUN'],
// 		datasets: [
// 			{
// 				label: 'Lunch',
// 				backgroundColor: ['rgba(255,153,0,1)'],
// 				borderWidth: 10,
// 				data: [3.2, 3.5, 2.4, 3.9, 3.3, 3.4, 3.2],
// 			},
// 			{
// 				label: '09:30 am - 10:00 am',
// 				backgroundColor: ['rgba(255,153,0,1)'],
// 				borderWidth: 10,

// 				data: [7.1, 7.5, 7.1, 7, 7, 7, 7],
// 			},
// 			{
// 				label: '11:00 am - 11:30 am',
// 				backgroundColor: 'yellow',
// 				borderColor: 'yellow',
// 				borderWidth: 10,

// 				data: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.4],
// 			},
// 			{
// 				label: '10:00 am - 10:30 am',
// 				backgroundColor: ['rgba(255,153,0,1)'],
// 				borderWidth: 10,

// 				data: [4, 4, 4, 4, 4, 4, 4],
// 			},
// 			{
// 				label: '10:30 am - 11:00 am',
// 				backgroundColor: ['rgba(255,153,0,1)'],
// 				borderWidth: 10,

// 				data: [5, 5, 5, 5, 5, 5, 5],
// 			},
// 			{
// 				label: '11:30 am - 12:00 pm ',
// 				backgroundColor: ['rgba(255,153,0,1)'],
// 				borderWidth: 10,
// 				data: [6.3, 6.3, 6.3, 6.3, 6.3, 6.3, 6.3],
// 			},
// 		],
// 	};

// 	useEffect(() => {
// 		const component = chart;
// 		const legendItems = component.current.chartInstance.legend.legendItems;
// 		setLegend(legendItems);
// 	}, []);
// 	const handleClick = (e) => {
// 		const { id } = e.target;
// 		const component = chart;
// 		let legendItems = component.current.chartInstance.legend.legendItems;
// 		const chartInstance = component.current.chartInstance;
// 		const datasetIndex = legendItems.filter((el) => el.text === id);
// 		chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden =
// 			chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden === null
// 				? true
// 				: !chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden;
// 		chartInstance.update(); // Redraw chart to hide dataset

// 		legendItems = component.current.chartInstance.legend.legendItems;
// 		setLegend(legendItems);
// 	};

// 	const options1 = {
// 		maintainAspectRatio: true,
// 		responsive: true,
// 		title: {
// 			display: false,
// 			text: 'Skills I am proficient with',
// 		},
// 		legend: {
// 			display: false,
// 			position: 'right',
// 			labels: {
// 				boxWidth: 10,
// 			},
// 		},
// 		tooltips: {
// 			position: 'nearest',
// 			displayColors: true,
// 			//   backgroundColor: 'black',
// 			enabled: true,
// 			mode: 'single',
// 			//   bodyFontSize: 15,
// 			//   bodyFontFamily: 'Gamja Flower',
// 			//   bodyFontColor: 'white',
// 			//   yPadding: 5,
// 			//   xPadding: 15,
// 			// cornerRadius: 10,
// 			//   bodyFontStyle: 'bold',
// 			callbacks: {
// 				// title: () => {
// 				//   return '';
// 				// },
// 				// label: (tooltipItems, data) => {
// 				//   return tooltipItems.yLabel;
// 				// }
// 			},
// 		},
// 		scales: {
// 			xAxes: [
// 				{
// 					categoryPercentage: 10,
// 					barPercentage: 5,
// 				},
// 				{
// 					id: 'y-axis-2',
// 					type: 'category',
// 					display: false,
// 					categoryPercentage: 10,
// 					barPercentage: 10,
// 					position: 'left',
// 					barThickness: 20,
// 					ticks: {
// 						display: false, //this will remove only the label
// 					},
// 					gridLines: {
// 						drawOnChartArea: true,
// 						display: false,
// 					},
// 					stacked: true,
// 				},
// 			],
// 			yAxes: [
// 				{
// 					gridLines: {
// 						drawOnChartArea: false,
// 						display: false,
// 					},
// 					barPercentage: 1,
// 					stacked: true,
// 				},
// 			],
// 		},
// 	};
// 	return (
// 		<>
// 			<ul>
// 				<li>DATE :</li>
// 				<li>9</li>
// 				<li>10</li>
// 				<li>11</li>
// 				<li>12</li>
// 				<li>13</li>
// 				<li>14</li>
// 				<li>15</li>
// 				<li>16</li>
// 				<li>17</li>
// 				<li>18</li>
// 			</ul>
// 			<HorizontalBar
// 				ref={chart}
// 				data={data}
// 				options={options1}
// 				width={600}
// 				height={100}
// 			/>
// 			<div className='custom-legends'>
// 				{legend.length &&
// 					legend.map((item) => {
// 						return (
// 							<div
// 								id={item.text}
// 								className='legend-wrapper'
// 								key={item.text}
// 								onClick={handleClick}>
// 								<div
// 									id={item.text}
// 									className='legend'
// 									style={{
// 										// borderWidth: '0.25rem',
// 										borderStyle: 'solid',
// 										borderColor: item.strokeStyle,
// 										backgroundColor: item.fillStyle,
// 									}}
// 								/>
// 								<span
// 									id={item.text}
// 									className={`text --${
// 										item.hidden ? 'selected' : 'unselected'
// 									}`}>
// 									{item.text}
// 								</span>
// 							</div>
// 						);
// 					})}
// 			</div>
// 		</>
// 	);
// };
const CustomHorizontalBar = () => <><h1>Custom HorizontalBar</h1></>;
export default CustomHorizontalBar;

