import axios from '../../axios';
import {
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  GET_POST_BY_CATEGORY_START,
  GET_POST_BY_CATEGORY_SUCCESS,
  GET_POST_BY_CATEGORY_FAIL,
  GET_POST_BY_ID_START,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
  GET_ALL_POSTS_BY_AUTHOR_ID_START,
  GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS,
  GET_ALL_POSTS_BY_AUTHOR_ID_FAIL,
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

const deletePostStart = () => ({
  type: DELETE_POST_START,
});

const deletePostSuccess = posts => ({
  type: DELETE_POST_SUCCESS,
  posts,
});

const deletePostFail = error => ({
  type: DELETE_POST_FAIL,
  error,
});

export const deletePosts = (postId, userId) => (dispatch) => {
  dispatch(deletePostStart());
  axios
    .delete(`/post/${postId}`)
    .then((response) => {
      console.log(response);
      dispatch(deletePostSuccess(response.data.success));
      dispatch(getAllPostsByAuthorId(userId));
    })
    .catch((err) => {
      dispatch(deletePostFail(err));
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
      dispatch(getPostByCategorySuccess(response.data.posts));
    })
    .catch((err) => {
      dispatch(getPostByCategoryFail(err));
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
