import React from "react";
import { Button, Form } from "react-bootstrap";
import { actions } from "../../store/reducers/buyCrypto";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


const PaymentSummary = props => {
  const history = useHistory();
  const onSubmit = () => {

    props.orderDetails(props.storeDetails);
    history.push("/dashboard");
    
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <p style={{ textAlign: "left" }}>Card No</p>
          <Form.Control
            type="text"
            style={styles.textfield}
            value={props.cardDetails}
          />
        </Form.Group>
      </Form>

      <p style={{ textAlign: "left" }}>Summary</p>
      <div style={styles.head}>
        <p>{props.storeDetails.value.coin} </p>
        <p>{parseFloat(props.storeDetails.value.amount).toFixed(3)}</p>
      </div>
      <div>
        
          <div style={styles.head}>
            <p>Total</p>
            <p>
            <p>{props.storeDetails.value.quantity}</p>
            </p>
          </div>
      
      </div>

      <Button
        variant="warning"
        block
        style={{ marginTop: "8px" }}
        onClick={() => onSubmit()}
      >
        Buy Now
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    storeDetails: state.buyCrypto.storeDetails,
    cardDetails: state.buyCrypto.cardDetails,
  };
};
export default connect(mapStateToProps, {
  orderDetails: actions.buyOrderDetails,
})(PaymentSummary);

const styles = {
  head: {
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between"
  },
  head1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  head2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    border: "none",
    width: "20%",
    textAlign: "center"
  }
};
