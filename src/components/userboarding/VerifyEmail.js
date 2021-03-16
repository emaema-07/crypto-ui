import React, { useState, useEffect} from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/profile";

const VerifyEmail = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    code: null,
    details: null
  });

  useEffect(() => {
    if(props && props.typedDatas){
      setState({...state, details: props.typedDatas})
    }
  },[props])//eslint-disable-line

  const onSubmit = () => {
    if(props.kycData){
      history.push('/buycrypto')
    }else{
      history.push("/phone-verify");
    }
  };

  useEffect(() => {
    props.clearStatus();
  },[]) //eslint-disable-line

  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>Verify Your Email</h2>
      <p style={{ opacity: 0.5, marginTop: 20 }}>
        We have sent a confirmation code to {state.details && state.details.email}
      </p>
      <Form>
        <Form.Group>
          <p style={{ textAlign: "left", marginTop: 20 }}>Confirmation code</p>
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

const mapStateToProps = state => {
  console.log('dat adta adt', state.profile.kyc_data)
  return {
    initialData: state.initial.details,
    kycData: state.profile.kyc_data,
    typedDatas: state.profile.user_typed_datas,
  };
};
export default connect(mapStateToProps, {
  clearStatus: actions.clearStatus,
})(VerifyEmail);

const styles = {
  textfield: {
    marginTop: 20,
    border: "2px",
    borderBottom: "1px solid "
  },
  btn_style: {
    marginTop: 40,
    borderRadius: 20
  }
};
