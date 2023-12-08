"use client";

import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import APIRequests from "@/utils/APIRequests/APIRequests";

import Category from "./Category";
import ProductCard from "@/components/Cards/ProductCard";

export function sanitizeParams(params) {
  // Initial params object
  const sanitizedObj = {};

  for (const key in params) {
    if (params[key]) {
      sanitizedObj[key] = params[key];
    }
  }

  return sanitizedObj;
}

export default function AllProductsWithFilters() {
  const [params, setParams] = useState({ category: "" });

  const { data: categoryList } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await APIRequests.categories.getAllCategories();
      return data;
    },
  });

  const { data: productList, refetch: refetchProductList } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await APIRequests.products.getAllProducts(
        sanitizeParams(params)
      );
      return data;
    },
  });

  useEffect(() => {
    refetchProductList();
  }, [params]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap py-4 px-6 gap-2">
        {categoryList.data.categories.map((category) => (
          <Category
            key={category._id}
            category={category}
            setParams={setParams}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
        {productList.data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
