"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { UserContext } from "@/store/UserContext";

import Button from "@/components/Buttons/Button";
import addProductToCart from "@/app/me/actions/addProductToCart";

export default function AddToCartButton({ productId }) {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();

  const handleAddProductToCart = async () => {
    if (!currentUser) {
      return router.push("/login");
    }

    const cartProduct = await addProductToCart(productId._id, 1);
    console.log(cartProduct);
  };

  return <Button onClick={handleAddProductToCart}>Add to Cart</Button>;
}
