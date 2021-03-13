import React from 'react';

import './App.css';
import Router from './router';
import { Jumbotron, Container, Card, Row, Col } from 'react-bootstrap'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div style={{position: 'absolute', left: 30, top: 30}}>
        <h4>SPENDL</h4>
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

export default App;

const styles = {
  cardStyle: {
    width: "50%",
    position: "absolute",
    left:" 50%",
    top: "30%",
    transform: "translate(-50%, -50%)",
  },
  footer_style: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "25%",
    marginBottom: 0,
    backgroundColor: '#2a1c41',
    padding: 0,
  },
  footer_text_style: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left'
  }
}
