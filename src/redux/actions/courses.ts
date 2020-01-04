import * as types from './actionTypes';
import { CoursesAction } from './actionTypes';
import { AppThunk } from '../store';
import * as api from '../../api/courses';
import { UpsertCourseRequest, Course } from '../../models';

const getCoursesRequest = (): CoursesAction => ({ type: types.GET_COURSES_REQUEST });
const getCoursesSuccess = (courses: Course[]): CoursesAction => ({ type: types.GET_COURSES_SUCCESS, courses });
const getCoursesFailure = (message: string): CoursesAction => ({ type: types.GET_COURSES_FAILURE, message });

export const getCourses = (): AppThunk<Promise<any>> => dispatch => {
  dispatch(getCoursesRequest());

  return api.getCourses().then(
    response => {
      dispatch(getCoursesSuccess(response));
    },
    errorMessage => {
      dispatch(getCoursesFailure(errorMessage));
      throw errorMessage;
    }
  );
};

const getCourseRequest = (): CoursesAction => ({ type: types.GET_COURSE_REQUEST });
const getCourseSuccess = (course: Course): CoursesAction => ({ type: types.GET_COURSE_SUCCESS, course });
const getCourseFailure = (message: string): CoursesAction => ({ type: types.GET_COURSE_FAILURE, message });

export const getCourse = (slug: string): AppThunk<Promise<any>> => dispatch => {
  dispatch(getCourseRequest());

  return api.getCourse(slug).then(
    response => {
      dispatch(getCourseSuccess(response));
    },
    errorMessage => {
      dispatch(getCourseFailure(errorMessage));
      throw errorMessage;
    }
  );
};

const createCourseRequest = (): CoursesAction => ({ type: types.CREATE_COURSE_REQUEST });
const createCourseSuccess = (course: Course): CoursesAction => ({ type: types.CREATE_COURSE_SUCCESS, course });
const createCourseFailure = (message: string): CoursesAction => ({ type: types.CREATE_COURSE_FAILURE, message });
const updateCourseRequest = (): CoursesAction => ({ type: types.UPDATE_COURSE_REQUEST });
const updateCourseSuccess = (course: Course): CoursesAction => ({ type: types.UPDATE_COURSE_SUCCESS, course });
const updateCourseFailure = (message: string): CoursesAction => ({ type: types.UPDATE_COURSE_FAILURE, message });

export const saveCourse = (course: UpsertCourseRequest): AppThunk<Promise<any>> => dispatch => {
  course.id ? dispatch(updateCourseRequest()) : dispatch(createCourseRequest());

  return api.saveCourse(course).then(
    response => {
      course.id ? dispatch(updateCourseSuccess(response)) : dispatch(createCourseSuccess(response));
    },
    errorMessage => {
      course.id ? dispatch(updateCourseFailure(errorMessage)) : dispatch(createCourseFailure(errorMessage));
      throw errorMessage;
    }
  );
};
