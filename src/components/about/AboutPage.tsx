import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const AboutPage = (props: Props) => {
  return (
    <div>
      <h2>About</h2>
      <p>This app uses react, redux and react router.</p>
    </div>
  );
};

type Props = {} & RouteComponentProps;

export default AboutPage;
