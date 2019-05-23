import { createStore } from 'redux';
import reducer from './reducers/postReducers';

export default createStore(
  reducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_() 
);
