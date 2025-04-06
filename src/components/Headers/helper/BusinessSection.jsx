import React from "react";
import { BUSINESSSECTION } from "../../../utils/constant";

export default function BusinessSection() {
  return (
    <div className="flex flex-col gap-3 ">
      <span className="text-base font-semibold">Business Management</span>
      {BUSINESSSECTION?.map((ele, index) => {
        const Icon = ele?.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-4 w-full pl-3 py-2 rounded-md text-sm font-medium text-tx-primary  hover:text-primary hover:bg-secondary cursor-pointer"
          >
            <Icon className="w-5 h-5" />
            <span className="">{ele?.title}</span>
          </div>
        );
      })}
    </div>
  );
}
