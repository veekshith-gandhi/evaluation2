import { compose, createStore } from "redux";
import { reducers } from "../Reducers";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(reducers, composeEnhancers);
