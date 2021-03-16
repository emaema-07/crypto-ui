import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/userboarding/HomePage';
import LoginPage from './components/userboarding/LoginPage';
import VerifyEmail from './components/userboarding/VerifyEmail';
import PhoneVerify from './components/kyc/PhoneVerification';
import Address from './components/kyc/Address';
import IdentificationDocument from './components/kyc/IdentificationDocument';
import Load from './components/kyc/afterKyc/load';
import Dashboard from './components/dashboard/dashboard';
import LoadHistory from './components/dashboard/loadHistory';
import TransactionHistory from './components/dashboard/transactionHistory';
import BuyCrypto from './components/dashboard/buycrypto';
import AddAccount from './components/dashboard/addAccount';
import PaymentSummary from './components/dashboard/paymentSummary';
 
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
        <Route path="/load">
          <Load />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/load-history">
          <LoadHistory />
        </Route>
        <Route path="/transaction-history">
          <TransactionHistory />
        </Route>
        <Route path="/buycrypto">
          <BuyCrypto />
        </Route>
        <Route path="/add-account">
          <AddAccount />
        </Route>
        <Route path="/payment-summary">
          <PaymentSummary />
        </Route>
        <Route path={["/home-page", "/"]}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;