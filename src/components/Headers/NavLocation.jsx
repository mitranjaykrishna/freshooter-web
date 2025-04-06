import React from "react";
import { IoHomeOutline } from "react-icons/io5";

export default function NavLocation() {
  return (
    <div className="flex justify-between items-center min-h-[52px] ">
      <span className="text-xl font-medium text-quinary">E-commerce</span>
      <div className="flex items-center justify-center gap-1 text-primary text-sm">
        <IoHomeOutline />
        <span className="">/ Home</span>
        <span>/ Dashboard</span>
      </div>
    </div>
  );
}
