import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import APIRequests from "@/utils/APIRequests/APIRequests";

import Banner from "./components/Banner";
import PopularProductsSec from "./components/PopularProductsSec";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["popular-products"],
    queryFn: async () => {
      const { data } = await APIRequests.products.getPopularProducts();
      return data;
    },
  });

  return (
    <main className="bg-background min-h-screen">
      <Banner />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <PopularProductsSec />
      </HydrationBoundary>
    </main>
  );
}
