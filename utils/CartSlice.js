import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
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
      } else {
        state.items.push(itemWithQuantity);
      }
    },
  },
});

export const { addItem } = CartSlice.actions;
export default CartSlice.reducer;
