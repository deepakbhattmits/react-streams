// /** @format */

// import React, { useRef, useEffect, useCallback } from 'react';
// import { Chart } from 'chart.js';
// const BarChart = () => {
// 	// var style = window.getComputedStyle(document.body);
// 	// var color = style.getPropertyValue('--color-scheme-white');
// 	// console.log('%c  BarChart  :   >  ', window, color);
// 	const DateArr = [
// 		'12:00 am',
// 		'01:00 am',
// 		'02:00 am',
// 		'03:00 am',
// 		'04:00 am',
// 		'05:00 am',
// 		'06:00 am',
// 		'07:00 am',
// 		'08:00 am',
// 	];
// 	const chart = useRef();
// 	const formatString = (indx) => {
// 		return DateArr[indx].toUpperCase();
// 	};
// 	const stacked = useCallback(
// 		(ctx) => {
// 		new Chart(ctx, {
// 			type: 'bar',
// 			data: {
// 				labels: [
// 					'JAN',
// 					'FEB',
// 					'MARCH',
// 					'APR',
// 					'JULY',
// 					'AUG',
// 					'SEPT',
// 					'OCT',
// 					'NOV',
// 				],
// 				datasets: [
// 					{
// 						label: 'MIM',
// 						//  label: ['10:11AM', '10:35AM', '11:00AM', '11:30AM'],
// 						borderRadius: 0,
// 						backgroundColor: 'cyan',
// 						data: [20, 20, 20, 20, 20, 20, 20, 20, 20],
// 					},
// 					{
// 						label: 'ANALYST',
// 						// label: ['10:00AM', '10:30AM', '11:00AM', '11:30AM'],
// 						backgroundColor: 'blue',
// 						data: [20, 20, 20, 20, 20, 20, 20, 20, 20],
// 					},
// 					{
// 						label: 'Employee',
// 						// label: ['10:00AM', '10:30AM', '11:00AM', '11:30AM'],
// 						backgroundColor: '#caf270',
// 						data: [47, 47, 47, 47, 47, 47, 47, 47, 47],
// 					},
// 					{
// 						label: 'Engineer',

// 						backgroundColor: '#45c490',
// 						borderRadius: 1,
// 						data: [86, 86, 86, 86, 86, 86, 86, 86, 86],
// 					},
// 					{
// 						label: 'Government',

// 						backgroundColor: '#008d93',
// 						data: [65, 65, 65, 65, 65, 65, 65, 65, 65],
// 					},
// 					{
// 						label: 'Political parties',
// 						backgroundColor: '#2e5468',
// 						data: [12, 12, 12, 12, 12, 12, 12, 12, 12],
// 					},
// 				],
// 			},
// 			options: {
// 				tooltips: {
// 					displayColors: true,
// 					callbacks: {
// 						mode: 'index',
// 					},
// 				},
// 				scales: {
// 					xAxes: [
// 						{
// 							barPercentage: 0.5,
// 							stacked: true,
// 							gridLines: {
// 								display: false,
// 							},
// 						},
// 					],
// 					yAxes: [
// 						{
// 							stacked: true,
// 							maxBarThickness: 1,
// 							ticks: {
// 								fontFamily: "'Open Sans', sans-serif",
// 								fontSize: 15,
// 								fontStyle: 'bold',
// 								fontColor: 'green',
// 								beginAtZero: true,
// 								padding: 10,
// 								stepSize: 31.3,
// 								callback: function (label, index, labels) {
// 									return formatString(index);
// 								},
// 							},
// 						},
// 					],
// 				},
// 				responsive: true,
// 				maintainAspectRatio: false,
// 				legend: { display: true, position: 'bottom' },
// 			},
// 		});
// 	},[formatString]);

// 	useEffect(() => {
// 		const ctx = chart.current;
// 		stacked(ctx);
// 	}, [stacked]);
// 	return (
// 		<div data-testid='canvas-container'>
// 			<canvas ref={chart} height={350}></canvas>
// 		</div>
// 	);
// };

const BarChart = () => <>
	<h1>barchart</h1>
</>;
export default BarChart;
