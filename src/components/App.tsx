import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import NotFoundPage from './common/NotFoundPage';
import CoursesPage from './courses/CoursePage';

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
