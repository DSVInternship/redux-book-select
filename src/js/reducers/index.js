import { combineReducers } from 'redux';
import BookReducer from './BookReducer.js';
import ActiveBookReducer from './ActiveBookReducer.js';

const rootReducer = combineReducers({
  activeBook: ActiveBookReducer,
  books: BookReducer
});

export default rootReducer;
