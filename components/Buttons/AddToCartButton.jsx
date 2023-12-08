"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { UserContext } from "@/store/UserContext";

import Button from "@/components/Buttons/Button";
import addProductToCart from "@/app/me/actions/addProductToCart";

export default function AddToCartButton({ productId }) {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddProductToCart = async () => {
    setIsLoading(true);
    if (!currentUser) {
      return router.push("/login");
    }

    await addProductToCart(productId._id, 1);
    setIsLoading(false);
  };

  return (
    <Button onClick={handleAddProductToCart} isLoading={isLoading}>
      Add to Cart
    </Button>
  );
}
