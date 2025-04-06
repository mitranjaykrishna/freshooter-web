import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
);

const TotalOrderCard = () => {
  const labels = ["", "", "", "", "", "", "", "", ""];

  const data = {
    labels,
    datasets: [
      {
        label: "sale-1",
        data: [10, 20, 35, 25, 40, 38, 50, 42, 47],
        borderColor: "#01544f",
        borderWidth: 1.9,
        tension: 0.4,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(1, 84, 79, 0.3)");
          gradient.addColorStop(1, "rgba(1, 84, 79, 0)");
          return gradient;
        },
        pointRadius: 0,
        pointHoverRadius: 5,
      },
      {
        label: "sale-2",
        data: [12, 18, 30, 28, 36, 34, 46, 40, 44],
        borderColor: " #ecc313",
        borderWidth: 1.9,
        tension: 0.4,
        borderDash: [6, 6],
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#ffffff",
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          title: (tooltipItems) => `${tooltipItems[0].label}`,
          label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
        },
        titleAlign: "center",
        bodyAlign: "left",
        cornerRadius: 6,
        boxPadding: 6,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-400 font-medium">Total Order</h3>
        <button className="text-teal-900 font-semibold text-sm">
          View Report
        </button>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-1">35,452</h2>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-red-500 text-lg">↙</span>
        <span className="text-gray-500 text-sm">15.00% from last month</span>
      </div>
      <div className="h-[100px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalOrderCard;
