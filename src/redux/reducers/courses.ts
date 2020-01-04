import { CREATE_COURSE, CoursesAction } from '../actions/actionTypes';
import { Course } from '../../models/Course';

export type CoursesState = Course[];

export default (state: CoursesState = [], action: CoursesAction): CoursesState => {
  switch (action.type) {
    case CREATE_COURSE:
      const course: Course = { ...action.course, id: action.course.id || '' };
      return [...state, course];
    default:
      return state;
  }
};
