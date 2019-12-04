import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { hi } from 'date-fns/locale';

const ChartComponent = () => {
    const chart = useRef();
    const [legend, setLegend] = useState([])
    const [text, setText] = useState('');
    const [hidden, setHidden] = useState(false);
    const chartData = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'apples',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(153,255,51,0.6)",
            borderColor: [
                'rgba(153,255,51,1)'
            ],
            borderWidth: 5
        }, {
            label: 'oranges',
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: "rgba(255,153,0,0.6)",
            borderColor: [
                'rgba(255,153,0,1)'
            ],
            borderWidth: 5
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
    useEffect(() => {
        const component = chart;
        const legendItems = component.current.chartInstance.legend.legendItems;
        setLegend(legendItems);
    }, [])
    const handleClick = e => {
        const { id } = e.target;
        const component = chart;
        const legendItems = component.current.chartInstance.legend.legendItems;
        const chartInstance = component.current.chartInstance;
        const datasetIndex = legendItems.filter(el =>
            el.text === id
        );
        const data = datasetIndex[0].text;
        const hidden = chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden === null ? true : !chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden;
        console.log('Test ', hidden)
        setHidden(hidden)
        setText(data)
        chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden =
            chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden === null ? true : !chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden
        chartInstance.update(); // re-draw chart to hide dataset

    }
    return (
        <>
            <Line ref={chart} data={chartData} options={options} width={600} height={250} />

            <div className="custom-legends">
                {legend.length &&
                    legend.map(item => {
                        return (
                            <div id={item.text} className='legend-wrapper' key={item.text}
                                onClick={handleClick}>
                                <div
                                    id={item.text}
                                    className='legend'
                                    style={{
                                        borderWidth: "0.25rem",
                                        borderStyle: "solid",
                                        borderColor: item.strokeStyle,
                                        backgroundColor: item.fillStyle
                                    }}

                                />
                                {console.log(item)}
                                <span id={item.text} className={`text --${text === item.text && !hidden ? 'selected' : 'unselected'}`} >
                                    {item.text}
                                </span>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
export default ChartComponent;