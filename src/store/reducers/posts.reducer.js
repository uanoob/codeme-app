import {
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_POST_BY_CATEGORY_START,
  GET_POST_BY_CATEGORY_SUCCESS,
  GET_POST_BY_CATEGORY_FAIL,
  GET_POST_BY_ID_START,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case GET_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_POST_BY_CATEGORY_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POST_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case GET_POST_BY_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_POST_BY_ID_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.post,
      };
    case GET_POST_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
