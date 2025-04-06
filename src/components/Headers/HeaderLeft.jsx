import React from "react";
import HomeSection from "./helper/HomeSection";
import BusinessSection from "./helper/BusinessSection";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";

export default function HeaderLeft() {
  return (
    <div className="flex flex-col gap-6 h-full w-full p-6 overflow-auto">
      <div className="flex  items-center justify-between">
        <div className="flex gap-5 items-center">
          <img src={logo} alt="logo" className="max-w-14" />
          <span className="text-3xl font-bold text-primary ">Freshooter</span>
        </div>
        <div className="flex items-center justify-center h-8 w-8 p-1  rounded ">
          <IoMenu className="w-full h-full " />
        </div>
      </div>
      {/* section 1 */}
      <HomeSection />
      <BusinessSection />
    </div>
  );
}
