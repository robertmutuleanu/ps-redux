import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuthors, getCourse, saveCourse } from '../../redux/actions';
import { selectCourseBySlug } from '../../redux/reducers/courses';
import { AppState } from '../../redux/reducers';
import CourseForm, { Errors } from './CourseForm';
import Spinner from '../common/Spinner';

const ManageCoursePage = ({ course, authors, getCourse, getAuthors, saveCourse, history, match }: Props) => {
  const [courseData, setCourseData] = useState({
    id: course?.id ?? null,
    slug: course?.slug ?? '',
    title: course?.title ?? '',
    authorId: course?.authorId ?? null,
    category: course?.category ?? ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const slug = match.params.slug;
    if (!slug) {
      return;
    }

    if (!course) {
      getCourse(slug);
    } else {
      setCourseData(course);
    }
  }, [course, getCourse, match.params.slug]);

  useEffect(() => {
    if (authors.length === 0) {
      getAuthors();
    }
  }, [authors.length, getAuthors]);

  const handleChange = ({ target }: React.ChangeEvent<any>): void => {
    setCourseData({
      ...courseData,
      [target.name]: target.name === 'authorId' ? parseInt(target.value, 10) : target.value
    });
  };

  const formIsValid = () => {
    const nextErrors: Errors = {};

    if (!courseData.title) nextErrors.title = 'Title is required.';
    if (!courseData.authorId) nextErrors.authorId = 'Author is required.';
    if (!courseData.category) nextErrors.category = 'Category is required.';

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (isLoading) return;
    if (!formIsValid()) return;
    setIsLoading(true);

    saveCourse(courseData).then(
      () => {
        history.push('/courses');
        toast.success(`Course saved.`);
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  const slug = match.params.slug;
  if (slug && !course) {
    return <Spinner />;
  }

  return (
    <CourseForm
      courseData={courseData}
      authors={authors}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isLoading={isLoading}
      errors={errors}
    />
  );
};

type Props = OwnProps & ConnectedProps<typeof connector>;

type OwnProps = {} & RouteComponentProps<{ slug?: string }>;

const mapState = (state: AppState, { match }: OwnProps) => {
  const slug = match.params.slug;
  const course = slug ? selectCourseBySlug(state.courses, slug) : null;
  return {
    course,
    authors: state.authors
  };
};

const mapDispatch = {
  getCourse,
  getAuthors,
  saveCourse
};

const connector = connect(mapState, mapDispatch);
export default connector(ManageCoursePage);
