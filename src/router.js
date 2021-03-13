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
import PhoneVerify from './components/userboarding/PhoneVerification';
import Address from './components/userboarding/Address';
import IdentificationDocument from './components/userboarding/IdentificationDocument';

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
        <Route path="/phone-verify">
          <PhoneVerify />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
        <Route path="/document">
          <IdentificationDocument />
        </Route>
        <Route path={["/home-page", "/"]}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;