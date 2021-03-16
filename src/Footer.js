import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container style={{marginBottom: 0, marginTop: 20}}>
      <Row>
        <Col style={{textAlign: 'left', color: 'white'}}>
          <div>
            <h6>Supported Countries</h6>
          </div>
          <div style={{opacity: 0.5}}>
            <p>Spendl is available in 150+ countries</p>
          </div>
        </Col>
        <Col style={{textAlign: 'left', color: 'white'}}>
          <div>
            <h6>Status</h6>
          </div>
          <div style={{opacity: 0.5}}>
            <p>Service notices, maintainance and incident reports</p>
          </div>
        </Col>
        <Col style={{textAlign: 'left', color: 'white'}}>
          <div>
            <h6>Terms {"&"} Conditions</h6>
          </div>
          <div style={{opacity: 0.5}}>
            <p>The nitty gritty details of our service</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{textAlign: 'left', color: 'white'}}>
          <div>
            <h6>What is the Bitcoin Lightning Network</h6>
          </div>
          <div style={{opacity: 0.5}}>
            <p>Instant Bitcoin transactions make real</p>
          </div>
        </Col>
        <Col style={{textAlign: 'left', color: 'white'}}>
          <div>
            <h6>Support</h6>
          </div>
          <div style={{opacity: 0.5}}>
            <p>Questions, answer both frequent and infrequent </p>
          </div>
        </Col>
        <Col style={{textAlign: 'left', color: 'white'}}>
          <div>
            <h6>Privacy Policy</h6>
          </div>
          <div style={{opacity: 0.5}}>
            <p>How we keep your data safe and your payments safer</p>
          </div>
        </Col>
      </Row>
      <div style={{textAlign: 'left'}}>
        <p style={{color: 'white', opacity: 0.5}}>@Mezoman Ltd. 2 Vasil Aprilov Burgas, 8200, Bulgaria</p>
      </div>
    </Container>
  );
};
export default Footer;
