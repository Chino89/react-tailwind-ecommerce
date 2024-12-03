import { useContext } from "react";
import { ShoppiCartContext } from "../../Context";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Home() {
  const { items, searchByInput, setSearchByInput, filteredItems } =
    useContext(ShoppiCartContext);

  const renderItems = () => {
    if (searchByInput?.length > 0) {
      if (filteredItems?.length > 0) {
        return filteredItems?.map((item, index) => (
          <Card key={index} item={item} />
        ));
      } else {
        return (
          <h2 className="font-medium">Ops! We don&apos;t have that product!</h2>
        );
      }
    } else {
      return items.map((item, index) => <Card key={index} item={item} />);
    }
  };

  return (
    <Layout>
      <h1 className="font-bold text-3xl">Our products</h1>
      <div className="w-full flex justify-center items-center my-2 group">
        <input
          className="w-1/3 my-2 p-2 border border-gray-500 rounded-full outline-gray-200 focus:shadow-lg"
          type="search"
          name=""
          id=""
          placeholder="What are you looking for?"
          onChange={(event) => setSearchByInput(event.target.value)}
        />
        <MagnifyingGlassIcon className="w-4 h-4 relative right-7 stroke-slate-700 group-hover:stroke-green-400" />
      </div>
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderItems()}
      </section>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
