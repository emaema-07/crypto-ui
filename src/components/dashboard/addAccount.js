import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/buyCrypto";

const AddAccount = props => {
  const history = useHistory();
  const [state, setState] = useState({
    acc_no: null,
    cvv_code:null,
    expiry_date:null,
  });

  
  const onSubmit = () => {
      props.cardDetails(state.acc_no)
    if (state.acc_no) {
      history.push("/payment-summary");
    } else {
      alert("Insert proper Details");
    }
  };

  return (
    <div style={styles.root}>
     
        <>
          <b>
            <h2>Add Card No </h2>
          </b>
          
            <div style={{marginTop: 20}}>
              <span>Card No </span>
              <Form.Control
                type="number"
                placeholder="Enter Your Card No"
                style={styles.textfield}
                onChange={event =>
                  setState({ ...state, acc_no: event.target.value })
                }
              />
            </div>
            <div style={styles.card_style}>
            <div>
              <span>CVV Code  </span>
              <Form.Control
                type="number"
                placeholder="Enter Your CVV Code"
                style={styles.textfield1}
                onChange={event =>
                    setState({ ...state, cvv_code: event.target.value })
                  }
              />
            </div>
            <div >
              <span>Expiry Year</span>
              <Form.Control
                type="number"
                placeholder="Enter Your Expiry Year"
                style={styles.textfield1}
                onChange={event =>
                    setState({ ...state, expiry_date: event.target.value })
                  }
              />
            </div>
            </div>
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
   
  };
};
export default connect(mapStateToProps, {
    cardDetails: actions.cardDetails
})(AddAccount);

const styles = {
  root: {
    textAlign: "left"
  },
  textfield:{
     marginTop: 10,
     marginBottom: 10
  },
  textfield1:{
    marginTop: 10,
    marginBottom: 10,
    width: "98%"
 },
 card_style: {
   display: 'flex',
   marginTop: 20
 },
 btn_style: {
  marginTop: 40,
  borderRadius: 20
},
};
