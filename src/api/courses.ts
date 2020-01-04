import { handleResponse, handleError } from '../utils/fetch';
import { Course, UpsertCourseRequest } from '../models';

const baseUrl = process.env.REACT_APP_API_URL + '/courses/';

export const getCourses = (): Promise<Course[]> => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};

export const getCourse = (slug: string): Promise<Course> => {
  return fetch(baseUrl + '?slug=' + slug)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok.');
      return response.json().then(courses => {
        if (courses.length !== 1) throw new Error('Course not found: ' + slug);
        return courses[0];
      });
    })
    .catch(handleError);
};

export const saveCourse = (course: UpsertCourseRequest): Promise<Course> => {
  return fetch(baseUrl + (course.id ?? ''), {
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
