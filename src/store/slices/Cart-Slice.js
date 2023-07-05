import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, isOpenCart: false },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);

      const isExistItem = state.items.find((item) => item.id === newItem.id);
      if (!isExistItem) {
        state.totalQuantity = state.totalQuantity + newItem.quantity;
        state.items.push({
          ...newItem,
          quantity: newItem.quantity,
          totalPrice: newItem.discountPrice,
        });
      } else if (newItem.quantity > 1) {
        isExistItem.quantity = isExistItem.quantity + +newItem.quantity;
        state.totalQuantity = state.totalQuantity + +newItem.quantity;
      } else {
        isExistItem.quantity++;
        state.totalQuantity++;
        isExistItem.totalPrice = isExistItem.totalPrice + newItem.discountPrice;
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

    openCart(state) {
      state.isOpenCart = !state.isOpenCart;
    },
  },
});
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

// export const reducer = cartSlice.reducer;

export default cartSlice.reducer;
