import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const TotalRevenueCard = () => {
  const data = {
    labels: Array.from({ length: 14 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Current",
        data: [2, 4, 5, 6, 8, 7, 9, 6, 7, 6, 8, 9, 7, 8],
        backgroundColor: "#01544f",
        borderRadius: 2,
        barThickness: 4,
      },
      {
        label: "Previous",
        data: [1, 3, 4, 5, 6, 5, 7, 4, 5, 4, 6, 7, 5, 6],
        backgroundColor: "#d1d5db",
        borderRadius: 2,
        barThickness: 4,
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
      legend: { display: false },
      tooltip: {
        enabled: true,
        // callbacks: {
        //   label: (context) => `K${context.parsed.y}`,
        // },
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
      x: {
        display: false,
        grid: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h3 className="text-2xl font-bold text-gray-800">₹97,250.89</h3>
          <div className="flex items-center gap-1 text-green-600 mt-1 text-sm">
            <span className="text-base">&uarr;</span>
            60.00% from last month
          </div>
        </div>
        <button className="text-sm font-medium text-teal-800 hover:underline">
          View Report
        </button>
      </div>
      <div className="h-24">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalRevenueCard;
