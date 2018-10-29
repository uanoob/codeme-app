import { combineReducers } from 'redux';
import auth from './auth.reducer';
import validation from './validation.reducer';
import categories from './category.reducer';
import posts from './posts.reducer';
import comments from './comment.reducer';

export default combineReducers({
  auth,
  validation,
  categories,
  posts,
  comments,
});
