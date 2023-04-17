import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      let itemWithQuantity = {
        ...action.payload,
        qty: 1,
      };
      let exists = state.items.some((item) => item.id == action.payload.id);
      if (exists) {
        let existingItemIndex = state.items.findIndex(
          (item) => item.id == action.payload.id
        );
        state.items[existingItemIndex].qty++;
        state.items[existingItemIndex].price +=
          state.items[existingItemIndex].price;
      } else {
        state.items.push(itemWithQuantity);
      }
    },
    clearCart(state) {
      state.items = [];
    },
    removeItem(state, action) {
      console.log("action.payload", action.payload);
      let existingItemIndex = state.items.findIndex(
        (item) => item.id == action.payload
      );
      if (state.items[existingItemIndex].qty > 1) {
        state.items[existingItemIndex].qty--;
      } else {
        state.items.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { addItem, clearCart, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
