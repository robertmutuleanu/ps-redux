import { Course, Author } from '../../models';

export const GET_COURSES_REQUEST = 'GET_COURSES_REQUEST';
type GetCoursesRequestAction = { type: typeof GET_COURSES_REQUEST };
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
type GetCoursesSuccessAction = { type: typeof GET_COURSES_SUCCESS; courses: Course[] };
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';
type GetCoursesFailureAction = { type: typeof GET_COURSES_FAILURE; message: string };

export const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST';
type GetCourseRequestAction = { type: typeof GET_COURSE_REQUEST };
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
type GetCourseSuccessAction = { type: typeof GET_COURSE_SUCCESS; course: Course };
export const GET_COURSE_FAILURE = 'GET_COURSE_FAILURE';
type GetCourseFailureAction = { type: typeof GET_COURSE_FAILURE; message: string };

export const CREATE_COURSE_REQUEST = 'CREATE_COURSE_REQUEST';
type CreateCourseRequestAction = { type: typeof CREATE_COURSE_REQUEST };
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
type CreateCourseSuccessAction = { type: typeof CREATE_COURSE_SUCCESS; course: Course };
export const CREATE_COURSE_FAILURE = 'CREATE_COURSE_FAILURE';
type CreateCourseFailureAction = { type: typeof CREATE_COURSE_FAILURE; message: string };

export const UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST';
type UpdateCourseRequestAction = { type: typeof UPDATE_COURSE_REQUEST };
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
type UpdateCourseSuccessAction = { type: typeof UPDATE_COURSE_SUCCESS; course: Course };
export const UPDATE_COURSE_FAILURE = 'UPDATE_COURSE_FAILURE';
type UpdateCourseFailureAction = { type: typeof UPDATE_COURSE_FAILURE; message: string };

export type CoursesAction =
  | GetCoursesRequestAction
  | GetCoursesSuccessAction
  | GetCoursesFailureAction
  | GetCourseRequestAction
  | GetCourseSuccessAction
  | GetCourseFailureAction
  | CreateCourseRequestAction
  | CreateCourseSuccessAction
  | CreateCourseFailureAction
  | UpdateCourseRequestAction
  | UpdateCourseSuccessAction
  | UpdateCourseFailureAction;

export const GET_AUTHORS_REQUEST = 'GET_AUTHORS_REQUEST';
type GetAuthorsRequestAction = { type: typeof GET_AUTHORS_REQUEST };
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS';
type GetAuthorsSuccessAction = { type: typeof GET_AUTHORS_SUCCESS; authors: Author[] };
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE';
type GetAuthorsFailureAction = { type: typeof GET_AUTHORS_FAILURE; message: string };

export type AuthorsAction = GetAuthorsRequestAction | GetAuthorsSuccessAction | GetAuthorsFailureAction;
