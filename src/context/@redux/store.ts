import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import type { Middleware } from 'redux'
import { RootReducer } from "./@reducer/reducers";
const isDev = process.env.NODE_ENV !== 'production';
const middleWares = [isDev && logger].filter((middleware): middleware is Middleware => Boolean(middleware));
const Store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            {
                serializableCheck: { ignoreActions: true },
                // immutableCheck: isDev && false
            }
        ).concat(middleWares)
});
const Persistor = persistStore(Store)

export { Store, Persistor };