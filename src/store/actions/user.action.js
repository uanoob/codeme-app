import axios from '../../axios';

import {
  GET_USER_BY_TOKEN_START,
  GET_USER_BY_TOKEN_SUCCESS,
  GET_USER_BY_TOKEN_FAIL,
  SET_IS_AUTHOR,
} from './types';

import { isLogined } from './root.action';

export const setIsAuthor = flag => ({
  type: SET_IS_AUTHOR,
  flag,
});

export const getUserByTokenStart = () => ({
  type: GET_USER_BY_TOKEN_START,
});

export const getUserByTokenSuccess = user => ({
  type: GET_USER_BY_TOKEN_SUCCESS,
  user,
});

export const getUserByTokenFail = error => ({
  type: GET_USER_BY_TOKEN_FAIL,
  error,
});

export const getUserByToken = () => (dispatch) => {
  dispatch(getUserByTokenStart());
  axios
    .get('/user')
    .then((response) => {
      dispatch(getUserByTokenSuccess(response.data));
      dispatch(isLogined(true));
    })
    .catch((err) => {
      dispatch(getUserByTokenFail(err));
    });
};
