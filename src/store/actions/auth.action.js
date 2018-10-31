import axios from '../../axios';

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

import { getUserByToken } from './root.action';

export const isLogined = flag => ({
  type: IS_LOGINED,
  isLogined: flag,
});

const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
});

const loginFail = error => ({
  type: LOGIN_FAIL,
  error,
});

const logoutHandler = () => ({
  type: LOGOUT,
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  axios.defaults.headers.common = {};
  dispatch(logoutHandler());
  dispatch(isLogined(false));
};

export const login = (name, password) => (dispatch) => {
  dispatch(loginStart());
  const loginData = {
    login: name,
    password,
  };
  axios
    .post('/login', loginData)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

      dispatch(loginSuccess(response.data.token));
      dispatch(getUserByToken());
    })
    .catch((err) => {
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

export const auth = (name, password) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    login: name,
    password,
  };
  axios
    .post('/auth', authData)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      // assign token to headers;
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

      dispatch(authSuccess(response.data.token));
      dispatch(getUserByToken());
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    dispatch(getUserByToken());
  }
};
