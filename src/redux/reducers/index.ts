import { combineReducers } from 'redux';
import courses from './courses';
import authors from './authors';

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
