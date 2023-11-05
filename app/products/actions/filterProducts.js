"use server";

import { redirect } from "next/navigation";

export default async function filterProducts(filters) {
  const params = new URLSearchParams([["category", filters._id]]);

  redirect(`/products?${params}`);
}
