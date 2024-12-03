import { useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { ShoppiCartContext } from "../../Context";

function CategoryPage() {
  const { category } = useParams();
  const { items } = useContext(ShoppiCartContext);

  const itemsByCategory = items.filter((items) => category == items.category);

  return (
    <Layout>
      <h2 className="font-bold text-3xl capitalize">{category} products</h2>
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-5">
        {itemsByCategory?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </section>
    </Layout>
  );
}

export default CategoryPage;
