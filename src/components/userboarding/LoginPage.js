import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/profile";

const LoginPage = props => {
  const [state, setState] = useState({
    login: true,
    email: null,
    password: null
  });
  const history = useHistory();

  useEffect(() => {
    if(props && props.loginStatus){
      localStorage.setItem('auth_token', props.userToken);
      localStorage.setItem('current_user_details', JSON.stringify(props.profileDetails))
      history.push("/verify");
    }
    if(props && props.loginMessage){
      alert(props.loginMessage)
    }
  },[props]) //eslint-disable-line

  const onHandleChange = (item, data) => {
    setState({ ...state, [item]: data.target.value });
  };

  const onHeaderClick = () => {
    setState({ ...state, login: !state.login });
  };

  const validateEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  const onLoginSubmit = () => {
    if(validateEmail(state.email) && state.password){
    const data = {
      email: state.email,
      password: state.password,
    }
    props.loginCall(data)
  }else{
    alert('Insert proper fields');
  }
  };

  const onSignUpSubmit = () => {
    if(validateEmail(state.email) && state.password){
      const data = {
        email: state.email,
        password: state.password,
        username: state.email
      }
      props.signUpCall(data)
    }else{
      alert('Insert proper fields');
    }
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
              onChange={event => onHandleChange("email", event)}
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
            onClick={() => onLoginSubmit()}
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
              onChange={event => onHandleChange("email", event)}
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
            onClick={() => onSignUpSubmit()}
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


const mapStateToProps = state => {
  return {
    initialData: state.initial.details,
    profileDetails: state.profile.current_user_details,
    userToken: state.profile.auth_token,
    loginStatus: state.profile.login_success,
    loginMessage: state.profile.message
  };
};
export default connect(mapStateToProps, {
  signUpCall: actions.signUpCall,
  loginCall: actions.loginCall
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
