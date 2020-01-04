import React from 'react';
import { Course } from '../../models';
import { Link } from 'react-router-dom';

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

type Props = {
  courses: CourseWithAuthorName[];
};

type CourseWithAuthorName = Course & { authorName: string };

export default CourseList;
