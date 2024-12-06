/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const ShoppiCartContext = createContext();

const ShoppiCartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setItems(data);
      } catch (error) {
        console.log("Ocurrió un error", error);
      }
    };
    fetchData();
  }, []);

  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  const [openDetail, setOpenDetail] = useState(false);
  const openProductDetail = () => {
    setOpenDetail(true), setIsCheckoutSideMenuOpen(false);
  };
  const closeProductDetail = () => setOpenDetail(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true), setOpenDetail(false);
  };
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  const toggleCheckoutSideMenu = () =>
    isCheckoutSideMenuOpen
      ? setIsCheckoutSideMenuOpen(false)
      : setIsCheckoutSideMenuOpen(true);

  const [order, setOrder] = useState([]);

  const [searchByInput, setSearchByInput] = useState("");

  const [filteredItems, setFilteredItems] = useState([]);

  const filteredItemsBySearch = (items, searchByInput) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByInput.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByInput)
      setFilteredItems(filteredItemsBySearch(items, searchByInput));
  }, [items, searchByInput]);

  return (
    <ShoppiCartContext.Provider
      value={{
        items,
        setItems,
        openDetail,
        setOpenDetail,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        toggleCheckoutSideMenu,
        order,
        setOrder,
        searchByInput,
        setSearchByInput,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppiCartContext.Provider>
  );
};

export { ShoppiCartProvider, ShoppiCartContext };
