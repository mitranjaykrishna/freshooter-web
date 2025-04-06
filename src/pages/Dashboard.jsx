import React from "react";
import SalesChart from "../components/SalesChart/SalesChart";
import TotalRevenueCard from "../components/Cards/TotalRevenueCard/TotalRevenueCard";
import TotalOrderCard from "../components/Cards/TotalOrderCard/TotalOrderCard";
import StatsCardList from "../components/Cards/StatsCardList";
import SaleHistoryCard from "../components/Cards/SaleHistoryCard";
import LatestOrdersCard from "../components/Cards/LatestOrdersCard";
import TopRevenueProductCard from "../components/Cards/TopRevenueProductCard";

export default function Dashboard() {
  return (
    <div className="relative flex flex-col gap-2.5 h-full py-2 overflow-y-auto">
      <div className=" rounded-b-2xl bg-quaternary">
        <StatsCardList />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 w-full  ">
        <SalesChart />
        <div className="grid grid-cols-1 gap-2">
          <TotalRevenueCard />
          <TotalOrderCard />
        </div>
        <div className="flex justify-between gap-2">
          <SaleHistoryCard />
          <TopRevenueProductCard />
        </div>
        <LatestOrdersCard />
      </div>
    </div>
  );
}
