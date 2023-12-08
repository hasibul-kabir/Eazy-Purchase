import Image from "next/image";

import APIRequests from "@/utils/APIRequests/APIRequests";

export async function generateMetadata(props) {
  const { data: resData } = await APIRequests.products.getProductDetails(
    props.params.productId
  );

  return {
    title: `EP | ${resData.data.product.name}`,
  };
}

export async function generateStaticParams() {
  const { data: resData } = await APIRequests.products.getAllProducts();

  return resData.data.products.map((product) => ({
    productId: product._id,
  }));
}

export default async function ProductDetails(props) {
  const { data: resData } = await APIRequests.products.getProductDetails(
    props.params.productId
  );

  const {
    name,
    price,
    discountedPrice,
    category: { name: categoryName },
    rating,
    description,
  } = resData.data.product;

  return (
    <main className="bg-background min-h-screen px-6 md:px-4">
      <div className="max-w-xl mx-auto gap-6 border text-paragraph">
        <div className="w-full flex flex-col p-6 mx-auto">
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
                          index <= rating ? "text-yellow-500" : "text-grey-200"
                        }
                      >
                        <span className="star text-xl">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-lg font-semibold">{name}</p>
              </div>
              <div className="flex items-end gap-1">
                <p className="text-2xl font-medium">
                  {discountedPrice.toFixed()}
                </p>
                <del className="text-sm">{price}</del>
              </div>
            </div>
            <p className="px-2 py-1 rounded-full bg-tertiary text-white text-sm font-medium w-fit">
              {categoryName}
            </p>
            <p>{description}</p>
            {/* {isAlreadyAdded ? (
              <CartQuantityControl cartProduct={isAlreadyAdded} />
            ) : (
              data.product.stock !== 0 && (
                <AddToCartButton productId={data.product}>
                  Add to Cart
                </AddToCartButton>
              )
            )} */}
          </div>
        </div>
      </div>
    </main>
  );
}
