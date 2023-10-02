/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE_MANAGEMENT, INITIAL_NAVIGATION_STATE } from '../@state/state';
const StateMangementSlice = createSlice({
    name: 'state_management',
    initialState: INITIAL_STATE_MANAGEMENT,
    reducers: {
        setUrl(state, action) {
            state.url = { ...action.payload } as object
        },
        setIsMenuOpen(state, action) {
            state.isMenuOpen = action.payload as boolean
        },
        setIsViewAnimate(state, action) {
            state.isViewAnimate = action.payload as boolean
        }
    }
});


const NaviGationSlice = createSlice(
    {
        name: 'navigation',
        initialState: INITIAL_NAVIGATION_STATE,
        reducers: {
            setNavigation(state, action) {
                state.naviagtion = action.payload
            }
        }

    }
)


// State Reducers  //
export const StateMangementReducer = StateMangementSlice.reducer;
export const NaviGationReducer = NaviGationSlice.reducer;

// State Action  //
export const {
    setUrl, setIsMenuOpen,
    setIsViewAnimate
} = StateMangementSlice.actions;


