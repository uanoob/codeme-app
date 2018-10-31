import {
  GET_POST_BY_ID_START,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
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
  post: {
    id: '',
    title: '',
    body: '',
    author_id: '',
    author_name: '',
    category_id: '',
    category_name: '',
  },
  loading: false,
  loaded: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
        loaded: true,
        post: action.post,
      };
    case GET_POST_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
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
        loaded: true,
      };
    case CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
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
        loaded: true,
      };
    case UPDATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
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
        loaded: true,
      };
    case DELETE_POST_FAIL:
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
