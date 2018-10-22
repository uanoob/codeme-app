import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  IS_AUTH
} from "../actions/types";

const initialState = {
  data: [],
  auth: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, data: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, client: action.payload };
    case LOGIN_FAILURE:
      return { ...state, client: action.payload };
    case LOGIN_PENDING:
      return { ...state, data: action.payload };
    case REGISTER_PENDING:
      return { ...state, client: action.payload };
    case REGISTER_SUCCESS:
      return { ...state, client: action.payload };
    case REGISTER_FAILURE:
      return { ...state, client: action.payload };
    case IS_AUTH:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
