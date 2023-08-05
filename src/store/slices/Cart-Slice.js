import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, isOpenCart: false, shipping: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const isExistItem = state.items.find((item) => item.id === newItem.id);
      if (!isExistItem) {
        state.totalQuantity = state.totalQuantity + +newItem.quantity;
        state.items.push({
          ...newItem,
          quantity: newItem.quantity,
        });
      } else if (newItem.quantity > 1) {
        isExistItem.quantity = isExistItem.quantity + +newItem.quantity;
        state.totalQuantity = state.totalQuantity + +newItem.quantity;
      } else {
        isExistItem.quantity++;
        state.totalQuantity++;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },

    openCart(state) {
      state.isOpenCart = !state.isOpenCart;
    },
  },
});
export const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
  cartSlice.actions;

// export const reducer = cartSlice.reducer;

export default cartSlice.reducer;
