import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../../utils/CartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const userProfile = useSelector((store) => store.user.userProfile);
  const dispatch = useDispatch();
  console.log("cartItems in cart", cartItems);
  console.log("userProfile", userProfile);
  return (
    <>
      <div className="bg-white drop-shadow-md flex-2 p-6 w-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg mt-2.5 text-title font-bold ">Cart Items</h1>
          <button
            className="w-[80px] h-[22px] rounded-md bg-red text-white text-sm"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0
          ? "Cart is empty"
          : cartItems.map((item) => {
              return (
                <>
                  <div className="my-3">
                    <div className="flex items-center mt-2">
                      <p className="px-2 w-48 text-sm">{item?.name}</p>
                      <div className="px-5">
                        <div className="flex border border-gray w-16 justify-around items-center">
                          <button
                            className="text-xl"
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            -
                          </button>
                          <p className="text-green text-sm">{item?.qty}</p>
                          <button
                            className="hover:scale-110 delay-100 transition-all"
                            onClick={() => dispatch(addItem(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="font-thin text-sm">
                        ₹ {(item.qty * item.price) / 100}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        <div className="border border-black my-2"></div>
        <div className="flex justify-between">
          <p className="font-bold text-sm">To Pay</p>
          <p className="font-bold text-sm">₹ {totalPrice}</p>
        </div>
      </div>
    </>
  );
};
export default Cart;
