import React from 'react';
import { connect } from "react-redux";
import { actions } from "../src/store/reducers/profile";
import './App.css';
import Router from './router';
import { Jumbotron, Card,NavDropdown } from 'react-bootstrap'
import Footer from './Footer';

function App(props) {

  const onLogoutPress = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("current_user_details");
    props.clearLogin();
    const link = window.location.host;
    window.location.href = window.location.protocol+"//"+link;
  };
  return (
    <div className="App">
      <img style={styles.logo_style} src="https://getspendl.com/wp-content/themes/understrap-child/img/logo.svg" alt="logo" />
      <div >
      <NavDropdown  active={false} style={styles.header} title={
        <span style={{color:"black"}}>Menu</span>
    } id="basic-nav-dropdown">
       <NavDropdown.Item  href="/">Home</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  href="/buycrypto">Buy Crypto</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/transaction-history">Trade History</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/phone-verify">Kyc</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => onLogoutPress()}>Logout</NavDropdown.Item>
      </NavDropdown>
      </div>
      <Card style={styles.cardStyle}>
        <Card.Body>
          <Router />
        </Card.Body>
      </Card>
      <Jumbotron
        fluid
        style={styles.footer_style}
      >
        <Footer /> 
      </Jumbotron>
    </div>
  );
}

const mapStateToProps = state => {
  return {
  };
};
export default connect(mapStateToProps, {
  clearLogin: actions.clearLogin
})(App);

const styles = {
  logo_style: {
    marginTop: 20,
    marginLeft: 20,
    position: "absolute",
    left: 20,
  },
  cardStyle: {
    width: "40%",
    position: "absolute",
    left:" 50%",
    top: "40%",
    height: "50%",
    overflow: "auto",
    transform: "translate(-50%, -50%)",
  },
  footer_style: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "25%",
    marginBottom: 0,
    backgroundColor: '#1b243f',
    padding: 0,
  },
  header: {
    position:'absolute',
    right:20,
    top:20,
    "& a":{
      color: 'black'
    }
},
  footer_text_style: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left'
  },
}
