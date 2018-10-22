import axios from 'axios';

import {
  GET_USERS,
  GET_USER_BY_ID,
  IS_AUTH,
} from './types';

export const getClients = () => async dispatch => {
  const response = await axios.get(
    'https://incode-app.firebaseio.com/data.json',
  );
  dispatch({
    type: GET_USERS,
    payload: response.data,
  });
};

export const getClientById = (clients, id) => {
  const result = clients.find(client => client.contact.phone === id);
  return {
    type: GET_USER_BY_ID,
    payload: result,
  };
};





export const isAuth = bool => {
  return {
    type: IS_AUTH,
    payload: bool,
  };
};
