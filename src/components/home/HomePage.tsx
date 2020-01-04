import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const HomePage = (props: Props) => {
  return (
    <div className="jumbotron">
      <h1>Pluralsight administration</h1>
      <p>React, redux and react router for web apps.</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

type Props = {} & RouteComponentProps;

export default HomePage;
