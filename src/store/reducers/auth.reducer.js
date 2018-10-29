import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  IS_LOGINED,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  GET_USER_BY_TOKEN_START,
  GET_USER_BY_TOKEN_SUCCESS,
  GET_USER_BY_TOKEN_FAIL,
} from '../actions/types';

const initialState = {
  token: null,
  user: null,
  isLogined: false,
  loading: false,
  loaded: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        loaded: true,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    case IS_LOGINED:
      return {
        ...state,
        isLogined: action.isLogined,
        error: null,
      };
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        loaded: true,
        error: null,
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_USER_BY_TOKEN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_BY_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
        loaded: true,
        error: null,
      };
    case GET_USER_BY_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
