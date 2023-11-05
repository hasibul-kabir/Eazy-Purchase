import getData from "@/utils/httpRequests/getData";
import ProductCard from "@/components/Cards/ProductCard";

export default async function PopularProductsSec() {
  const { data } = await getData("/products/popular-products");
  return (
    <section className="p-6 md:p-12">
      <h2 className="text-4xl font-bold text-main text-center mb-8">
        Popular products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
