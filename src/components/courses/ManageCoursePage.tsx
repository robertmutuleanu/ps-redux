import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuthors, getCourse, saveCourse } from '../../redux/actions';
import { selectCourseBySlug } from '../../redux/reducers/courses';
import { AppState } from '../../redux/reducers';
import CourseForm, { Errors } from './CourseForm';
import { useThunkDispatch } from '../../redux/store';

const ManageCoursePage = (props: Props) => {
  const { course, authors } = useSelector((state: AppState) => mapState(state, props), shallowEqual);
  const dispatch = useThunkDispatch();

  const [courseData, setCourseData] = useState({
    id: course?.id ?? null,
    slug: course?.slug ?? '',
    title: course?.title ?? '',
    authorId: course?.authorId ?? null,
    category: course?.category ?? ''
  });
  const [errors, setErrors] = useState({} as Errors);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug && !course) {
      dispatch(getCourse(slug));
    } else if (slug) {
    }
  }, [course, props.match.params.slug, dispatch]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(getAuthors());
    }
  }, [authors.length, dispatch]);

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

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    if (!formIsValid()) {
      return;
    }

    setIsLoading(true);

    dispatch(saveCourse(courseData)).then(
      () => {
        props.history.push('/courses');
        toast.success(`Course saved.`);
      },
      () => {
        setIsLoading(false);
      }
    );
  };

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

type Props = {} & RouteComponentProps<{ slug?: string }>;

const mapState = (state: AppState, { match }: Props) => {
  const slug = match.params.slug;
  const course = slug ? selectCourseBySlug(state.courses, slug) : null;
  return {
    course,
    authors: state.authors
  };
};

export default ManageCoursePage;
