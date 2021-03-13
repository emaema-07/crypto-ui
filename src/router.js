import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import HomePage from './components/userboarding/HomePage';
  import LoginPage from './components/userboarding/LoginPage';
  import VerifyEmail from './components/userboarding/VerifyEmail';

const MainRouter = () => {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/verify">
            <VerifyEmail />
          </Route>
          <Route path={["/home-page", "/"]}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
}

export default MainRouter;