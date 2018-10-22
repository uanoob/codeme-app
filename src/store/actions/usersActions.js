import axios from 'axios';

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  IS_AUTH,
} from './types';

export const loginUser = () => async dispatch => {
  const response = await axios.get(
    'https://incode-app.firebaseio.com/data.json',
  );
  dispatch({
    type: LOGIN_USER,
    payload: response.data,
  });
};

export const registerUser = (clients, id) => {
  const result = clients.find(client => client.contact.phone === id);
  return {
    type: REGISTER_USER,
    payload: result,
  };
};





export const isAuth = bool => {
  return {
    type: IS_AUTH,
    payload: bool,
  };
};
