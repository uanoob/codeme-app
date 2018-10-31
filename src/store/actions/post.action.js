import axios from '../../axios';
import {
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  UPDATE_POST_START,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  GET_POST_BY_ID_START,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
} from './types';

import { getAllPostsByAuthorId } from './root.action';

const deletePostStart = () => ({
  type: DELETE_POST_START,
});

const deletePostSuccess = () => ({
  type: DELETE_POST_SUCCESS,
});

const deletePostFail = error => ({
  type: DELETE_POST_FAIL,
  error,
});

export const deletePosts = (postId, authorId) => (dispatch) => {
  dispatch(deletePostStart());
  axios
    .delete(`/post/${postId}`)
    .then((response) => {
      dispatch(deletePostSuccess(response.data.data));
      dispatch(getAllPostsByAuthorId(authorId));
    })
    .catch((err) => {
      dispatch(deletePostFail(err));
    });
};

const updatePostStart = () => ({
  type: UPDATE_POST_START,
});

const updatePostSuccess = () => ({
  type: UPDATE_POST_SUCCESS,
});

const updatePostFail = error => ({
  type: UPDATE_POST_FAIL,
  error,
});

export const updatePosts = (
  postId,
  title,
  body,
  authorId,
  authorName,
  categoryId,
  categoryName,
) => (dispatch) => {
  const updateData = {
    title,
    body,
    author_id: authorId,
    author_name: authorName,
    category_id: categoryId,
    category_name: categoryName,
  };
  dispatch(updatePostStart());
  axios
    .put(`/post/${postId}`, updateData)
    .then((response) => {
      dispatch(updatePostSuccess(response.data.data));
      dispatch(getAllPostsByAuthorId(authorId));
    })
    .catch((err) => {
      dispatch(updatePostFail(err));
    });
};

const createPostStart = () => ({
  type: CREATE_POST_START,
});

const createPostSuccess = () => ({
  type: CREATE_POST_SUCCESS,
});

const createPostFail = error => ({
  type: CREATE_POST_FAIL,
  error,
});

export const createPosts = (
  title,
  body,
  authorId,
  authorName,
  categoryId,
  categoryName,
) => (dispatch) => {
  const postData = {
    title,
    body,
    author_id: authorId,
    author_name: authorName,
    category_id: categoryId,
    category_name: categoryName,
  };
  dispatch(createPostStart());
  axios
    .post('/post', postData)
    .then((response) => {
      dispatch(createPostSuccess(response.data));
      dispatch(getAllPostsByAuthorId(authorId));
    })
    .catch((err) => {
      dispatch(createPostFail(err));
    });
};

const getPostByIdStart = () => ({
  type: GET_POST_BY_ID_START,
});

const getPostByIdSuccess = post => ({
  type: GET_POST_BY_ID_SUCCESS,
  post,
});

const getPostByIdFail = error => ({
  type: GET_POST_BY_ID_FAIL,
  error,
});

export const getPostById = id => (dispatch) => {
  dispatch(getPostByIdStart());
  axios
    .get(`/post/${id}`)
    .then((response) => {
      dispatch(getPostByIdSuccess(response.data.data));
    })
    .catch((err) => {
      dispatch(getPostByIdFail(err));
    });
};
