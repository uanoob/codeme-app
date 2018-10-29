import { IS_NAME_INPUT_VALID, IS_PASSWORD_INPUT_VALID, IS_COMMENT_INPUT_VALID } from './types';

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
