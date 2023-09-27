import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from 'redux-persist';
import { RootReducer } from "./@reducer/reducers";
// const isDev = process.env.NODE_ENV !== 'production';
// const middleWares = [isDev && ].filter(Boolean)

const Store = configureStore({
    reducer: RootReducer,
    // middleware: middleWares

});
// const persistor = persistStore(store)

export default Store;