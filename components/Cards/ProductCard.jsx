import Link from "next/link";

import Button from "../Buttons/Button";

export default function ProductCard({ product }) {
  return (
    <article className="bg-main rounded-2xl">
      <figure className="rounded-2xl">
        <img
          src="/placeholder-product-image.jpg"
          className="w-full h-44 rounded-2xl"
          alt={`Picture of ${product.name}`}
        />
      </figure>
      <div className="px-4 py-2 flex flex-col gap-3 text-stroke">
        <div className="flex justify-between items-center gap-2">
          <h4 className="text-xl font-bold">{product.name}</h4>
          <div className="text-stroke flex flex-col items-center">
            <span className="text-primary text-lg font-medium">
              <span className="text-2xl font-bold">&#2547;</span>
              {product.discountedPrice.toFixed(2)}
            </span>
            <span className="">
              <span className="text-2xl font-bold">&#2547;</span>
              <span className="line-through">{product.price}</span>
            </span>
          </div>
        </div>
        <div className="text-xs font-medium flex items-center gap-1">
          <span className="bg-tertiary px-2 py-1 rounded-full">
            {product.category.name}
          </span>
          <span className="bg-tertiary px-2 py-1 rounded-full">
            {product.stockStatus}
          </span>
        </div>
        <div className="font-semibold flex justify-between items-center gap-2">
          <p>Rating: {product.rating}</p>
          <div>
            <p>Out of Reviews: {product.reviews}</p>
          </div>
        </div>
        <div className="self-end flex items-center gap-1">
          <Link
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent bg-primary text-white focus:ring-primary"
            href={`/products/${product.id}`}
          >
            View Details
          </Link>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </article>
  );
}
