import {
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
} from '../Actions';

// -------------------------------------------------------------------------------------------------
const INITIAL_STATE = {
  products: [],
  fetchOn: false,
};

// -------------------------------------------------------------------------------------------------

const ProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS: {
      const { payload: { fetchOn } } = action;
      return {
        ...state,
        fetchOn,
      };
    }

    case REQUEST_PRODUCTS_SUCCESS: {
      const { payload: { products, fetchOn } } = action;
      return {
        ...state,
        products,
        fetchOn,
      };
    }

    case REQUEST_PRODUCTS_ERROR: {
      const { payload: { error } } = action;
      return {
        ...state,
        error,
      };
    }

    default:
      return state;
  }
};

export default ProductsReducer;
