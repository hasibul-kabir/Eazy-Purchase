import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="w-4/5">
      <div className="">
        <Image
          className="w-full"
          src="/images/tesla.jpeg"
          height={200}
          width={400}
          alt="product"
        />
      </div>
      <div>
        <p>Product Name</p>
        <p>price</p>
      </div>
    </div>
  );
}
