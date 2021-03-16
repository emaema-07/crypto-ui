import React from 'react';

import './App.css';
import Router from './router';
import { Jumbotron, Card, } from 'react-bootstrap'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <img style={styles.logo_style} src="https://getspendl.com/wp-content/themes/understrap-child/img/logo.svg" alt="logo" />
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

export default App;

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
  footer_text_style: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left'
  }
}
