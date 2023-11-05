import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link className="block p-4 cursor-pointer" href={`/products/${product.id}`}>
      {product.name}
    </Link>
  );
}
