import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addCartData: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
        toast.info(`increased ${state.cart[itemIndex].name} cart quantity`, {
          position: "top-right",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);      

        toast.success(`${action.payload.name} added to cart`, {
          position: "top-right",
        });
      }
    },
    removeCart: (state, action) => {
      const nextCartItems = state.cart.filter(
        (data) => data.id !== action.payload.id
      );

      state.cart = nextCartItems;
      toast.error(`${action.payload.name} removed from cart`, {
        position: "top-right",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
        toast.info(`Decreased ${action.payload.name} cart quantity`, {
          position: "top-right",
        });
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cart.filter(
          (data) => data.id !== action.payload.id
        );

        state.cart = nextCartItems;
        toast.error(`${action.payload.name} removed from cart`, {
          position: "top-right",
        });
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addCartData, removeCart, decreaseCart, clearCart } = dataSlice.actions;

export default dataSlice.reducer;
