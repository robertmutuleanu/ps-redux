export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
};

export const handleError = (error: Error) => {
  // eslint-disable-next-line no-console
  console.error('API call failed. ' + error);
  throw error;
};
