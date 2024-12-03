import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppiCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { getDate, totalPrice } from "../../Utils";
import "./CheckoutSideMenu.css";

function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchByInput,
  } = useContext(ShoppiCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: getDate(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    closeCheckoutSideMenu();
    setSearchByInput("");
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 m-2 bg-white border border-black rounded-lg shadow-2xl z-20 `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <XMarkIcon
          className="w-5 h-5 cursor-pointer stroke-black hover:stroke-red-500"
          onClick={() => closeCheckoutSideMenu()}
        />
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-black text-white py-3 rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
