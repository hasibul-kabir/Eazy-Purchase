import getData from "@/utils/httpRequests/getData";

export default async function ProductDetails({ params }) {
  const { data, status } = await getData(`/products/${params.productId}`);

  return <div>{data.product.name}</div>;
}
