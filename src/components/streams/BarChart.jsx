/** @format */

import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
const BarChart = () => {
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
						label: 'Employee',
						backgroundColor: '#caf270',
						data: [12, 59, 5, 56, 58, 12, 59, 87, 45]
					},
					{
						label: 'Engineer',
						backgroundColor: '#45c490',
						data: [12, 59, 5, 56, 58, 12, 59, 86, 23]
					},
					{
						label: 'Government',
						backgroundColor: '#008d93',
						data: [12, 59, 5, 56, 58, 12, 59, 65, 51]
					},
					{
						label: 'Political parties',
						backgroundColor: '#2e5468',
						data: [12, 59, 5, 56, 58, 12, 59, 12, 74]
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
							stacked: true,
							gridLines: {
								display: false
							}
						}
					],
					yAxes: [
						{
							stacked: true,
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
