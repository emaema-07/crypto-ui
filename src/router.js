import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import HomePage from './components/userboarding/HomePage';

const MainRouter = () => {
    return (
      <Router>
        <Switch>
          <Route path={["/home-page", "/"]}>
            <HomePage />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    );
}

export default MainRouter;