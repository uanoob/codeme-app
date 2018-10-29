import axios from '../../axios';
import {
  GET_COMMENTS_BY_POST_ID_START,
  GET_COMMENTS_BY_POST_ID_SUCCESS,
  GET_COMMENTS_BY_POST_ID_FAIL,
  CREATE_COMMENT_START,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from './types';

const getCommentsByPostIdStart = () => ({
  type: GET_COMMENTS_BY_POST_ID_START,
});

const getCommentsByPostIdSuccess = comments => ({
  type: GET_COMMENTS_BY_POST_ID_SUCCESS,
  comments,
});

const getCommentsByPostIdFail = error => ({
  type: GET_COMMENTS_BY_POST_ID_FAIL,
  error,
});

export const getCommentsByPostId = id => (dispatch) => {
  dispatch(getCommentsByPostIdStart());
  axios
    .get(`/comment/${id}`)
    .then((response) => {
      dispatch(getCommentsByPostIdSuccess(response.data.comments));
    })
    .catch((err) => {
      dispatch(getCommentsByPostIdFail(err));
    });
};

const createCommentStart = () => ({
  type: CREATE_COMMENT_START,
});

const createCommentSuccess = () => ({
  type: CREATE_COMMENT_SUCCESS,
});

const createCommentFail = error => ({
  type: CREATE_COMMENT_FAIL,
  error,
});

export const createComment = (body, authorId, authorName, postId) => (dispatch) => {
  dispatch(createCommentStart());
  const commentData = {
    body,
    author_id: authorId,
    author_name: authorName,
    post_id: postId,
  };
  axios
    .post(`/comment/${postId}`, commentData)
    .then(() => {
      dispatch(createCommentSuccess());
      dispatch(getCommentsByPostId(postId));
    })
    .catch((err) => {
      dispatch(createCommentFail(err));
    });
};
