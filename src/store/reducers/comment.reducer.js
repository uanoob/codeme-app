import {
  GET_COMMENTS_BY_POST_ID_START,
  GET_COMMENTS_BY_POST_ID_SUCCESS,
  GET_COMMENTS_BY_POST_ID_FAIL,
  CREATE_COMMENT_START,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from '../actions/types';

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS_BY_POST_ID_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COMMENTS_BY_POST_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments,
      };
    case GET_COMMENTS_BY_POST_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_COMMENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
