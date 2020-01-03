import Course from '../../models/Course';
import { CREATE_COURSE, AppAction } from './actionTypes';

export const createCourse = (course: Course): AppAction => {
  return { type: CREATE_COURSE, course };
};
