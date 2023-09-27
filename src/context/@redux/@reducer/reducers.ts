import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import { UrlReducer } from "../@slices/slice";

const RootReducer = combineReducers({
    url: UrlReducer
});
type RootState = ReturnType<typeof RootReducer>
export { RootReducer };
export type { RootState };