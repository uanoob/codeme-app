import { combineReducers } from 'redux';
import auth from './auth.reducer';
import currentUser from './user.reducer';
import validation from './validation.reducer';
import categories from './category.reducer';
import posts from './posts.reducer';
import post from './post.reducer';
import comments from './comment.reducer';

export default combineReducers({
  auth,
  currentUser,
  validation,
  categories,
  allPosts: posts,
  currentPost: post,
  comments,
});
