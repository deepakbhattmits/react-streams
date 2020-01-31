/** @format */

import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
const BarChart = () => {
	// console.log('test ');
	const chart = useRef();
	const stacked = ctx => {
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [
					'JAN',
					'FEB',
					'MARCH',
					'APR',
					'JULY',
					'AUG',
					'SEPT',
					'OCT',
					'NOV'
				],
				datasets: [
					{
						label: 'MIM',
						// label: ['10:01AM', '10:30AM', '11:00AM', '11:30AM'],
						borderRadius: 0,
						backgroundColor: 'cyan',
						data: [20, 20, 20, 20, 20, 20, 20, 20, 20]
					},
					{
						label: 'ANALYST',
						// label: ['10:00AM', '10:30AM', '11:00AM', '11:30AM'],
						backgroundColor: 'blue',
						data: [20, 20, 20, 20, 20, 20, 20, 20, 20]
					},
					{
						label: 'Employee',
						// label: ['10:00AM', '10:30AM', '11:00AM', '11:30AM'],
						backgroundColor: '#caf270',
						data: [47, 47, 47, 47, 47, 47, 47, 47, 47]
					},
					{
						label: 'Engineer',

						backgroundColor: '#45c490',
						borderRadius: 1,
						data: [86, 86, 86, 86, 86, 86, 86, 86, 86]
					},
					{
						label: 'Government',

						backgroundColor: '#008d93',
						data: [65, 65, 65, 65, 65, 65, 65, 65, 65]
					},
					{
						label: 'Political parties',
						backgroundColor: '#2e5468',
						data: [12, 12, 12, 12, 12, 12, 12, 12, 12]
					}
				]
			},
			options: {
				tooltips: {
					displayColors: true,
					callbacks: {
						mode: 'x'
					}
				},
				scales: {
					xAxes: [
						{
							barPercentage: 0.5,
							stacked: true,
							gridLines: {
								display: false
							}
						}
					],
					yAxes: [
						{
							stacked: true,
							maxBarThickness: 1,
							ticks: {
								beginAtZero: true
							},
							type: 'linear'
						}
					]
				},
				responsive: true,
				maintainAspectRatio: false,
				legend: { display: false, position: 'bottom' }
			}
		});
	};

	useEffect(() => {
		const ctx = chart.current;
		stacked(ctx);
	}, []);
	return (
		<>
			<canvas ref={chart}></canvas>
		</>
	);
};
export default BarChart;
