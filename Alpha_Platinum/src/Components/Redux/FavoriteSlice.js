// import { createSlice } from "@reduxjs/toolkit";
// // import { toast } from "react-toastify";


// // const initialState = {
// //   cart: localStorage.getItem("cart")
// //     ? JSON.parse(localStorage.getItem("cart"))
// //     : [],
// // }

// const initialState = {
//   favorite: [],
//   favoriteTotalQuantity: 0,
//   favoriteTotalAmount: 0,
// }

// const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState,
//   reducers: {
//       addFavorite: (state, action) => {
//           state.push(action.payload);
//       },
//       removeFavorite: (state, action) => {
//           return state.filter(favorite => favorite.id !== action.payload.id);
//       },
//   },
// });


// export const { addFavorite, removeFavorite } = favoritesSlice.actions;
// export default favoritesSlice.reducer;





















// // const favoriteslice = createSlice({
// //   name: "fav",
// //   initialState,
// //   reducers: {

// //     addToFavorite: (state, action) => {
// //       state.cart = state.cart.findIndex(
// //         (item) => item.id === action.payload.id
// //       );
// //     }
// //   }
// // })

// // export const {addToFavorite} = favoriteslice.actions;

// // export default favoriteslice.reducer