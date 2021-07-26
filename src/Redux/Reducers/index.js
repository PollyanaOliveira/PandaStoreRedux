import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import CategoriesListReducer from './CategoriesListReducer';
import ProductsReducer from './ProductsReducer';

const rootReducer = combineReducers({
  CartReducer,
  CategoriesListReducer,
  ProductsReducer,
});

export default rootReducer;
