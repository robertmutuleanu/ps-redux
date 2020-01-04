import * as types from '../actions/actionTypes';
import { AuthorsAction } from '../actions/actionTypes';
import { Author } from '../../models/Author';

export type AuthorsState = Author[];

export default (state: AuthorsState = [], action: AuthorsAction): AuthorsState => {
  switch (action.type) {
    case types.GET_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};
