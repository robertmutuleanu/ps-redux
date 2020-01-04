import * as types from './actionTypes';
import { AuthorsAction, AppThunk } from './actionTypes';
import * as api from '../../api/authors';
import { Author } from '../../models/Author';

export const getAuthors = (): AppThunk => dispatch => {
  dispatch(getAuthorsRequest());

  return api.getAuthors().then(
    response => {
      dispatch(getAuthorsSuccess(response));
      return response;
    },
    errorMessage => {
      dispatch(getAuthorsFailure(errorMessage));
      return { error: true, message: errorMessage };
    }
  );
};

export const getAuthorsRequest = (): AuthorsAction => ({ type: types.GET_AUTHORS_REQUEST });
export const getAuthorsSuccess = (authors: Author[]): AuthorsAction => ({ type: types.GET_AUTHORS_SUCCESS, authors });
export const getAuthorsFailure = (message: string): AuthorsAction => ({ type: types.GET_AUTHORS_FAILURE, message });
