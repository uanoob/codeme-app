import axios from 'axios';
import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAIL } from './types';

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

export const getUserProfile = token => (dispatch) => {
  dispatch(getUserStart());
  const instance = axios.create({
    headers: { 'x-access-token': token },
  });
  const url = 'http://localhost:8000/api/auth/me';
  instance
    .get(url)
    .then((response) => {
      dispatch(getUserSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getUserFail(err.response.data.error));
    });
};
