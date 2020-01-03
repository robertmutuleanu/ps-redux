import { combineReducers } from 'redux';
import courses from './courses';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
