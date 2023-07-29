import React, { FC, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Exact days in current month
const numberOfDays = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return 29;
    }
    return 28;
  }
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }
  return 31;
};
const days = Array.from({ length: numberOfDays() }, (_, i) =>
  (i + 1).toString()
);

const hours = Array.from({ length: 24 }, (_, i) => (i + 1).toString());

const options = {
  responsive: true,
  scales: {
    x: {
      type: "category",
      ticks: {
        color: "#8A8A8A",
      },
    },
    y: {
      type: "linear",
      grid: {
        color: "#1A202C",
      },
      ticks: {
        color: "#8A8A8A",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export interface BarGraphProps {
  data?: any;
}
interface GraphData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}
const BarGraph: FC<BarGraphProps> = ({ data }) => {
  const [dataType, setDataType] = useState("1Y");

  const [graphData, setGraphData] = useState<GraphData>();

  const buttonClassName = "px-4 rounded py-2 text-white ";

  // get data for last 24 hours
  const getLast24HoursData = () => {
    const date = new Date();
    const twentyFourHoursAgo = new Date(date.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
    let tempData = new Array(24).fill(0);
    data?.forEach(
      (
        item: { date: string | number | Date; duration: number },
        index: number
      ) => {
        const itemDate = new Date(item.date);
        itemDate >= twentyFourHoursAgo && itemDate <= date
          ? (tempData[index] += item.duration)
          : 0;
      }
    );
    return tempData;
  };

  // get data for last 30 days
  const getLastOneMonthData = () => {
    const date = new Date();
    const thirtyDaysAgo = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
    let tempData = new Array(numberOfDays()).fill(0);
    const currentDay = moment().date();

    data?.forEach(
      (
        item: { date: string | number | Date; duration: number },
        index: number
      ) => {
        const itemDate = new Date(item.date);
        itemDate >= thirtyDaysAgo && itemDate <= date
          ? (tempData[
              (itemDate.getDate() + numberOfDays() - currentDay) %
                numberOfDays()
            ] += item.duration)
          : 0;
      }
    );
    return tempData;
  };

  // get data for last 12 months
  const getLastOneYearData = () => {
    const date = new Date();
    const oneYearAgo = new Date(date.getTime() - 365 * 24 * 60 * 60 * 1000); // 365 days ago
    let tempData = new Array(12).fill(0);
    const currentMonth = moment().month();
    data?.forEach(
      (
        item: { date: string | number | Date; duration: number },
        index: number
      ) => {
        const itemDate = new Date(item.date);
        itemDate >= oneYearAgo && itemDate <= date
          ? (tempData[(itemDate.getMonth() + 12 - currentMonth) % 12] +=
              item.duration)
          : 0;
      }
    );
    return tempData;
  };

  useEffect(() => {
    switch (dataType) {
      case "1D":
        setGraphData({
          labels: hours,
          datasets: [
            {
              label: "Seconds",
              data: getLast24HoursData() ?? [],
              backgroundColor: "#7C99E2",
            },
          ],
        });
        break;
      case "1M":
        const currentDay = moment().date();
        const last30days = [
          ...days.slice(currentDay),
          ...days.slice(0, currentDay),
        ];
        setGraphData({
          labels: last30days,
          datasets: [
            {
              label: "Seconds",
              data: getLastOneMonthData() ?? [],
              backgroundColor: "#7C99E2",
            },
          ],
        });
        break;
      case "1Y":
        const currentMonth = moment().month();
        const last12Months = [
          ...moment.monthsShort().slice(currentMonth + 1),
          ...moment.monthsShort().slice(0, currentMonth + 1),
        ];
        setGraphData({
          //last 12 months
          labels: last12Months,
          datasets: [
            {
              label: "Seconds",
              data: getLastOneYearData() ?? [],
              backgroundColor: "#7C99E2",
            },
          ],
        });
        break;
    }
  }, [data, dataType]);

  const handleDataTypeChange = (newDataType: React.SetStateAction<string>) => {
    setDataType(newDataType);
  };

  return (
    <div>
      <div className="p-4 flex gap-3 justify-end h-fit">
        <button
          onClick={() => handleDataTypeChange("1D")}
          className={`${buttonClassName} ${
            dataType === "1D" ? "bg-accent" : "bg-buttonBackground opacity-50"
          }`}
        >
          1D
        </button>
        <button
          onClick={() => handleDataTypeChange("1Y")}
          className={`${buttonClassName} ${
            dataType === "1Y" ? "bg-accent" : "bg-buttonBackground opacity-50"
          }`}
        >
          1Y
        </button>
        <button
          onClick={() => handleDataTypeChange("1M")}
          className={`${buttonClassName} ${
            dataType === "1M" ? "bg-accent" : "bg-buttonBackground opacity-50"
          }`}
        >
          1M
        </button>
      </div>

      {graphData && <Bar options={options as any} data={graphData} />}
    </div>
  );
};

export default BarGraph;
