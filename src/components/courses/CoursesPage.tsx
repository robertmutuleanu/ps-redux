import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { AppState } from '../../redux/reducers';
import { getCourses, getAuthors } from '../../redux/actions';
import CourseList from './CourseList';

const CoursesPage = () => {
  const { courses } = useSelector(mapState, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getAuthors());
  }, [dispatch]);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
};

const mapState = (state: AppState) => {
  const coursesWithAuthorNames =
    state.authors.length === 0
      ? []
      : state.courses.map(c => {
          return { ...c, authorName: state.authors.find(a => a.id === c.authorId)?.name ?? '' };
        });

  return {
    courses: coursesWithAuthorNames,
    authors: state.authors
  };
};

export default CoursesPage;
