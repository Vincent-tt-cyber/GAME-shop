import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.itemsInCart.push(newItem);
      state.totalPrice += newItem.price;
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const itemToRemove = state.itemsInCart.find((item) => item.id === itemId);

      if (itemToRemove) {
        state.itemsInCart = state.itemsInCart.filter(
          (item) => item.id !== itemId
        );
        state.totalPrice -= itemToRemove.price;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
