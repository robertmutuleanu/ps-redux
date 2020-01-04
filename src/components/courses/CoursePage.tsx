import React, { useState } from 'react';
import { AppState } from '../../redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { createCourse } from '../../redux/actions';

type Props = {};

const CoursePage = (props: Props) => {
  const courses = useSelector(mapState);
  const dispatch = useDispatch();

  const [course, setCourse] = useState({
    //id: null,
    //slug: '',
    title: ''
    //authorId: null,
    //category: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCourse({
      ...course,
      title: event.target.value
    });
  };

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    dispatch(createCourse(course));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
      {courses.map(c => (
        <div key={c.title}>{c.title}</div>
      ))}
    </form>
  );
};

const mapState = (state: AppState) => {
  return state.courses;
};

export default CoursePage;
