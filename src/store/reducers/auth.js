import {
  IS_NAME_VALID,
  IS_EMAIL_VALID,
  IS_PASSWORD_VALID,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions/types";

const initialState = {
  nameValid: false,
  emailValid: false,
  passwordValid: false,
  token: null,
  isLogined: false,
  loading: false,
  loaded: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_NAME_VALID:
      return {
        ...state,
        nameValid: action.payload,
        error: null
      };
    case IS_EMAIL_VALID:
      return {
        ...state,
        emailValid: action.payload,
        error: null
      };
    case IS_PASSWORD_VALID:
      return {
        ...state,
        passwordValid: action.payload,
        error: null
      };
    case AUTH_START:
      return {
        ...state,
        error: null
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        isLogined: true,
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
        isLogined: false
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
        isLogined: true,
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
