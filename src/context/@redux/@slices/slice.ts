import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE_MANAGEMENT} from '../@state/state';
const StateMangementSlice = createSlice({
    name: 'state_management',
    initialState: INITIAL_STATE_MANAGEMENT,
    reducers: {
        setUrl(state, action) {
            state.url = { ...action.payload} as object
        },
        setIsMenuOpen(state, action){
            state.isMenuOpen = action.payload as boolean
        },
        setIsViewAnimate(state, action){
            state.isViewAnimate = action.payload as boolean
        }
    }
});




export const StateMangementReducer = StateMangementSlice.reducer;
export const { setUrl, setIsMenuOpen, setIsViewAnimate } = StateMangementSlice.actions;


