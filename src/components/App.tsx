import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import NotFoundPage from './common/NotFoundPage';
import CoursesPage from './courses/CoursePage';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/courses">
          <CoursesPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
