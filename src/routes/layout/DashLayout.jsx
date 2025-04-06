import React from "react";
import HeaderUpper from "../../components/Headers/HeaderUpper";
import { Outlet } from "react-router";
import HeaderLeft from "../../components/Headers/HeaderLeft";
import NavLocation from "../../components/Headers/NavLocation";

export default function DashLayout() {
  return (
    <div className="flex justify-between gap-4  min-h-screen w-screen pr-4 overflow-hidden bg-quaternary">
      <div className="flex flex-col w-[281.59px] flex-shrink-0 min-h-0 rounded-r-2xl bg-linear-to-b from-tertiary from-10%  to-primary  overflow-hidden">
        <HeaderLeft />
      </div>
      <div className="relative flex flex-col flex-1 gap-2 h-screen overflow-hidden ">
        {/* Left Sidebar */}

        <HeaderUpper />
        {/* Main Content */}
        <div className="flex flex-col gap-2 flex-1 min-h-0 rounded-lg overflow-hidden  pt-[88px]">
          <NavLocation />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
