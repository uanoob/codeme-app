import axios from 'axios';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  IS_LOGINED,
  LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from './types';

const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
});

const isLogined = flag => ({
  type: IS_LOGINED,
  isLogined: flag,
});

const loginFail = error => ({
  type: LOGIN_FAIL,
  error,
});

const logoutHandler = () => ({
  type: LOGOUT,
});

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(logoutHandler());
  dispatch(isLogined(false));
};

export const login = (name, password) => dispatch => {
  dispatch(loginStart());
  const loginData = {
    login: `${name}`,
    password: `${password}`,
  };
  const url = 'https://incode-blog-internship.herokuapp.com/login';
  axios
    .post(url, loginData)
    .then(response => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      dispatch(loginSuccess(response.data.token));
      dispatch(isLogined(true));
    })
    .catch(err => {
      dispatch(loginFail(err));
    });
};

const authStart = () => ({
  type: AUTH_START,
});

const authSuccess = token => ({
  type: AUTH_SUCCESS,
  token,
});

const authFail = error => ({
  type: AUTH_FAIL,
  error,
});

export const auth = (name, password) => dispatch => {
  dispatch(authStart());
  const authData = {
    login: `${name}`,
    password: `${password}`,
  };
  const url = 'https://incode-blog-internship.herokuapp.com/auth';
  axios
    .post(url, authData)
    .then(response => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      dispatch(authSuccess(response.data.token));
      dispatch(isLogined(response.data.success));
    })
    .catch(err => {
      dispatch(authFail(err));
    });
};

export const authCheckState = () => dispatch => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    dispatch(loginSuccess(token));
    dispatch(isLogined(true));
  }
};
