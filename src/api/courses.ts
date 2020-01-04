import { handleResponse, handleError } from '../utils/fetch';
import { Course, UpsertCourseRequest } from '../models/Course';

const baseUrl = process.env.REACT_APP_API_URL + '/courses/';

export const getCourses = (): Promise<Course[]> => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};

export const saveCourse = (course: UpsertCourseRequest) => {
  return fetch(baseUrl + (course.id || ''), {
    method: course.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
};

export const deleteCourse = (courseId: string) => {
  return fetch(baseUrl + courseId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
};
