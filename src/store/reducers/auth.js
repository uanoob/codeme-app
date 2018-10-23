import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions/types";

const initialState = {
  token: null,
  userId: null,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        error: null
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
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
        userId: null
      };
    default:
      return state;
  }
}
