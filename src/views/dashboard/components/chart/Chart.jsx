import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

export const data = {
  labels: ["0", "5", "10", "15", "20", "25", "30"],
  datasets: [
    {
      label: "Ventas",
      data: [12, 19, 3, 5, 2, 30],
      backgroundColor: "#1a80da",
      borderColor: "#1a80da",
      borderWidth: 2,
    },
    {
      label: "Inversiones",
      data: [5, 12, 8, 10, 15, 20],
      backgroundColor: "#0b183a",
      borderColor: "#0b183a",
      borderWidth: 2,
    },
  ],
};

export const Chart = () => {
  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 5,
          beginAtZero: true,
        },
      },
      x: {
        display: false,
      },
    },

    legend: {
      display: false,
    },
  };
  return (
    <div className=" chart-rendimiento flex-grow-1 card rounded-box ms-4 ">
      <h3 className="chart-title">Rendimiento</h3>
      <Line data={data} options={options} />
    </div>
  );
};
