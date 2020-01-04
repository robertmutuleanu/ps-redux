import { UpsertCourseRequest } from '../../models/Course';
import { CREATE_COURSE, CoursesAction } from './actionTypes';

export const createCourse = (course: UpsertCourseRequest): CoursesAction => {
  return { type: CREATE_COURSE, course };
};
