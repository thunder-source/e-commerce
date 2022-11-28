import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  showCart: false,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      // [flag] check if item is already present in cart
      let flag = true;
      state.cart.map((ele, index) => {
        if (ele.id === payload.id) {
          flag = false;
          state.cart[index].quantity = state.cart[index].quantity + 1;
          state.totalAmount += parseInt(
            ((payload.price % payload.discountPercentage) * 100).toFixed(0)
          );
        }
      });
      if (flag) {
        state.cart.push({ ...payload, quantity: 1 });
        state.totalAmount += parseInt(
          ((payload.price % payload.discountPercentage) * 100).toFixed(0)
        );
      }
    },
    removeItem: (state, { payload }) => {
      state.cart.map((ele, index) => {
        if (ele.id === payload.id) {
          if (index === 0) {
            state.cart.shift();
          } else {
            state.cart.splice(index, index);
          }
          state.totalAmount -= parseInt(
            ((payload.price % payload.discountPercentage) * 100).toFixed(0) *
              ele.quantity
          );
        }
      });
    },
    increaseQuantity: (state, { payload }) => {
      state.cart.map((ele, index) => {
        if (ele.id === payload) {
          state.cart[index].quantity = state.cart[index].quantity + 1;
          state.totalAmount += parseInt(
            (
              (state.cart[index].price % state.cart[index].discountPercentage) *
              100
            ).toFixed(0)
          );
        }
      });
    },
    decreaseQuantity: (state, { payload }) => {
      state.cart.map((ele, index) => {
        if (ele.id === payload && state.cart[index].quantity > 1) {
          state.cart[index].quantity = state.cart[index].quantity - 1;
          state.totalAmount -= parseInt(
            (
              (state.cart[index].price % state.cart[index].discountPercentage) *
              100
            ).toFixed(0)
          );
        }
      });
    },
    toggleCart: (state, { payload }) => {
      state.showCart = !state.showCart;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;
