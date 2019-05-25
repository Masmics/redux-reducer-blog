import { combineReducers } from 'redux';
import posts from './postReducers';
import comments from './commentReducer';

export default combineReducers({
  posts,
  comments
});
