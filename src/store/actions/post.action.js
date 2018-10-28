import axios from '../../axios';
import { GET_POST_START, GET_POST_SUCCESS, GET_POST_FAIL } from './types';

const getPostStart = () => ({
  type: GET_POST_START,
});

const getPostSuccess = posts => ({
  type: GET_POST_SUCCESS,
  posts,
});

export const getPostFail = error => ({
  type: GET_POST_FAIL,
  error,
});

export const getPosts = () => (dispatch) => {
  dispatch(getPostStart());
  axios
    .get('/post')
    .then((response) => {
      dispatch(getPostSuccess(response.data.data));
    })
    .catch((err) => {
      dispatch(getPostFail(err));
    });
};
