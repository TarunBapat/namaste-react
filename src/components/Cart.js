import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      {cartItems &&
        cartItems.map((item) => {
          return <h1>{item.name}</h1>;
        })}
    </>
  );
};
export default Cart;
