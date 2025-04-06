import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TopRevenueProductCard = () => {
  const data = {
    labels: ["Masala", "Milk", "Curd"],
    datasets: [
      {
        data: [120000, 60000, 60000],
        backgroundColor: ["#006d5b", "#ffc93c", "#ff7058"],
        borderWidth: 0,
      },
    ],
  };

  const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-[40%]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Top Revenue Product
        </h3>
        <select className="border rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none">
          <option>Today</option>
        </select>
      </div>

      <div className="relative h-60">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-2xl font-semibold text-gray-800">{total}</p>
          <p className="text-gray-400 text-sm">Total</p>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#006d5b]"></span>
          Masala
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ffc93c]"></span>
          Milk{" "}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff7058]"></span>
          curd{" "}
        </div>
      </div>
    </div>
  );
};

export default TopRevenueProductCard;
