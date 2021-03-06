import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_BY_AUTHOR_ID_START,
  GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS,
  GET_ALL_POSTS_BY_AUTHOR_ID_FAIL,
  GET_ALL_POSTS_BY_CATEGORY_START,
  GET_ALL_POSTS_BY_CATEGORY_SUCCESS,
  GET_ALL_POSTS_BY_CATEGORY_FAIL,
} from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  loaded: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: action.posts,
      };
    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case GET_ALL_POSTS_BY_AUTHOR_ID_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: action.posts,
      };
    case GET_ALL_POSTS_BY_AUTHOR_ID_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case GET_ALL_POSTS_BY_CATEGORY_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_POSTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: action.posts,
      };
    case GET_ALL_POSTS_BY_CATEGORY_FAIL:
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
