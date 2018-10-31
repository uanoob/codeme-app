import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_POST_BY_CATEGORY_START,
  GET_POST_BY_CATEGORY_SUCCESS,
  GET_POST_BY_CATEGORY_FAIL,
  GET_POST_BY_ID_START,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
  GET_ALL_POSTS_BY_AUTHOR_ID_START,
  GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS,
  GET_ALL_POSTS_BY_AUTHOR_ID_FAIL,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  UPDATE_POST_START,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: false,
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
        posts: action.posts,
      };
    case GET_ALL_POSTS_FAIL:
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
        posts: action.posts,
      };
    case GET_ALL_POSTS_BY_AUTHOR_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
