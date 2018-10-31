import {
  GET_ALL_CATEGORIES_START,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
  GET_SINGLE_CATEGORY_BY_ID_START,
  GET_SINGLE_CATEGORY_BY_ID_SUCCESS,
  GET_SINGLE_CATEGORY_BY_ID_FAIL,
} from '../actions/types';

const initialState = {
  categories: [],
  category: null,
  loading: false,
  loaded: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        categories: action.categories,
      };
    case GET_ALL_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case GET_SINGLE_CATEGORY_BY_ID_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_SINGLE_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        category: action.category,
      };
    case GET_SINGLE_CATEGORY_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}
