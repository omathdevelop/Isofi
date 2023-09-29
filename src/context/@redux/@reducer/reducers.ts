import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import { StateMangementReducer } from "../@slices/slice";

const RootReducer = combineReducers({
    stateManagement: StateMangementReducer
});
type RootState = ReturnType<typeof RootReducer>
export { RootReducer };
export type { RootState };