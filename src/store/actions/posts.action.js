import axios from '../../axios';
import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_BY_AUTHOR_ID_START,
  GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS,
  GET_ALL_POSTS_BY_AUTHOR_ID_FAIL,
  GET_ALL_POSTS_BY_CATEGORY_START,
  GET_ALL_POSTS_BY_CATEGORY_SUCCESS,
  GET_ALL_POSTS_BY_CATEGORY_FAIL,
} from './types';

const getAllPostsByAuthorIdStart = () => ({
  type: GET_ALL_POSTS_BY_AUTHOR_ID_START,
});

const getAllPostsByAuthorIdSuccess = posts => ({
  type: GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS,
  posts,
});

const getAllPostsByAuthorIdFail = error => ({
  type: GET_ALL_POSTS_BY_AUTHOR_ID_FAIL,
  error,
});

export const getAllPostsByAuthorId = id => (dispatch) => {
  dispatch(getAllPostsByAuthorIdStart());
  axios
    .get(`/post/author/${id}`)
    .then((response) => {
      dispatch(getAllPostsByAuthorIdSuccess(response.data.data));
    })
    .catch((err) => {
      dispatch(getAllPostsByAuthorIdFail(err));
    });
};

const getAllPostsByCategoryStart = () => ({
  type: GET_ALL_POSTS_BY_CATEGORY_START,
});

const getAllPostsByCategorySuccess = posts => ({
  type: GET_ALL_POSTS_BY_CATEGORY_SUCCESS,
  posts,
});

const getAllPostsByCategoryFail = error => ({
  type: GET_ALL_POSTS_BY_CATEGORY_FAIL,
  error,
});

export const getAllPostsByCategory = name => (dispatch) => {
  dispatch(getAllPostsByCategoryStart());
  axios
    .get(`/post/category/${name}`)
    .then((response) => {
      dispatch(getAllPostsByCategorySuccess(response.data.posts));
    })
    .catch((err) => {
      dispatch(getAllPostsByCategoryFail(err));
    });
};

const getAllPostsStart = () => ({
  type: GET_ALL_POSTS_START,
});

const getAllPostsSuccess = posts => ({
  type: GET_ALL_POSTS_SUCCESS,
  posts,
});

const getAllPostsFail = error => ({
  type: GET_ALL_POSTS_FAIL,
  error,
});

export const getAllPosts = () => (dispatch) => {
  dispatch(getAllPostsStart());
  axios
    .get('/post')
    .then((response) => {
      dispatch(getAllPostsSuccess(response.data.data));
    })
    .catch((err) => {
      dispatch(getAllPostsFail(err));
    });
};
