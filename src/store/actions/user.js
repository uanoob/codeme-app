import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAIL } from './types';
import axios from 'axios';

export const getUserStart = () => {
  return {
    type: GET_USER_START
  };
};

export const getUserSuccess = data => {
  return {
    type: GET_USER_SUCCESS,
    data
  };
};

export const getUserFail = error => {
  return {
    type: GET_USER_FAIL,
    error: error
  };
};

export const getUserProfile = token => {
  return dispatch => {
    dispatch(getUserStart());
    // console.log(token);
    const instance = axios.create({
      headers: { 'x-access-token': token }
    });
    let url = 'http://localhost:8000/api/auth/me';
    instance
      .get(url)
      .then(response => {
        // console.log(response.data);
        dispatch(getUserSuccess(response.data));
      })
      .catch(err => {
        dispatch(getUserFail(err.response.data.error));
      });
  };
};
