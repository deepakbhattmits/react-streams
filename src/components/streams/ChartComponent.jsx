/** @format */

import { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
const ChartComponent = () => {
  // console.log(' ChartComponent  : >');
  const chart = useRef();
  const [legend, setLegend] = useState([]);
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "apple",
        data: [11, 18, 3, 16, 5, 2, 2],
        backgroundColor: "rgba(153,255,51,0.6)",
        borderColor: ["rgba(153,255,51,1)"],
        borderWidth: 5,
      },
      {
        label: "oranges",
        data: [2, 29, 5, 5, 2, 3, 10],
        backgroundColor: "rgba(255,153,0,0.6)",
        borderColor: ["rgba(255,153,0,1)"],
        borderWidth: 5,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      position: "right",
      labels: {
        boxWidth: 10,
      },
    },
  };
  useEffect(() => {
    const component = chart;
    const legendItems = component.current.chartInstance.legend.legendItems;
    setLegend(legendItems);
  }, []);
  const handleClick = (e) => {
    const { id } = e.target;
    const component = chart;
    let legendItems = component.current.chartInstance.legend.legendItems;
    const chartInstance = component.current.chartInstance;
    const datasetIndex = legendItems.filter((el) => el.text === id);
    chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden =
      chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden === null
        ? true
        : !chartInstance.getDatasetMeta(datasetIndex[0].datasetIndex).hidden;
    chartInstance.update(); // re-draw chart to hide dataset

    legendItems = component.current.chartInstance.legend.legendItems;
    setLegend(legendItems);
  };
  return (
    <>
      <Line
        ref={chart}
        data={chartData}
        options={options}
        width={600}
        height={250}
      />

      <div className="custom-legends">
        {legend.length &&
          legend.map((item) => {
            return (
              <div
                id={item.text}
                className="legend-wrapper"
                key={item.text}
                onClick={handleClick}
              >
                <div
                  id={item.text}
                  className="legend"
                  style={{
                    borderWidth: ".25rem",
                    borderStyle: "solid",
                    borderColor: item.strokeStyle,
                    backgroundColor: item.fillStyle,
                  }}
                />
                <span
                  id={item.text}
                  className={`text --${
                    item.hidden ? "selected" : "unselected"
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
export default ChartComponent;
