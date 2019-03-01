import {
  applyMiddleware,
  createStore as createReduxStore,
  Store,
  Action
} from "redux";

import { SetMaxX, SET_MAX_X } from "./actions";
import { AppState } from "./types";

const initialState: AppState = {
  x: 0,
  y: 0
};

export const reducer = (
  state: AppState = initialState,
  action: SetMaxX
): AppState => {
  switch (action.type) {
    case SET_MAX_X:
      return {
        ...state,
        maxX: action.payload
      };
    default:
      return state;
  }
};

export const createStore = (initialState: AppState) => {
  const store = createReduxStore(reducer, initialState);

  return store;
};
