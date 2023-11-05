"use client";

import { useState } from "react";
import filterProducts from "../actions/filterProducts";

export default function Category({ category }) {
  const handleFilter = (selectedCategory) => {
    filterProducts(selectedCategory);
  };

  return (
    <div
      key={category.id}
      onClick={handleFilter.bind(null, category)}
      className="bg-secondary text-main px-3 py-2 rounded-md cursor-pointer"
    >
      {category.name}
    </div>
  );
}
