import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
   items: Product[];
}

const initialState: CartState = {
   items: []
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state: CartState, action: PayloadAction<Product>) => {
         state.items = [...state.items, action.payload];
      },
      removeFromCart: (state: CartState, action: PayloadAction<{ id: string }>) => {
         const index = state.items.findIndex((item: Product) => item._id === action.payload.id);
         let newCart = [...state.items];
         if (index >= 0) {
            newCart.splice(index, 1);
         } else {
            console.log(`Cant remove product (id: ${action.payload.id}) as its not in the cart!`);
         }
         state.items = newCart;
      }
   }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
