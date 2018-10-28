import axios from '../../axios';
import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAIL } from './types';
import { isLogined } from './root.action';

export const getUserStart = () => ({
  type: GET_USER_START,
});

export const getUserSuccess = data => ({
  type: GET_USER_SUCCESS,
  data,
});

export const getUserFail = error => ({
  type: GET_USER_FAIL,
  error,
});

export const getUserProfile = () => (dispatch) => {
  dispatch(getUserStart());
  axios
    .get('/user')
    .then((response) => {
      dispatch(getUserSuccess(response.data));
      dispatch(isLogined(true));
    })
    .catch((err) => {
      dispatch(getUserFail(err));
    });
};
