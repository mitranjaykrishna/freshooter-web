import React from "react";
import { Download } from "lucide-react";

const orders = [
  {
    image:
      "https://www.allrecipes.com/thmb/b6Rab3PSMtgQS9Kjpw0yGdzAmj4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-RM-142967-easy-garam-masala-ddmfs-3x4-5ecfc3a6b289496ea57d000853ad31fd.jpg",
    name: "Masala",
    id: "4859578",
    customer: "Amit Shah",
    email: "amith14@gmail.com",
    status: "Delivered",
  },
  {
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/324844_2200-1200x628.jpg",
    name: "oil",
    id: "4875566",
    customer: "Arlene McCoy",
    email: "arlene1@gmail.com",
    status: "Shipped",
  },
  // {
  //   image:
  //     "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_To_Make_Fresh_Homemade_Yogurt_Curd.jpg",
  //   name: "curd",
  //   id: "7894561",
  //   customer: "Marvin McKinney",
  //   email: "marvin4@gmail.com",
  //   status: "Processing",
  // },
  // {
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dEE3xvtZaj0WoHd0jmiMU7_V8aduyV-ejw&s",
  //   name: "milk",
  //   id: "1234567",
  //   customer: "Annette Black",
  //   email: "black45@gmail.com",
  //   status: "Cancelled",
  // },
];

const statusColors = {
  Delivered: "bg-teal-100 text-teal-800",
  Shipped: "bg-orange-100 text-orange-800",
  Processing: "bg-red-100 text-red-700",
  Cancelled: "bg-gray-200 text-gray-500",
};

const LatestOrdersCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Latest Orders</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>• Data updates in every 3 hours</span>
          <select className="ml-2 border rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none">
            <option>Today</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="py-2 px-3 font-medium">Order ID</th>
              <th className="py-2 px-3 font-medium">Billing Name</th>
              <th className="py-2 px-3 font-medium">Status</th>
              <th className="py-2 px-3 font-medium">Invoice</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {orders.map((order, index) => (
              <tr key={index} className="border-t border-quaternary">
                <td className="py-4 px-3 flex items-center gap-3">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{order.name}</p>
                    <p className="text-gray-400 text-xs">ID : {order.id}</p>
                  </div>
                </td>
                <td className="py-4 px-3">
                  <p className="font-medium">{order.customer}</p>
                  <p className="text-gray-400 text-xs">{order.email}</p>
                </td>
                <td className="py-4 px-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-3">
                  <Download className="w-5 h-5 text-teal-900 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrdersCard;
