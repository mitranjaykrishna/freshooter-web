import React from "react";
import {
  CircleDollarSign,
  Users,
  ClipboardList,
  LineChart,
} from "lucide-react";

const stats = [
  {
    icon: <LineChart className="text-white w-5 h-5" />, // Sales icon
    iconBg: "bg-teal-900",
    label: "Total Sales",
    value: "₹98,459",
    description: "We have sale +18.2k this...",
  },
  {
    icon: <Users className="text-white w-5 h-5" />, // Visitors icon
    iconBg: "bg-yellow-400",
    label: "Total Visitors",
    value: "54,156",
    description: "We have total +3.5k visitor...",
  },
  {
    icon: <ClipboardList className="text-white w-5 h-5" />, // Orders icon
    iconBg: "bg-gray-400",
    label: "Total Orders",
    value: "5,125",
    description: "We have total +5k orders...",
  },
  {
    icon: <CircleDollarSign className="text-white w-5 h-5" />, // Refunded icon
    iconBg: "bg-rose-400",
    label: "Refunded",
    value: "₹20,000",
    description: "We got +66k refund this...",
  },
];

const StatsCardList = () => {
  return (
    <div className=" bg-white rounded-2xl shadow-md p-4 w-full flex justify-between gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="flex gap-4 items-center border-b border-quaternary pb-4 "
        >
          <div className={`p-3 rounded-lg ${stat.iconBg}`}>{stat.icon}</div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-500">{stat.label}</h4>
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-400 truncate">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCardList;
