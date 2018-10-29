import axios from '../../axios';
import {
  GET_ALL_CATEGORIES_START,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
  GET_SINGLE_CATEGORY_BY_ID_START,
  GET_SINGLE_CATEGORY_BY_ID_SUCCESS,
  GET_SINGLE_CATEGORY_BY_ID_FAIL,
} from './types';

const getAllCategoriesStart = () => ({
  type: GET_ALL_CATEGORIES_START,
});

const getAllCategoriesSuccess = categories => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  categories,
});

export const getAllCategoriesFail = error => ({
  type: GET_ALL_CATEGORIES_FAIL,
  error,
});

export const getAllCategories = () => (dispatch) => {
  dispatch(getAllCategoriesStart());
  axios
    .get('/category')
    .then((response) => {
      dispatch(getAllCategoriesSuccess(response.data.categories));
    })
    .catch((err) => {
      dispatch(getAllCategoriesFail(err));
    });
};

const getSingleCategoryByIdStart = () => ({
  type: GET_SINGLE_CATEGORY_BY_ID_START,
});

const getSingleCategoryByIdSuccess = category => ({
  type: GET_SINGLE_CATEGORY_BY_ID_SUCCESS,
  category,
});

export const getSingleCategoryByIdFail = error => ({
  type: GET_SINGLE_CATEGORY_BY_ID_FAIL,
  error,
});

export const getSingleCategoryById = id => (dispatch) => {
  dispatch(getSingleCategoryByIdStart());
  axios
    .get(`category/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch(getSingleCategoryByIdSuccess(response.data.category));
    })
    .catch((err) => {
      dispatch(getSingleCategoryByIdFail(err));
    });
};
