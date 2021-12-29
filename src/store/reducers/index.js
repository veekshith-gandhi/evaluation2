import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

export const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  alert: alertReducer,
});
