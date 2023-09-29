import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../@reducer/reducers";
const StateMangementReducer = (state: RootState) => state.stateManagement;

const onUrlSelector = createSelector(
    [StateMangementReducer],
    (UrlSlice) => UrlSlice.url
);

const onIsMenuOpenSelector = createSelector(
    [StateMangementReducer],
    (isMenuOpenSlice) => isMenuOpenSlice.isMenuOpen
);

const onIsViewAnimateSelector = createSelector(
    [StateMangementReducer],
    (isViewAnimateSlice) => isViewAnimateSlice.isViewAnimate
)
export { onUrlSelector, onIsMenuOpenSelector, onIsViewAnimateSelector };