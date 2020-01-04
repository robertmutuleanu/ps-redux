import React from 'react';
import { Course } from '../../models/Course';
import { Link } from 'react-router-dom';

type CourseWithAuthorName = Course & { authorName: string };

type Props = {
  courses: CourseWithAuthorName[];
};

const CourseList = ({ courses }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(c => (
          <tr key={c.id}>
            <td>
              <a href={`https://pluralsight.com/courses/${c.slug}`} className="btn btn-light">
                Watch
              </a>
            </td>
            <td>
              <Link to={`/course/${c.slug}`}>{c.title}</Link>
            </td>
            <td>{c.authorName}</td>
            <td>{c.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
