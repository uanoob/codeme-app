import {
  IS_NAME_INPUT_VALID,
  IS_PASSWORD_INPUT_VALID,
  IS_COMMENT_INPUT_VALID,
  IS_CATEGORY_INPUT_VALID,
  IS_TITLE_POST_INPUT_VALID,
  IS_BODY_POST_INPUT_VALID,
} from '../actions/types';

const initialState = {
  isNameInputValid: false,
  isPasswordInputValid: false,
  isCommentInputValid: false,
  isCategoryInputValid: false,
  isTitleInputValid: false,
  isBodyInputValid: false,
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
    case IS_COMMENT_INPUT_VALID:
      return {
        ...state,
        isCommentInputValid: action.flag,
        error: null,
      };
    case IS_CATEGORY_INPUT_VALID:
      return {
        ...state,
        isCategoryInputValid: action.flag,
        error: null,
      };
    case IS_TITLE_POST_INPUT_VALID:
      return {
        ...state,
        isTitleInputValid: action.flag,
        error: null,
      };
    case IS_BODY_POST_INPUT_VALID:
      return {
        ...state,
        isBodyInputValid: action.flag,
        error: null,
      };
    default:
      return state;
  }
}
