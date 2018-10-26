import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  IS_LOGINED,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from '../actions/types';

const initialState = {
  token: null,
  isLogined: false,
  loading: false,
  loaded: false,
  error: null,
};

export default function(state = initialState, action) {
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
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
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
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        error: null,
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}