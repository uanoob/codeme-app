import {
  LOGIN_USER,
  REGISTER_USER,
  IS_AUTH,
} from '../actions/types';

const initialState = {
  data: [],
  auth: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, data: action.payload };
    case REGISTER_USER:
      return { ...state, client: action.payload };
    case IS_AUTH:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
