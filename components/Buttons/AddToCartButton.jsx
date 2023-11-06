"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { UserContext } from "@/store/UserContext";

import Button from "@/components/Buttons/Button";

export default function AddToCartButton({ productId }) {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();

  const handleAddProductToCart = () => {
    if (!currentUser) {
      return router.push("/login");
    }

    console.log(productId);
  };

  return <Button onClick={handleAddProductToCart}>Add to Cart</Button>;
}
