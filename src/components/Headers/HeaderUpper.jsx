import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export default function HeaderUpper() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 flex justify-between items-center w-full  px-2 py-1 min-h-[80px]">
      <div className="flex flex-col gap-1">
        <span className=" text-xl font-semibold text-primary">
          Welcome Alex
        </span>
        <span className="text-xs text-subText">
          Here What happening with your store today
        </span>
      </div>
      <div className="flex justify-between items-center gap-5 px-3 py-1  rounded">
        <div className="flex items-center justify-center h-6 w-6   ">
          <IoSettingsOutline className="w-full h-full text-primary" />
        </div>
        <div
          className="flex items-center justify-center h-6 w-6"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          <CgProfile className="w-full h-full text-primary" />
        </div>
      </div>
    </div>
  );
}
