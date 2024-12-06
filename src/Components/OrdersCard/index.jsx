/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ShoppiCartContext } from "../../Context/productContext";

function OrdersCard({ totalPrice, totalProducts, id }) {
  const { order } = useContext(ShoppiCartContext);
  return (
    <div className="w-80 flex justify-between items-center mb-3 border border-black rounded-lg p-4 ">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="flex items-center gap-2">
            <CalendarDateRangeIcon className="h-6 w-6 text-black" />
            <span className="font-light">{order[id].date}</span>
          </p>
          <p className="flex items-center gap-2">
            <ShoppingBagIcon className="h-6 w-6 text-black" />
            <span className="font-light">
              {totalProducts} {totalProducts > 1 ? "items" : "item"}
            </span>
          </p>
        </div>
        <p className="w-1/3 flex items-center gap-2">
          <span className="font-medium text-xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
}

export default OrdersCard;
