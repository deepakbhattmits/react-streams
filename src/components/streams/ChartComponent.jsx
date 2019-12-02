import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
    const chartData = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'apples',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(153,255,51,0.6)",
            borderColor: [
                'rgba(255, 99, 132, .5)',
                'rgba(54, 162, 235, .6)',
                'rgba(255, 206, 86, .7)',
                'rgba(75, 192, 192, .8)',
                'rgba(153, 102, 255, .5)',
                'rgba(255, 159, 64, .4)'
            ],
            borderWidth: 10
        }, {
            label: 'oranges',
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: "rgba(255,153,0,0.6)",
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, .9)',
                'rgba(255, 206, 86, .8)',
                'rgba(75, 192, 192, .7)',
                'rgba(153, 102, 255, .6)',
                'rgba(255, 159, 64, .5)'
            ],
            borderWidth: 10
        }]
    }
    const options = {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            position: 'right',
            labels: {
                boxWidth: 10,
            }
        }
    }
    return (
        <>
            <Line data={chartData} options={options} width={600} height={250} />
        </>
    );
}
export default ChartComponent;