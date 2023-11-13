"use client";

import addProductToCart from "@/app/me/actions/addProductToCart";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CartQuantityControl({ cartProduct }) {
  const [isLoading, setIsLoading] = useState(false);

  const incrementHandler = async () => {
    setIsLoading(true);
    const result = await addProductToCart(
      cartProduct.item._id,
      cartProduct.quantity + 1
    );
    if (result.status !== "success") {
      toast.error(result.message);
    }
    setIsLoading(false);
  };

  const decrementHandler = async () => {
    setIsLoading(true);
    await addProductToCart(cartProduct.item._id, cartProduct.quantity - 1);
    setIsLoading(false);
  };

  return (
    <div className="inline-flex items-center gap-1 border border-tertiary rounded-md">
      {isLoading ? (
        <span className="py-1 px-3 text-center font-semibold">Loading...</span>
      ) : (
        <>
          <button
            onClick={decrementHandler}
            className="bg-tertiary py-1 px-3 text-main rounded-md"
          >
            -
          </button>
          <span className="font-bold">{cartProduct.quantity}</span>
          <button
            onClick={incrementHandler}
            className="bg-tertiary py-1 px-3 text-main rounded-md"
          >
            +
          </button>
        </>
      )}
    </div>
  );
}
