import React from 'react';

import './App.css';
import Router from './router';
import { Jumbotron, Card, } from 'react-bootstrap'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div style={styles.logo_style}>
        <h4 style={{display: 'none'}}>{'s'}</h4>
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
  logo_style: {
    backgroundImage: "url('https://getspendl.com/wp-content/themes/understrap-child/img/logo.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    marginTop: 20,
    marginLeft: 20,
    position: "relative",
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
