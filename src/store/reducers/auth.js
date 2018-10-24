import {
  IS_NAME_VALID,
  IS_EMAIL_VALID,
  IS_PASSWORD_VALID,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  IS_AUTH,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions/types";

const initialState = {
  nameValid: false,
  emailValid: false,
  passwordValid: false,
  token: null,
  isAuth: false,
  loading: false,
  loaded: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_NAME_VALID:
      return {
        ...state,
        nameValid: action.bool,
        error: null
      };
    case IS_EMAIL_VALID:
      return {
        ...state,
        emailValid: action.bool,
        error: null
      };
    case IS_PASSWORD_VALID:
      return {
        ...state,
        passwordValid: action.bool,
        error: null
      };
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        loaded: true,
        error: null
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      };
      case IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
        error: null
      };
    case SIGNUP_START:
      return {
        ...state,
        error: null
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.token,
        error: null
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
