import React from "react";
import Button from "@/components/Buttons/Button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <div className="px-10 py-6 flex justify-between items-center">
      <p className="text-white text-xl font-semibold ">Eazy Purchase</p>
      <div className="flex items-center justify-center gap-4 w-2/4">
        <p className="text-white ">Home</p>
        <p className="text-white">All Products</p>
        <ShoppingCartIcon className="text-white h-5 w-5" />
      </div>
      <div>
        <Button>Login</Button>
      </div>
    </div>
  );
}
