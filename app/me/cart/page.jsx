import getCartProducts from "../actions/getCartProducts";

export default async function CartPage() {
  const { data } = await getCartProducts();

  return (
    <div>
      <p>Welcome to you cart</p>

      {data.cart.products.map((product) => (
        <div>
          <p>{product.item.name}</p>
          <p>{product.quantity}</p>
        </div>
      ))}
    </div>
  );
}
