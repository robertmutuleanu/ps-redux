import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getCourses, getAuthors } from '../../redux/actions';
import { AppState } from '../../redux/reducers';
import CourseList from './CourseList';

const CoursesPage = ({ courses, getCourses, getAuthors }: Props) => {
  useEffect(() => {
    getCourses();
    getAuthors();
  }, [getCourses, getAuthors]);

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

type Props = {} & RouteComponentProps & ConnectedProps<typeof connector>;

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

const mapDispatch = {
  getCourses,
  getAuthors
};

const connector = connect(mapState, mapDispatch);
export default connector(CoursesPage);
