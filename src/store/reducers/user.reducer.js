import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAIL } from '../actions/types';

const initialState = {
  profile: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        profile: action.data,
        error: null,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}
