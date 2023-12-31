import Image from "next/image";
import getData from "@/utils/httpRequests/getData";

import AddToCartButton from "@/components/Buttons/AddToCartButton";

export async function generateMetadata(props) {
  const { data } = await getData(`/products/${props.params.productId}`);

  return {
    title: `EP | ${data.product.name}`,
  };
}

export default async function ProductDetails(props) {
  const { data, status } = await getData(`/products/${props.params.productId}`);

  return (
    <div className="max-w-7xl gap-6">
      <div className="flex flex-col p-6 w-2/4 mx-auto">
        <div>
          <Image
            src="/placeholder-product-image.jpg"
            height={500}
            width={800}
            alt="product-photo"
          />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={
                        index <= data.product.rating
                          ? "text-yellow-500"
                          : "text-grey-200"
                      }
                    >
                      <span className="star text-xl">&#9733;</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-lg font-semibold">{data.product.name}</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="text-2xl font-medium">
                {data.product.discountedPrice.toFixed()}
              </p>
              <del className="text-sm">{data.product.price}</del>
            </div>
          </div>
          <p className="px-2 py-1 rounded-full bg-tertiary text-white text-sm font-medium w-fit">
            {data.product.category.name}
          </p>
          <p>{data.product.description}</p>
          <AddToCartButton productId={data.product}>
            Add to Cart
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}
