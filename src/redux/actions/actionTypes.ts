import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { AppState } from '../reducers';
import { UpsertCourseRequest, Course } from '../../models/Course';
import { Author } from '../../models/Author';

export const GET_COURSES_REQUEST = 'GET_COURSES_REQUEST';
type GetCoursesRequestAction = { type: typeof GET_COURSES_REQUEST };

export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
type GetCoursesSuccessAction = { type: typeof GET_COURSES_SUCCESS; courses: Course[] };

export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';
type GetCoursesFailureAction = { type: typeof GET_COURSES_FAILURE; message: string };

export const CREATE_COURSE = 'CREATE_COURSE';
type CreateCourseAction = { type: typeof CREATE_COURSE; course: UpsertCourseRequest };

export type CoursesAction =
  | GetCoursesRequestAction
  | GetCoursesSuccessAction
  | GetCoursesFailureAction
  | CreateCourseAction;

export const GET_AUTHORS_REQUEST = 'GET_AUTHORS_REQUEST';
type GetAuthorsRequestAction = { type: typeof GET_AUTHORS_REQUEST };

export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS';
type GetAuthorsSuccessAction = { type: typeof GET_AUTHORS_SUCCESS; authors: Author[] };

export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE';
type GetAuthorsFailureAction = { type: typeof GET_AUTHORS_FAILURE; message: string };

export type AuthorsAction = GetAuthorsRequestAction | GetAuthorsSuccessAction | GetAuthorsFailureAction;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, null, Action<string>>;
