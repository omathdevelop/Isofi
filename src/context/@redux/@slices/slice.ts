import { createSlice } from '@reduxjs/toolkit';
import { URL_STATE } from '../@state/state';
const UrlSlice = createSlice({
    name: 'url',
    initialState: URL_STATE,
    reducers: {
        setUrl(state, action) {
            state.url = { ...action.payload} as object
        }
    }
});


export const UrlReducer = UrlSlice.reducer;
export const { setUrl } = UrlSlice.actions;


