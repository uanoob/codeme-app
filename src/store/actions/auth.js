import axios from 'axios';

import {
  IS_NAME_VALID,
  IS_EMAIL_VALID,
  IS_PASSWORD_VALID,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  IS_AUTH,
} from './types';

export const setNameValid = bool => ({
  type: IS_NAME_VALID,
  bool,
});

export const setEmailValid = bool => ({
  type: IS_EMAIL_VALID,
  bool,
});

export const setPasswordValid = bool => ({
  type: IS_PASSWORD_VALID,
  bool,
});

const authStart = () => ({
  type: AUTH_START,
});

const authSuccess = token => ({
  type: AUTH_SUCCESS,
  token,
});

const isAuth = boolean => ({
  type: IS_AUTH,
  isAuth: boolean,
});

const authFail = error => ({
  type: AUTH_FAIL,
  error,
});

const logoutHandler = () => ({
  type: AUTH_LOGOUT,
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutHandler());
  dispatch(isAuth(false));
};

export const auth = (email, password) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    email,
    password,
  };
  const url = 'http://localhost:8000/api/auth/login';
  axios
    .post(url, authData)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(authSuccess(response.data.token));
      dispatch(isAuth(true));
    })
    .catch((err) => {
      dispatch(authFail(err.response.status));
    });
};

const signupStart = () => ({
  type: SIGNUP_START,
});

const signupSuccess = token => ({
  type: SIGNUP_SUCCESS,
  token,
});

const signupFail = error => ({
  type: SIGNUP_FAIL,
  error,
});

export const signup = (name, email, password) => (dispatch) => {
  dispatch(signupStart());
  const signupData = {
    name,
    email,
    password,
  };
  const url = 'http://localhost:8000/api/auth/register';
  axios
    .post(url, signupData)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(signupSuccess(response.data.token));
      dispatch(isAuth(true));
    })
    .catch((err) => {
      dispatch(signupFail(err.response.status));
    });
};

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    dispatch(authSuccess(token));
    dispatch(isAuth(true));
  }
};
