import {
  GET_USERS,
  GET_USER_BY_ID,
  IS_AUTH,
} from '../actions/types';

const initialState = {
  data: [],
  auth: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, data: action.payload };
    case GET_USER_BY_ID:
      return { ...state, client: action.payload };
    case IS_AUTH:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
