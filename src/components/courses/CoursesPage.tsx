import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getCourses, getAuthors } from '../../redux/actions';
import { AppState } from '../../redux/reducers';
import CourseList from './CourseList';
import { Link, RouteComponentProps } from 'react-router-dom';

const CoursesPage = (props: Props) => {
  const { courses } = useSelector(mapState, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getAuthors());
  }, [dispatch]);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course" style={{ marginBottom: 20 }}>
        Add course
      </Link>
      <CourseList courses={courses} />
    </>
  );
};

type Props = {} & RouteComponentProps;

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
