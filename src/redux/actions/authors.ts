import * as types from './actionTypes';
import { AuthorsAction } from './actionTypes';
import { AppThunk } from '../store';
import * as api from '../../api/authors';
import { Author } from '../../models';

export const getAuthorsRequest = (): AuthorsAction => ({ type: types.GET_AUTHORS_REQUEST });
export const getAuthorsSuccess = (authors: Author[]): AuthorsAction => ({ type: types.GET_AUTHORS_SUCCESS, authors });
export const getAuthorsFailure = (message: string): AuthorsAction => ({ type: types.GET_AUTHORS_FAILURE, message });

export const getAuthors = (): AppThunk<Promise<any>> => dispatch => {
  dispatch(getAuthorsRequest());

  return api.getAuthors().then(
    response => {
      dispatch(getAuthorsSuccess(response));
    },
    (error: Error) => {
      dispatch(getAuthorsFailure(error.message));
      throw error;
    }
  );
};
