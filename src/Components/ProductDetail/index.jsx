import { useContext } from "react";
import "./ProductDetail.css";
import { ShoppiCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";

function ProductDetail() {
  const { openDetail, closeProductDetail, productToShow } =
    useContext(ShoppiCartContext);

  return (
    <aside
      className={`${
        openDetail ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 m-2 bg-white border border-black rounded-lg shadow-2xl z-20 `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="w-5 h-5 cursor-pointer stroke-black hover:stroke-red-500"
          onClick={() => closeProductDetail()}
        />
      </div>
      <figure className="px-6 border border-t-0 border-b-gray-300">
        <img
          className="w-full h-full rounded-lg "
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl my-2">${productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetail;
