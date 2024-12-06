import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ShoppiCartContext } from "../../Context/productContext";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppiCartContext);
  const { id } = useParams();
  const numericId = id ? parseInt(id, 10) : undefined;

  function renderOrders() {
    const products =
      id !== undefined
        ? order[numericId].products
        : order[order.length - 1].products;

    return products.map((product) => (
      <OrderCard key={product.id} product={product} />
    ));
  }
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h2>My Order</h2>
      </div>
      <div className="flex flex-col w-80">{renderOrders()}</div>
    </Layout>
  );
}

export default MyOrder;
