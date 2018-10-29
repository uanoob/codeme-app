import {
  IS_NAME_INPUT_VALID,
  IS_PASSWORD_INPUT_VALID,
  IS_COMMENT_INPUT_VALID,
  IS_CATEGORY_INPUT_VALID,
  IS_TITLE_POST_INPUT_VALID,
  IS_BODY_POST_INPUT_VALID,
} from './types';

export const setNameInputValid = flag => ({
  type: IS_NAME_INPUT_VALID,
  flag,
});

export const setPasswordInputValid = flag => ({
  type: IS_PASSWORD_INPUT_VALID,
  flag,
});

export const setCommentInputValid = flag => ({
  type: IS_COMMENT_INPUT_VALID,
  flag,
});

export const setCategoryInputValid = flag => ({
  type: IS_CATEGORY_INPUT_VALID,
  flag,
});

export const setTitleInputValid = flag => ({
  type: IS_TITLE_POST_INPUT_VALID,
  flag,
});

export const setBodyInputValid = flag => ({
  type: IS_BODY_POST_INPUT_VALID,
  flag,
});
