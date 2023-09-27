import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../@reducer/reducers";
const UrlReducer = (state: RootState) => state.url;

const onUrlSelector = createSelector(
    [UrlReducer],
    (UrlSlice) => UrlSlice.url
);

export { onUrlSelector };