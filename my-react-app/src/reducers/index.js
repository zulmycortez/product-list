import { combineReducers } from "redux";
import ProductReducer from "./reducer-product";

const rootReducer = combineReducers({
  products: ProductReducer
});

export default rootReducer;
