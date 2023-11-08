"use server";

import getData from "@/utils/httpRequests/getData";

export default async function getCartProducts() {
  const cart = await getData("/carts", { next: { tags: ["cart"] } }, true);

  return cart;
}
