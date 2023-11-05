import getData from "@/utils/httpRequests/getData";

import ProductCard from "@/components/Cards/ProductCard";

export const metadata = {
  title: "EP | Products",
};

export default async function ProductsPage() {
  const { status, data } = await getData("/products");

  if (status !== "success") {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <main className="bg-background min-h-screen px-6 md:px-4">
      <h1 className="text-headline text-center text-4xl font-bold pt-6 pb-12">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
