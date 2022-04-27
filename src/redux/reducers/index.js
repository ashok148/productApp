import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from './productsReducers'
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
