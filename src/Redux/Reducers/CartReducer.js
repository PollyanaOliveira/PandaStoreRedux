import {
  ADD_CART,
  COMPLETED_BUY,
  CONTINUOUS_BUY,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  CLEAR_PRODUCTS,
  SUM_PRODUCTS,
} from '../Actions';

import {
  restoreFromLocalStorage,
  addCartRefact,
  completedBuy,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearProducts,
  totalSumProducts,
} from '../../service/globalFunctions';

// -------------------------------------------------------------------------------------------------
const initialState = restoreFromLocalStorage();
const { LScart } = initialState;
const INITIAL_STATE = {
  cart: LScart,
  totalSum: 0,
  updateSum: true,
};

// -------------------------------------------------------------------------------------------------

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { payload: { product } } = action;
      const { cart } = state;
      const productCart = addCartRefact(product, cart);
      return {
        ...state,
        cart: productCart,
      };
    }

    case INCREASE_QUANTITY: {
      const { payload: { id } } = action;
      const { cart } = state;
      const productCart = increaseQuantity(id, cart);
      const { updatedCart, updateSum } = productCart;
      return {
        ...state,
        cart: updatedCart,
        updateSum,
      };
    }

    case DECREASE_QUANTITY: {
      const { payload: { id } } = action;
      const { cart } = state;
      const productCart = decreaseQuantity(id, cart);
      const { updatedCart, updateSum } = productCart;
      if (updatedCart) {
        return {
          ...state,
          cart: updatedCart,
          updateSum,
        };
      }
      return state;
    }

    case REMOVE_ITEM: {
      const { payload: { id } } = action;
      const { cart } = state;
      const productCart = removeItem(id, cart);
      const { updatedCart, updateSum } = productCart;
      return {
        ...state,
        cart: updatedCart,
        updateSum,
      };
    }

    case CLEAR_PRODUCTS: {
      const productCart = clearProducts();
      const { updatedCart, updatedCount, updateSum } = productCart;
      return {
        ...state,
        cart: updatedCart,
        countScreen: updatedCount,
        updateSum,
      };
    }

    case SUM_PRODUCTS: {
      const { updateSum, cart } = state;
      const productCart = totalSumProducts(cart);
      const { totalSum, updateSuM } = productCart;
      if (updateSum) {
        return {
          ...state,
          totalSum,
          updateSum: updateSuM,
        };
      }
      return state;
    }

    case CONTINUOUS_BUY: {
      const { payload: { updateSum } } = action;
      return {
        ...state,
        updateSum,
      };
    }

    case COMPLETED_BUY: {
      const {
        payload: {
          cart,
          countScreen,
          totalSum,
          updateSum,
        },
      } = action;
      const productCart = completedBuy(cart, countScreen);
      const { updatedCart, updatedCount } = productCart;
      return {
        ...state,
        cart: updatedCart,
        countScreen: updatedCount,
        totalSum,
        updateSum,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
