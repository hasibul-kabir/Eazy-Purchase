"use server";

import { revalidateTag } from "next/cache";

import postData from "@/utils/httpRequests/postData";

export default async function addProductToCart(product, quantity = 1) {
  try {
    const cart = await postData("/carts", { product, quantity });

    revalidateTag("cart");

    return cart;
  } catch (error) {
    return error;
  }
}
