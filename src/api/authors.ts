import { handleResponse, handleError } from '../utils/fetch';
import { Author } from '../models/Author';

const baseUrl = process.env.API_URL + '/authors/';

export function getAuthors(): Promise<Author[]> {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
