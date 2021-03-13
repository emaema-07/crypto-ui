import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const VerifyEmail = () => {
  const history = useHistory();
  const [state, setState] = useState({
    code: null
  });
  const onSubmit = () => {
    history.push("/phone-verify");
  };

  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>Verify Your Email</h2>
      <p style={{ opacity: 0.5 }}>
        We have sent a confirmation code to demo@gmail.com
      </p>
      <Form>
        <Form.Group>
          <p style={{ textAlign: "left" }}>Confirmation code</p>
          <Form.Control
            type="email"
            onChange={event => setState({ ...state, code: event.target.value })}
            placeholder="Required"
            style={styles.textfield}
          />
        </Form.Group>
        <Button
          style={styles.btn_style}
          variant="warning"
          block
          onClick={() => onSubmit()}
        >
          Next
        </Button>
      </Form>
      <p style={{ padding: "5px", opacity: 0.5, marginTop: 10 }}>Resend code</p>
      <p style={{ opacity: 0.5 }}>Cancel</p>
    </div>
  );
};

export default VerifyEmail;

const styles = {
  textfield: {
    border: "2px",
    borderBottom: "1px solid "
  },
  btn_style: {
    borderRadius: 20
  }
};
