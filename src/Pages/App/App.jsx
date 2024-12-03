import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";

import { ShoppiCartProvider } from "../../Context";

import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import CategoryPage from "../Category";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/all" replace />,
    },
    {
      path: "all",
      element: <Home />,
    },
    {
      path: "/category/:category",
      element: <CategoryPage />,
    },
    {
      path: "my-account",
      element: <MyAccount />,
    },
    {
      path: "my-order",
      element: <MyOrder />,
    },
    {
      path: "my-orders",
      element: <MyOrders />,
    },
    {
      path: "my-orders/last",
      element: <MyOrder />,
      exact: true,
    },
    {
      path: "my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

export default function App() {
  return (
    <ShoppiCartProvider>
      <BrowserRouter>
        <Navbar />
        <CheckoutSideMenu />
        <AppRoutes />
      </BrowserRouter>
    </ShoppiCartProvider>
  );
}
