import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppiCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const { order } = useContext(ShoppiCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h2>My Ordersss</h2>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            key={index}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            id={index}
          />
        </Link>
      ))}
      <Link to={"/all"}>
        <a className="hover:decoration-blue-500 hover:underline hover:underline-offset-4">
          {order.length > 0
            ? "Back to home"
            : "Nothing to see here, Back to home"}
        </a>
      </Link>
    </Layout>
  );
}

export default MyOrders;
