import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

const SalesChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: [
          4000, 4200, 3800, 3600, 3400, 3000, 4800, 4900, 5100, 5500, 6000,
          9000,
        ],
        borderColor: "#f59e0b",
        borderWidth: 1.5,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx: canvasCtx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = canvasCtx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(245, 158, 11, 0.3)");
          gradient.addColorStop(1, "rgba(245, 158, 11, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
      {
        label: "Sales",
        data: [
          2000, 3900, 3000, 7000, 6000, 6800, 5400, 5000, 4500, 7000, 2000,
          8900,
        ],
        borderColor: "#01544f",
        borderWidth: 1.5,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx: canvasCtx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = canvasCtx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(1, 84, 79, 0.3)");
          gradient.addColorStop(1, "rgba(1, 84, 79, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
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
        callbacks: {
          label: (context) => `K${context.parsed.y}`,
        },
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2000,
          color: "#6b7280",
        },
        grid: {
          color: "#e5e7eb",
          borderDash: [4, 4],
        },
        // borderDash: [4, 4],
      },
      x: {
        ticks: {
          color: "#374151",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Sales Chart</h2>
        <div className="flex items-center gap-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              <span className="text-sm text-gray-700 font-semibold">
                Revenue
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm text-gray-700 font-semibold">Sales</span>
            </div>
          </div>
          <select className="border rounded-md px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300">
            <option>Online Store</option>
          </select>
          <select className="border rounded-md px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300">
            <option>Last Year</option>
          </select>
        </div>
      </div>
      <div className="h-[350px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
