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

export const getUserProfile = token => dispatch => {
  dispatch(getUserStart());
  console.log(token);
  const instance = axios.create({
    headers: { 'Authorization': "bearer " + token },
  });
  const url = 'https://incode-blog-internship.herokuapp.com/user';
  instance
    .get(url)
    .then(response => {
      dispatch(getUserSuccess(response.data));
    })
    .catch(err => {
      dispatch(getUserFail(err));
    });
};
