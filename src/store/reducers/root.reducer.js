import { combineReducers } from 'redux';
import auth from './auth.reducer';
import validation from './validation.reducer';
import user from './user.reducer';
import categories from './category.reducer';

export default combineReducers({
  auth,
  validation,
  user,
  categories,
});
