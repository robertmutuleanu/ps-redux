import React, { useState } from 'react';

const CoursePage = () => {
  const [course, setCourse] = useState({
    title: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCourse({
      ...course,
      title: event.target.value
    });
  };

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    alert(course.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
    </form>
  );
};

export default CoursePage;
