import { CREATE_COURSE, AppAction } from '../actions/actionTypes';
import Course from '../../models/Course';

export type CoursesState = Course[];

export default (state: CoursesState = [], action: AppAction): CoursesState => {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, action.course];
    default:
      return state;
  }
};
