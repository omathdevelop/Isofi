import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";


import { StateMangementReducer, NaviGationReducer } from "../@slices/slices";

const NaviGationPersistConfig = {
    key: 'navigation',
    storage:storage
}
const RootReducer = combineReducers({
    stateManagement: StateMangementReducer,
    navigation: persistReducer(NaviGationPersistConfig, NaviGationReducer)
});
type RootState = ReturnType<typeof RootReducer>
export { RootReducer };
export type { RootState };