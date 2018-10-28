import axios from '../../axios';
import {
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_POST_BY_CATEGORY_START,
  GET_POST_BY_CATEGORY_SUCCESS,
  GET_POST_BY_CATEGORY_FAIL,
} from './types';

const getPostStart = () => ({
  type: GET_POST_START,
});

const getPostSuccess = posts => ({
  type: GET_POST_SUCCESS,
  posts,
});

const getPostFail = error => ({
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

const getPostByCategoryStart = () => ({
  type: GET_POST_BY_CATEGORY_START,
});

const getPostByCategorySuccess = posts => ({
  type: GET_POST_BY_CATEGORY_SUCCESS,
  posts,
});

const getPostByCategoryFail = error => ({
  type: GET_POST_BY_CATEGORY_FAIL,
  error,
});

export const getPostsByCategory = name => (dispatch) => {
  dispatch(getPostByCategoryStart());
  axios
    .get(`/post/category/${name}`)
    .then((response) => {
      console.log(response.data);
      dispatch(getPostByCategorySuccess(response.data.posts));
    })
    .catch((err) => {
      dispatch(getPostByCategoryFail(err));
    });
};
