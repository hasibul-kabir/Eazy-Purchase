import getData from "@/utils/httpRequests/getData";
import ProductCard from "@/components/Cards/ProductCard";

export default async function PopularProductsSec() {
  const { data } = await getData("/products/popular-products");
  return (
    <section className="max-w-7xl space-y-4">
      <h2 className="text-lg font-semibold text-white">Popular products</h2>
      <div className="grid grid-cols-3 gap-4">
        {data.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
