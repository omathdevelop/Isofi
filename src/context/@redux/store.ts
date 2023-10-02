import { configureStore } from "@reduxjs/toolkit";
import { 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
 } from 'redux-persist';
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
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
                }
                // immutableCheck: isDev && false
            }
        ).concat(middleWares)
});
const Persistor = persistStore(Store)

export { Store, Persistor };