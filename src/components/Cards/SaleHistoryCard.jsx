import React from "react";

const sales = [
  {
    title: "masala",
    country: "United States",
    price: "₹1500.14",
    time: "50 min ago",
  },
  {
    title: "milk",
    country: "Canada",
    price: "₹1800.87",
    time: "40 min ago",
  },
  {
    title: "paneer",
    country: "United States",
    price: "₹2000.84",
    time: "35 min ago",
  },
  {
    title: "curd",
    country: "Australia",
    price: "₹1500.14",
    time: "50 min ago",
  },
  {
    title: "oil",
    country: "UK",
    price: "₹780.25",
    time: "28 min ago",
  },
];

const SaleHistoryCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg text-gray-800">Sale History</h3>
        <button className="text-sm font-medium text-teal-800 hover:underline">
          View All
        </button>
      </div>
      <ul className="space-y-4">
        {sales.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-start border-b border-quaternary last:border-none pb-2"
          >
            <div>
              <p className="text-gray-800 font-medium truncate">{item.title}</p>
              <p className="text-sm text-gray-400">{item.country}</p>
            </div>
            <div className="text-right">
              <p className="text-teal-900 font-semibold">{item.price}</p>
              <p className="text-sm text-gray-400">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaleHistoryCard;
