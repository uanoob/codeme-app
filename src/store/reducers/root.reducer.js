import { combineReducers } from 'redux';
import auth from './auth.reducer';
import validation from './validation.reducer';
import user from './user.reducer';

export default combineReducers({
  auth,
  validation,
  user,
});
