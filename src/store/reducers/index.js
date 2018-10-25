import { combineReducers } from 'redux';
import auth from './authentication';
import validation from './validation';
import user from './user';

export default combineReducers({
  auth,
  validation,
  user,
});
