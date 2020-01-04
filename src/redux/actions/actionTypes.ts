import { UpsertCourseRequest } from '../../models/Course';

export const CREATE_COURSE = 'CREATE_COURSE';

type CreateCourseAction = {
  type: typeof CREATE_COURSE;
  course: UpsertCourseRequest;
};

export const DELETE_COURSE = 'DELETE_COURSE';

type DeleteCourseAction = {
  type: typeof DELETE_COURSE;
  courseId: string;
};

export type CoursesAction = CreateCourseAction | DeleteCourseAction;

export type AppAction = CoursesAction;
