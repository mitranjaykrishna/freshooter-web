import { AiOutlineProduct } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineInventory, MdProductionQuantityLimits } from "react-icons/md";
import { PiUserGear } from "react-icons/pi";
import { TbPresentationAnalytics } from "react-icons/tb";

export const BUSINESSSECTION = [
  {
    title: "Product",
    icon: AiOutlineProduct,
    route: "",
  },
  {
    title: "Inventory",
    icon: MdOutlineInventory,
    route: "",
  },
  {
    title: "User",
    icon: PiUserGear,
    route: "",
  },
  {
    title: "Order",
    icon: MdProductionQuantityLimits,
    route: "",
  },
  {
    title: "Report & Analytics",
    icon: TbPresentationAnalytics,
    route: "",
  },
  {
    title: "Category & Pricing",
    icon: IoPricetagsOutline,
    route: "",
  },
];
