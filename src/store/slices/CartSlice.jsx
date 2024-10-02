//createslice
//initialize initial state
//slice ->name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adds item to the cart
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    // Removes item from the cart
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
