import { getCategories, getProductBySearchBar } from '../../service/api';
// CART -------------------------------------------------------------------
export const ADD_CART = 'ADD_CART';
export const COMPLETED_BUY = 'COMPLETED_BUY';
export const CONTINUOUS_BUY = 'CONTINUOUS_BUY';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const SUM_PRODUCTS = 'SUM_PRODUCTS';

export const addCart = (product, id) => ({
  type: ADD_CART,
  payload: {
    product,
    id,
  },
});

export const finishBuy = () => ({
  type: COMPLETED_BUY,
  payload: {
    cart: [],
    countScreen: [],
    totalSum: 0,
    updateSum: true,
  },
});

export const backHome = () => ({
  type: CONTINUOUS_BUY,
  payload: {
    updateSum: true,
  },
});

export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: {
    id,
  },
});

export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: {
    id,
  },
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: {
    id,
  },
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS,
});

export const sumProducts = () => ({
  type: SUM_PRODUCTS,
});
// ------------------------------------------------------------------------
// CATEGORIES LIST -------------------------------------------------------------------
export const FETCH_CATEGORIES_LIST = 'FETCH_CATEGORIES_LIST';
export const REQUEST_CATEGORIES_LIST_SUCCESS = 'REQUEST_CATEGORIES_LIST_SUCCESS';
export const REQUEST_CATEGORIES_LIST_ERROR = 'REQUEST_CATEGORIES_LIST_ERROR';

export const fetchCategoriesList = () => ({
  type: FETCH_CATEGORIES_LIST,
});

export const requestCategoriesListSuccess = (listCategories) => ({
  type: REQUEST_CATEGORIES_LIST_SUCCESS,
  payload: {
    listCategories,
  },
});

export const requestCategoriesListError = (error) => ({
  type: REQUEST_CATEGORIES_LIST_ERROR,
  payload: {
    error,
  },
});

// Fetch Thunk
export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesList());
  getCategories()
    .then((categoriesListSuccess) => dispatch(
      requestCategoriesListSuccess(categoriesListSuccess),
    ))
    .catch((categoriesListError) => dispatch(
      requestCategoriesListError(categoriesListError),
    ));
};
// -------------------------------------------------------------------------
// PRODUCTS -------------------------------------------------------------------
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_PRODUCTS_SUCCESS = 'REQUEST_PRODUCTS_SUCCESS';
export const REQUEST_PRODUCTS_ERROR = 'REQUEST_PRODUCTS_ERROR';

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
  payload: {
    fetchOn: true,
  },
});

export const requestProductsSuccess = (products) => ({
  type: REQUEST_PRODUCTS_SUCCESS,
  payload: {
    products: products.results,
    fetchOn: true,
  },
});

export const requestProductsError = (error) => ({
  type: REQUEST_PRODUCTS_ERROR,
  payload: {
    error,
  },
});

// Fetch Thunk
const defaultParam = '';
export const fetchProducts = (categoryId = defaultParam, query = defaultParam) => (dispatch) => {
  dispatch(requestProducts());
  getProductBySearchBar(categoryId, query)
    .then((ProductsSuccess) => dispatch(
      requestProductsSuccess(ProductsSuccess),
    ))
    .catch((ProductsError) => dispatch(
      requestProductsError(ProductsError),
    ));
};
// -------------------------------------------------------------------------
