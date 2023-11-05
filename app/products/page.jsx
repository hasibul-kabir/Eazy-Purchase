import getData from "@/utils/httpRequests/getData";
import ProductCard from "./components/ProductCard";

export const metadata = {
  title: "EP | Products",
};

export default async function ProductsPage() {
  const { status, data } = await getData("/products");

  if (status !== "success") {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <>
      <h1>Hello from the products page</h1>

      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
