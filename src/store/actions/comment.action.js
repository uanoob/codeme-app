import axios from '../../axios';
import {
  GET_COMMENTS_BY_POST_ID_START,
  GET_COMMENTS_BY_POST_ID_SUCCESS,
  GET_COMMENTS_BY_POST_ID_FAIL,
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

export default getCommentsByPostId;
