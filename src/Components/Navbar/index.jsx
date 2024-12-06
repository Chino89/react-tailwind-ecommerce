import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppiCartContext } from "../../Context/productContext";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const activeStyle = "underline underline-offset-4 decoration-lime-600";

  const { items, cartProducts, toggleCheckoutSideMenu } =
    useContext(ShoppiCartContext);

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <nav className="bg-white w-full text-sm font-light py-5 px-8 flex justify-between items-center fixed z-10 top-0 shadow-md">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg text-lime-600">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <NavLink
              to={`/category/${category}`}
              className={({ isActive }) =>
                `${
                  isActive ? activeStyle : ""
                } capitalize hover:underline hover:underline-offset-4`
              }
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3 relative">
        <li className="text-lime-600">x.emmavivas@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex gap-1 relative cursor-pointer ">
          <ShoppingCartIcon
            className="w-6 h-6 stroke-black"
            onClick={() => toggleCheckoutSideMenu()}
          />
          <span className="bg-white h-5 w-5 text-center rounded-full absolute -right-2 -top-2 ">
            {cartProducts.length}
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
