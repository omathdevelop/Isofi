/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Middleware } from "redux";
import type { RootState } from "../context/@redux/@reducer/reducers";
const loggerMiddleWare: Middleware<RootState> = (store) => (next) => (action) => {
    if (!action.type) return next(action);

    console.log('type:', action.type);
    console.log('payload:', action.payload);
    console.log('current_state', store.getState());

    next(action);

    console.log('next_state', store.getState());

};

export default loggerMiddleWare;