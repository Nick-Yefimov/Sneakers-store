import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../models/cart';

const initialState: CartState = {
    items: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemsInCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload)
            state.totalPrice += action.payload.price;
        },
        // removeItemsInCart: (state, action) => {
        //     state.itemsInCart = state.itemsInCart.filter(sneaker => sneaker.id !== action.payload)
        // }
    }
})

export const { addItemsInCart } = cartSlice.actions;
export default cartSlice.reducer;