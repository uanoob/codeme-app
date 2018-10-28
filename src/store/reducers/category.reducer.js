import { GET_CATEGORY_START, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL } from '../actions/types';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.categories,
      };
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
