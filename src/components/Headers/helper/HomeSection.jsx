import React from "react";
import { TbDashboard } from "react-icons/tb";

export default function HomeSection() {
  return (
    <div className="flex flex-col gap-3 ">
      <span className="text-base font-semibold">Home</span>
      <div className="flex items-center gap-4 w-full pl-3 py-2 rounded-md text-sm font-medium text-tx-primary  hover:text-primary hover:bg-secondary cursor-pointer">
        <TbDashboard className="w-5 h-5" />
        <span className="">Dashboard</span>
      </div>
    </div>
  );
}
