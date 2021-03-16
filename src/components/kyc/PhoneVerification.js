import React, { useState } from "react";
import { Button, ProgressBar, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/kyc";

const PhoneVerify = props => {
  const history = useHistory();
  const [state, setState] = useState({
    code: false,
    phone_number: null,
    country: null
  });

  const validateNumber = str => {
    var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test( str ); // eslint-disable-line  
    return a;
  };
  const onSubmit = () => {
    if (validateNumber(state.phone_number)) {
      props.storeKycDetails({ phone_number: state.phone_number });
      history.push("/address");
    } else {
      alert("Insert proper number");
    }
  };

  return (
    <div style={styles.root}>
      <p>Step 1/3</p>
      <ProgressBar variant="warning" style={{ height: "8px" }} now={30} />
      {!state.code ? (
        <>
          <b>
            <h2>Phone Verification</h2>
          </b>
          <p>Please enter your phone number for verification</p>
          <div style={styles.head}>
            <div style={styles.head1}>
              <span>Country</span>
              <Form.Control
                as="select"
                onChange={event =>
                  setState({ ...state, country: event.target.value })
                }
              >
                <option value="Afghanistan +93">Afghanistan +93</option>
                <option value="Albania +355">Albania +355</option>
                <option value="Algeria +213">Algeria +213</option>
                <option value="India +91">India +91</option>
                <option value="Colombia +57">Colombia +57</option>
              </Form.Control>
            </div>
            <div style={styles.head1}>
              <span>Number </span>
              <Form.Control
                type="number"
                placeholder="Required"
                style={styles.textfield}
                onChange={event =>
                  setState({ ...state, phone_number: event.target.value })
                }
              />
            </div>
          </div>

          <Button
            variant="warning"
            block
            onClick={() => setState({ ...state, code: true })}
          >
            Next
          </Button>
        </>
      ) : (
        <div>
          <h2>Phone Verification</h2>
          <p>We have sent a confirmation code to +351916019420</p>
          <Form>
            <Form.Group>
              <p style={{ textAlign: "left" }}>Confirmation code</p>
              <Form.Control
                type="email"
                placeholder="Required"
                style={styles.textfield}
              />
            </Form.Group>
            <Button variant="warning" block onClick={() => onSubmit()}>
              Next
            </Button>
            <p>Resend code</p>
            <p>Change Number</p>
          </Form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    initialData: state.initial.details
  };
};
export default connect(mapStateToProps, {
  storeKycDetails: actions.storeKycDetails
})(PhoneVerify);

const styles = {
  root: {
    textAlign: "left"
  },
  head: {
    textAlign: "left",
    display: "flex"
  },
  head1: {
    padding: 5
  }
};
