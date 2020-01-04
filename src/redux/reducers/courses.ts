import * as types from '../actions/actionTypes';
import { CoursesAction } from '../actions/actionTypes';
import { Course } from '../../models';

export type CoursesState = Course[];

export default (state: CoursesState = [], action: CoursesAction): CoursesState => {
  switch (action.type) {
    case types.GET_COURSES_SUCCESS:
      return action.courses;
    case types.GET_COURSE_SUCCESS:
      return [...state, action.course];
    case types.CREATE_COURSE_SUCCESS:
      return [...state, action.course];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(c => (c.id === action.course.id ? action.course : c));
    default:
      return state;
  }
};

export const selectCourseBySlug = (state: CoursesState, slug: string): Course | undefined => {
  return state.find(c => c.slug === slug);
};
