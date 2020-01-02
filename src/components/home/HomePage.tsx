import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
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

export default HomePage;
