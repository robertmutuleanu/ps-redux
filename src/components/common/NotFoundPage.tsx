import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const NotFoundPage = (props: Props) => {
  return <h1>Oops! Page not found.</h1>;
};

type Props = {} & RouteComponentProps;

export default NotFoundPage;
