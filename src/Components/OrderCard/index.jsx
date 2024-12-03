/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/outline";

function OrderCard({ product, handleDelete }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
        <p className="text-sm font-light">{product.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="w-20 text-lg font-medium">$ {product.price}</p>
        {handleDelete && (
          <XMarkIcon
            className="w-5 h-5 cursor-pointer stroke-black hover:stroke-red-500"
            onClick={() => handleDelete(product.id)}
          />
        )}
      </div>
    </div>
  );
}

export default OrderCard;
