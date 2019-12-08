import React, { useState, useRef, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
const CustomHorizontalBar = () => {
  const chart = useRef();
  const [legend, setLegend] = useState([]);
  var data = {
    labels: ['Data1'],
    datasets: [
      {
        label: 'Apples',
        backgroundColor: '#F29220',
        borderColor: '#F29220',
        borderWidth: 1,
        data: [3]
      },
      {
        label: 'Bananas',
        backgroundColor: '#4365B0',
        borderColor: '#4365B0',
        borderWidth: 1,
        data: [7]
      },
      {
        label: 'Cookies',
        backgroundColor: '#D00',
        borderColor: '#D00',
        borderWidth: 1,
        data: [4]
      },
      {
        label: 'Cakes',
        backgroundColor: 'purple',
        borderColor: 'purple',
        borderWidth: 1,
        data: [5]
      },
      {
        label: 'Cld Drinks',
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 1,
        data: [8]
      }
    ]
  };

  useEffect(() => {
    const component = chart;
    const legendItems = component.current.chartInstance.legend.legendItems;
    setLegend(legendItems);
  }, []);
  const handleClick = e => {
    const { id } = e.target;
    const component = chart;
    let legendItems = component.current.chartInstance.legend.legendItems;
    const chartInstance = component.current.chartInstance;
    const datasetIndex = legendItems.filter(el => el.text === id);
    chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden =
      chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden === null
        ? true
        : !chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden;
    chartInstance.update(); // re-draw chart to hide dataset

    legendItems = component.current.chartInstance.legend.legendItems;
    setLegend(legendItems);
  };

  const options1 = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 10
      }
    },
    tooltips: {
      position: 'nearest',
      displayColors: true,
      //   backgroundColor: 'black',
      enabled: true,
      mode: 'single',
      //   bodyFontSize: 15,
      //   bodyFontFamily: 'Gamja Flower',
      //   bodyFontColor: 'white',
      //   yPadding: 5,
      //   xPadding: 15,
      //   cornerRadius: 4,
      //   bodyFontStyle: 'bold',
      callbacks: {
        // title: () => {
        //   return '';
        // },
        // label: (tooltipItems, data) => {
        //   return tooltipItems.yLabel;
        // }
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: true,
            display: true
          },
          barPercentage: 0.5,
          stacked: true
        }
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
            display: false
          },
          barPercentage: 0.5,
          stacked: true
        }
      ]
    }
  };
  return (
    <>
      <HorizontalBar
        ref={chart}
        data={data}
        options={options1}
        width={600}
        height={100}
      />
      <div className='custom-legends'>
        {legend.length &&
          legend.map(item => {
            return (
              <div
                id={item.text}
                className='legend-wrapper'
                key={item.text}
                onClick={handleClick}
              >
                <div
                  id={item.text}
                  className='legend'
                  style={{
                    borderWidth: '0.25rem',
                    borderStyle: 'solid',
                    borderColor: item.strokeStyle,
                    backgroundColor: item.fillStyle
                  }}
                />
                <span
                  id={item.text}
                  className={`text --${
                    item.hidden ? 'selected' : 'unselected'
                  }`}
                >
                  {item.text}
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default CustomHorizontalBar;
