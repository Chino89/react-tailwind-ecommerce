/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShoppiCartContext } from "../../Context/productContext";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";

function Card({ item }) {
  const {
    openDetail,
    setProductToShow,
    openProductDetail,
    productToShow,
    closeProductDetail,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useContext(ShoppiCartContext);

  const showProduct = (productDetail) => {
    if (openDetail && productToShow.id === productDetail.id) {
      closeProductDetail();
      closeCheckoutSideMenu();
    } else {
      setProductToShow(productDetail);
      if (!openDetail) openProductDetail();
    }
  };

  const addProduct = (event, productData) => {
    event.stopPropagation();
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <button
          className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => {}}
        >
          <CheckIcon className="w-4 h-4 stroke-green-600 hover:stroke-gray-500" />
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => {
            addProduct(event, item);
          }}
        >
          <PlusIcon className="w-4 h-4 stroke-black hover:stroke-green-600" />
        </button>
      );
    }
  };

  return (
    <div
      className="bg-white h-60 w-56 cursor-pointer rounded-lg shadow-sm hover:shadow-xl"
      onClick={() => showProduct(item)}
    >
      <div className="relative w-full h-4/5 mb-2">
        <span className="absolute bottom-1 left-1 capitalize bg-white/60 rounded-lg text-xs m-2 px-3 py-0.5">
          {item.category}
        </span>
        <img
          className="w-full h-full object-contain rounded-t-lg border border-b-gray-300"
          src={item.image}
          alt={item.title}
        />
        {renderIcon(item.id)}
      </div>
      <p className="flex items-center justify-between">
        <span className="text-sm font-light truncate">{item.title}</span>
        <span className="text-lg font-medium">${item.price}</span>
      </p>
    </div>
  );
}

export default Card;
