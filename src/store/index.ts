import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {},
    middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
