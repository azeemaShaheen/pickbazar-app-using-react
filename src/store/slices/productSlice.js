import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQty: 0,
  totalAmount: 0,
};

const calcTotals = (state) => {
  state.totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  state.totalAmount = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const p = action.payload;
      const existing = state.cart.find((x) => x.id === p.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({
          id: p.id,
          title: p.title,
          price: p.price,
          image: p.image,
          weight: p.weight,
          qty: 1,
        });
      }

      calcTotals(state);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((x) => x.id === id);

      if (item) {
        item.qty += 1;
      }

      calcTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((x) => x.id === id);

      if (!item) return;

      item.qty -= 1;

      if (item.qty <= 0) {
        state.cart = state.cart.filter((x) => x.id !== id);
      }

      calcTotals(state);
    },

    removeCartItem: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((x) => x.id !== id);
      calcTotals(state);
    },

    clearCartItems: (state) => {
      state.cart = [];
      state.totalQty = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
  clearCartItems,
} = productSlice.actions;

export const selectCartUniqueCount = (state) => state.products.cart.length;
export const selectCartTotalQty = (state) => state.products.totalQty;
export const selectCartTotalAmount = (state) => state.products.totalAmount;

export default productSlice.reducer;