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
  IS_AUTH
} from './types';

export const isNameValid = bool => {
  return {
    type: IS_NAME_VALID,
    bool
  };
};

export const isEmailValid = bool => {
  return {
    type: IS_EMAIL_VALID,
    bool
  };
};

export const isPasswordValid = bool => {
  return {
    type: IS_PASSWORD_VALID,
    bool
  };
};

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: AUTH_SUCCESS,
    token
  };
};

export const isAuth = boolean => {
  return {
    type: IS_AUTH,
    isAuth: boolean
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(logoutHandler());
    dispatch(isAuth(false));
  };
};

export const logoutHandler = () => {
  return {
    type: AUTH_LOGOUT
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password
    };
    let url = 'http://localhost:8000/api/auth/login';
    axios
      .post(url, authData)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        dispatch(authSuccess(response.data.token));
        dispatch(isAuth(true));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const signupStart = () => {
  return {
    type: SIGNUP_START
  };
};

export const signupSuccess = token => {
  return {
    type: SIGNUP_SUCCESS,
    token
  };
};

export const signupFail = error => {
  return {
    type: SIGNUP_FAIL,
    error: error
  };
};

export const signup = (name, email, password) => {
  return dispatch => {
    dispatch(signupStart());
    const signupData = {
      name,
      email,
      password
    };
    let url = 'http://localhost:8000/api/auth/register';
    axios
      .post(url, signupData)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        dispatch(signupSuccess(response.data.token));
        dispatch(isAuth(true));
      })
      .catch(err => {
        dispatch(signupFail(err.response.data.error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
      dispatch(isAuth(true));
    }
  };
};
