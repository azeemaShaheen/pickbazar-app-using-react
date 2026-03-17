import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunk/productThunk";

const initialState = {
  cart: [],
  totalQty: 0,
  totalAmount: 0,
  loading: false,
  products: [],
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
      const product = action.payload;
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ ...product, qty: 1 });
      }

      calcTotals(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item) item.qty += 1;
      calcTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          state.cart = state.cart.filter((p) => p.id !== action.payload);
        }
      }
      calcTotals(state);
    },

    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      calcTotals(state);
    },

    clearCartItems: (state) => {
      state.cart = [];
      calcTotals(state);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    });

    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
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