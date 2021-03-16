import React, { useState } from "react";
import { Button, ProgressBar, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/kyc";

const Address = props => {
  const history = useHistory();
  const [state, setState] = useState({
    street: null,
    city: null,
    state: null,
    zip: null,
    country: null
  });

  const onSubmit = () => {
    if (
      state.street &&
      state.city &&
      state.state &&
      state.zip &&
      state.country
    ) {
      const data = {
        street: state.street,
        city: state.city,
        state: state.state,
        country: state.country,
        zip_code: state.zip
      };
      props.storeKycDetails(data);
      history.push("/document");
    } else {
      alert("Insert all fields");
    }
  };

  const onDataChange = (item, data) => {
    setState({ ...state, [item]: data.target.value });
  };

  return (
    <div style={styles.root}>
      <p>Step 2/3</p>
      <ProgressBar variant="warning" style={{ height: "8px" }} now={60} />

      <>
        <b>
          <h2 style={{marginTop: 10}}>Home Address</h2>
        </b>
        <p>Please enter your home address</p>
        <Form>
          <Form.Group>
            <p style={{ textAlign: "left" }}>Street</p>
            <Form.Control
              type="text"
              placeholder="Required"
              style={styles.textfield}
              onChange={event => onDataChange("street", event)}
            />
          </Form.Group>
          <div style={styles.head}>
            <div style={styles.head1}>
              <span>City </span>
              <Form.Control
                type="text"
                placeholder="Required"
                style={styles.textfield}
                onChange={event => onDataChange("city", event)}
              />
            </div>
            <div style={styles.head1}>
              <span>State </span>
              <Form.Control
                type="text"
                placeholder="Required"
                style={styles.textfield}
                onChange={event => onDataChange("state", event)}
              />
            </div>
            <div style={styles.head1}>
              <span>Zip </span>
              <Form.Control
                type="text"
                placeholder="Required"
                style={styles.textfield}
                onChange={event => onDataChange("zip", event)}
              />
            </div>
          </div>
          <div style={{marginTop: 10}}>Country</div>
          <Form.Control
            as="select"
            custom
            style={{marginTop: 10}}
            onChange={event => onDataChange("country", event)}
          >
            <option>Choose</option>
            <option value="Albania">Albania </option>
            <option value="Algeria">Algeria </option>
            <option value="india">india </option>
            <option value="Colombia">Colombia </option>
          </Form.Control>
        </Form>
        <Button
          variant="warning"
          block
          style={styles.btn_style}
          onClick={() => onSubmit()}
        >
          Next
        </Button>
      </>
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
})(Address);

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
  },
  textfield: {
    marginTop: 5,
    border: "2px",
    borderBottom: "1px solid "
  },
  btn_style: {
    marginTop: 20,
    borderRadius: 20
  }
};
