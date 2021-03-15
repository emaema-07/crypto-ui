import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/initial";

const LoginPage = props => {
  const [state, setState] = useState({
    login: false,
    username: null,
    password: null
  });
  const history = useHistory();

  const onHandleChange = (item, data) => {
    setState({ ...state, [item]: data.target.value });
  };

  const onHeaderClick = () => {
    setState({ ...state, login: !state.login });
  };

  const onSubmit = () => {
    props.onFirstCall({ email: "emachalanema@gmail.com" });
    history.push("/verify");
  };

  return (
    <div>
      <div style={styles.head}>
        <div
          style={{
            padding: 5,
            opacity: state.login ? 0.5 : 1,
            fontWeight: "bold"
          }}
          onClick={() => onHeaderClick()}
        >
          Signup
        </div>
        <div
          style={{
            padding: 5,
            opacity: state.login ? 1 : 0.5,
            fontWeight: "bold"
          }}
          onClick={() => onHeaderClick()}
        >
          Login{" "}
        </div>
      </div>

      <p style={styles.root}>
        Use your existing Spendl account details to login and use your card
      </p>
      {state.login ? (
        <Form>
          <Form.Group>
            <p style={{ textAlign: "left" }}>Email</p>
            <Form.Control
              type="email"
              placeholder="Required"
              onChange={event => onHandleChange("username", event)}
              style={styles.textfield}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <p style={{ textAlign: "left" }}>Password</p>
            <Form.Control
              type="password"
              placeholder="Required"
              onChange={event => onHandleChange("password", event)}
              style={styles.textfield}
            />
          </Form.Group>
          <Button
            style={styles.btn_style}
            variant="warning"
            block
            onClick={() => onSubmit()}
          >
            Log in
          </Button>
        </Form>
      ) : (
        <Form>
          <Form.Group>
            <p style={{ textAlign: "left" }}>Your Email</p>
            <Form.Control
              type="email"
              onChange={event => onHandleChange("username", event)}
              placeholder="Required"
              style={styles.textfield}
            />
          </Form.Group>
          <Form.Group>
            <p style={{ textAlign: "left" }}>Choose Password</p>
            <Form.Control
              type="password"
              placeholder="Required"
              onChange={event => onHandleChange("password", event)}
              style={styles.textfield}
            />
          </Form.Group>
          <div style={{ textAlign: "left" }}>
            <Form.Check
              type={"checkbox"}
              id={"us_person"}
              style={{ marginTop: 10 }}
              label={"I am not a U.S. Person"}
            />
            <Form.Check
              type={"checkbox"}
              id={"pep"}
              style={{ marginTop: 10 }}
              label={"I am not a Politically Exposed Person (PEP)"}
            />
            <Form.Check
              type={"checkbox"}
              id={"policy"}
              style={{ marginTop: 10, marginBottom: 20 }}
              label={
                "By continuing, you agree to our Terms and Privacy Policy."
              }
            />
          </div>
          <Button
            style={styles.btn_style}
            variant="warning"
            block
            onClick={() => onSubmit()}
          >
            Sign Up
          </Button>
        </Form>
      )}
      <div style={{ marginTop: 20 }}>
        {state.login ? (
          <>
            <p style={{ opacity: 0.7 }}>Need an account?</p>
            <Link to="/">
              <p>Sign Up here</p>
            </Link>
            <p style={{ opacity: 0.7 }}>Forget Password?</p>
            <Link to="/">
              <p>Reset it here</p>
            </Link>
          </>
        ) : (
          <>
            <p>Already have an account?</p>
            <Link to="/">
              <p>Login here</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

// export default LoginPage;

const mapStateToProps = state => {
  console.log("reducer state", state);
  return {
    initialData: state.initial.details
  };
};
export default connect(mapStateToProps, {
  onFirstCall: actions.firstCall
})(LoginPage);

const styles = {
  root: {
    textAlign: "left"
  },
  textfield: {
    border: "2px",
    borderBottom: "1px solid "
  },
  head: {
    textAlign: "left",
    display: "flex",
    fontSize: 24
  },
  head1: {
    padding: 5,
    cursor: "pointer"
  },
  btn_style: {
    borderRadius: 20
  }
};
