import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/apiSlice';
import cartSlice from '../features/cartSlice';

const store = configureStore({
    reducer: {
        sneakers: apiSlice,
        cart: cartSlice,
    },
    middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
