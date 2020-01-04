import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { Author, UpsertCourseRequest } from '../../models';

const CourseForm = ({ courseData, authors, onSubmit, onChange, isLoading = false, errors = {} }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>{courseData.id ? 'Edit' : 'Add'} course</h2>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={courseData.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        id="author"
        label="Author"
        name="authorId"
        defaultOption="Select author"
        options={authors.map(a => {
          return { value: a.id, text: a.name };
        })}
        value={courseData.authorId ?? ''}
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        id="category"
        label="Category"
        name="category"
        value={courseData.category}
        onChange={onChange}
        error={errors.category}
      />
      <button type="submit" disabled={isLoading} className="btn btn-primary">
        {isLoading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

type Props = {
  courseData: UpsertCourseRequest;
  authors: Author[];
  onSubmit: (event: React.SyntheticEvent) => void;
  onChange: (event: React.ChangeEvent<any>) => void;
  isLoading?: boolean;
  errors?: Errors;
};

export type Errors = {
  title?: string;
  authorId?: string;
  category?: string;
};

export default CourseForm;
