import {
  REQUEST_CATEGORIES_LIST_SUCCESS,
  REQUEST_CATEGORIES_LIST_ERROR,
} from '../Actions';

// -------------------------------------------------------------------------------------------------
const INITIAL_STATE = {
  listCategories: [],
};

// -------------------------------------------------------------------------------------------------

const CategoriesListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES_LIST_SUCCESS: {
      const { payload: { listCategories } } = action;
      return {
        ...state,
        listCategories,
      };
    }

    case REQUEST_CATEGORIES_LIST_ERROR: {
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

export default CategoriesListReducer;
