"use client";

import { useQuery } from "@tanstack/react-query";

import APIRequests from "@/utils/APIRequests/APIRequests";

import ProductCard from "@/components/Cards/ProductCard";

export default function PopularProductsSec() {
  const { data: popularProducts } = useQuery({
    queryKey: ["popular-products"],
    queryFn: async () => {
      const { data } = await APIRequests.products.getPopularProducts();
      return data;
    },
  });

  return (
    <section className="p-6 md:p-12">
      <h2 className="text-4xl font-bold text-main text-center mb-8">
        Popular products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularProducts.data.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
