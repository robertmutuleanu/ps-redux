export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  return response.json();
};

export const handleError = (error: Error) => {
  // eslint-disable-next-line no-console
  console.error('API call failed. ' + error);
  throw error;
};
