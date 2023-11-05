"use client";

import { useRouter } from "next/navigation";

export default function Category({ category }) {
  const router = useRouter();

  return (
    <div
      key={category.id}
      onClick={() => {
        router.push(`/products?category=${category._id}`);
      }}
      className="bg-secondary text-main px-3 py-2 rounded-md cursor-pointer"
    >
      {category.name}
    </div>
  );
}
