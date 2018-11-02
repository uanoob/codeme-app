import {
  GET_USER_BY_TOKEN_START,
  GET_USER_BY_TOKEN_SUCCESS,
  GET_USER_BY_TOKEN_FAIL,
  IS_LOGINED,
  SET_IS_AUTHOR,
  LOGOUT,
} from '../actions/types';

const initialState = {
  user: {
    id: '',
    login: '',
    password: '',
  },
  isLogined: false,
  isAuthor: false,
  loading: false,
  loaded: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
    case IS_LOGINED:
      return {
        ...state,
        isLogined: action.isLogined,
        error: null,
      };
    case SET_IS_AUTHOR:
      return {
        ...state,
        isAuthor: action.flag,
      };
    case LOGOUT:
      return {
        ...state,
        user: {
          id: '',
          login: '',
          password: '',
        },
        isLogined: false,
        loaded: false,
      };
    default:
      return state;
  }
}
