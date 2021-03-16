import React, { useState, useRef, useEffect } from "react";
import { Card, Button, Form, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/profile";

const Dashboard = props => {
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const myRef = useRef();

  const handleClickOutside = e => {
      if (!myRef.current.contains(e.target)) {
        setMenu(false);
      }
  };

  useEffect(() => {
    menu && document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const onLogoutPress = () => {
    setMenu(false);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("current_user_details");
    props.clearLogin();
    history.push('/')
  };
  return (
    <div>
      <div style={styles.head}>
        <Button style={{ borderRadius: "50px", backgroundColor: "#212529" }}>
          Verify
        </Button>
        <Button style={{ borderRadius: "50px", backgroundColor: "#fd7e14" }}>
          AR
        </Button>
      </div>

      <div>
        <Card
          style={{ width: "100%", height: "100%", backgroundColor: "#f8c717", marginTop: 20 }}
        >
          <Card.Body>
            <div style={styles.head}>
              <h4 style={{ textAlign: "left", color: "#f8f9fa" }}> SPENDL </h4>
              {!menu ? (
                <Button
                  variant="light"
                  style={{ borderRadius: "50px" }}
                  onClick={() => setMenu(true)}
                >
                  Load
                </Button>
              ) : (
                <Card style={{ width: "12rem", cursor: "pointer" }} ref={myRef}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>demo@gmail.com</ListGroup.Item>
                    <ListGroup.Item onClick={() => history.push("/buycrypto")}>
                      Buy Crypto
                    </ListGroup.Item>
                    <ListGroup.Item
                      onClick={() => history.push("/transaction-history")}
                    >
                      Transaction History
                    </ListGroup.Item>
                    <ListGroup.Item
                      onClick={() => history.push("/phone-verify")}
                    >
                      KYC
                    </ListGroup.Item>
                    <ListGroup.Item onClick={() => onLogoutPress()}>
                      Logout
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              )}
            </div>
            <h2 style={{ color: "#f8f9fa", textAlign: "center" }}>€0.00</h2>
            <div style={styles.head}>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="4609********"
                />
              </Form>

              <h2 style={{ color: "#f8f9fa" }}>VISA</h2>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currencylist: state.initial.currencyList
  };
};
export default connect(mapStateToProps, {
  clearLogin: actions.clearLogin
})(Dashboard);

const styles = {
  head: {
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between"
  },
  head1: {
    padding: 5,
    display: "flex"
  }
};
