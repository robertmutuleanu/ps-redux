import Course from '../../models/Course';
import { CREATE_COURSE, CoursesAction } from './actionTypes';

export const createCourse = (course: Course): CoursesAction => {
  return { type: CREATE_COURSE, course };
};
