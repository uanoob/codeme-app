import { IS_NAME_INPUT_VALID, IS_PASSWORD_INPUT_VALID } from '../actions/types';

const initialState = {
  isNameInputValid: false,
  isPasswordInputValid: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_NAME_INPUT_VALID:
      return {
        ...state,
        isNameInputValid: action.flag,
        error: null,
      };
    case IS_PASSWORD_INPUT_VALID:
      return {
        ...state,
        isPasswordInputValid: action.flag,
        error: null,
      };
    default:
      return state;
  }
}
