import { handleResponse, handleError } from '../utils/fetch';
import { Author } from '../models/Author';

const baseUrl = process.env.REACT_APP_API_URL + '/authors/';

export const getAuthors = (): Promise<Author[]> => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};
