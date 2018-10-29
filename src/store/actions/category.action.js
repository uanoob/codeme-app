import axios from '../../axios';
import { GET_CATEGORY_START, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL } from './types';

const getCategoryStart = () => ({
  type: GET_CATEGORY_START,
});

const getCategorySuccess = categories => ({
  type: GET_CATEGORY_SUCCESS,
  categories,
});

export const getCategoryFail = error => ({
  type: GET_CATEGORY_FAIL,
  error,
});

export const getCategories = () => (dispatch) => {
  dispatch(getCategoryStart());
  axios
    .get('/category')
    .then((response) => {
      dispatch(getCategorySuccess(response.data.categories));
    })
    .catch((err) => {
      dispatch(getCategoryFail(err));
    });
};

GET_CATEGORY_BY_ID