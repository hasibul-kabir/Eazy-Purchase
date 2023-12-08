import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import APIRequests from "@/utils/APIRequests/APIRequests";

import AllProductsWithFilters from "./components/AllProductsWithFilters";

export const metadata = {
  title: "EP | Products",
};

export default async function ProductsPage({ searchParams }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await APIRequests.categories.getAllCategories();
      return data;
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await APIRequests.products.getAllProducts();
      return data;
    },
  });

  return (
    <main className="bg-background min-h-screen px-6 md:px-4">
      <h1 className="text-headline text-center text-4xl font-bold pt-6 pb-12">
        All Products
      </h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <AllProductsWithFilters />
      </HydrationBoundary>
    </main>
  );
}
