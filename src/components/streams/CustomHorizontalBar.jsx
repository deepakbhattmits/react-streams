import React, { useState, useRef, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
const CustomHorizontalBar = () => {
  const chart = useRef();
  const [legend, setLegend] = useState([]);
  var data = {
    labels: ['09:00 am - 12:00 pm'],
    datasets: [
      {
        label: '09:00 am-09:30 am',
        backgroundColor: [
          'rgba(255,153,0,1)',
          'rgba(254,152,0,.9)',
          'rgba(253,151,0,.8)',
          'rgba(252,150,0,.7)'
        ],
        borderColor: '#F29220',
        borderWidth: 1,
        data: [3]
      },
      {
        label: '09:30 am - 10:00 am',
        backgroundColor: [
          'rgba(153,255,51,1)',
          'rgba(152,254,50,0.9)',
          'rgba(151,253,49,0.8)'
        ],
        borderColor: 'rgba(153,255,51,1)',
        borderWidth: 1,
        data: [7]
      },
      {
        label: '10:00 am - 10:30 am',
        backgroundColor: '#D00',
        borderColor: '#D00',
        borderWidth: 1,
        data: [4]
      },
      {
        label: '10:30 am - 11:00 am',
        backgroundColor: 'purple',
        borderColor: 'purple',
        borderWidth: 1,
        data: [5]
      },
      {
        label: '11:00 am - 11:30 am',
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 1,
        data: [8]
      },
      {
        label: '11:30 am - 12:00 pm ',
        backgroundColor: 'brown',
        borderColor: 'brown',
        borderWidth: 1,
        data: [6.3]
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
    title: {
      display: false,
      text: 'Skills I am proficient with '
    },
    legend: {
      display: false,
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
      // cornerRadius: 10,
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
          barPercentage: 0.3,
          stacked: true
        }
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
            display: false
          },
          barPercentage: 0.3,
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
                    // borderWidth: '0.25rem',
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
