import * as types from '../actions/actionTypes';
import { CoursesAction } from '../actions/actionTypes';
import { Course } from '../../models/Course';

export type CoursesState = Course[];

export default (state: CoursesState = [], action: CoursesAction): CoursesState => {
  switch (action.type) {
    case types.GET_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE:
      const course: Course = { ...action.course, id: action.course.id || '', slug: '', authorId: '', category: '' };
      return [...state, course];
    default:
      return state;
  }
};
