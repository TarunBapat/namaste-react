import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../utils/CartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("cartItems in cart", cartItems);
  return (
    <>
      {cartItems.length === 0
        ? "Cart is empty"
        : cartItems.map((item) => {
            return (
              <>
                <p>
                  {item?.name}
                  <span>{item?.qty}</span>
                </p>
                {item && (
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    remove
                  </button>
                )}
              </>
            );
          })}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </>
  );
};
export default Cart;
