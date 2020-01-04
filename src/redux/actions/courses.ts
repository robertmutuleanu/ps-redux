import * as types from './actionTypes';
import { CoursesAction, AppThunk } from './actionTypes';
import * as api from '../../api/courses';
import { UpsertCourseRequest, Course } from '../../models/Course';

export const getCourses = (): AppThunk => dispatch => {
  dispatch(getCoursesRequest());

  return api.getCourses().then(
    response => {
      dispatch(getCoursesSuccess(response));
      return response;
    },
    errorMessage => {
      dispatch(getCoursesFailure(errorMessage));
      return { error: true, message: errorMessage };
    }
  );
};

export const getCoursesRequest = (): CoursesAction => ({ type: types.GET_COURSES_REQUEST });
export const getCoursesSuccess = (courses: Course[]): CoursesAction => ({ type: types.GET_COURSES_SUCCESS, courses });
export const getCoursesFailure = (message: string): CoursesAction => ({ type: types.GET_COURSES_FAILURE, message });

export const createCourse = (course: UpsertCourseRequest): CoursesAction => {
  return { type: types.CREATE_COURSE, course };
};
