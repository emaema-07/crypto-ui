import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/buyCrypto";
import {actions as profileaction} from "../../store/reducers/profile";

const HomePage = props => {
  const history = useHistory();

  const onSubmit = () => {
    const authtoken = localStorage.getItem('auth_token');
    if(authtoken && props.kyc_data && props.kyc_data.kyc === null){
      history.push("/phone-verify");
    }else if(authtoken && props.kyc_data && props.kyc_data.kyc !== null){
      history.push("/dashboard");
    }
    else{
      history.push("/login");
    }
  };

  useEffect(() => {
    const userDetails = localStorage.getItem("current_user_details");
    {userDetails && JSON.parse(userDetails).email &&
    props.kycCall(JSON.parse(userDetails).email)}
  }, []); // eslint-disable-line

  useEffect(() => {
    props.clearStatus();
  }, [props]);

  return (
    <div style={styles.root}>
      <img style={styles.logo_style} src="https://getspendl.com/wp-content/themes/understrap-child/img/logo.svg" alt="logo" />
      <b>
        <h2 style={{ fontWeight: "bold" }}>Welcome to</h2>
      </b>
      <h4 style={{ color: "#ffc107", fontWeight: 'bold', fontSize: 35 }}>Spendl</h4>
      <h6 style={{ opacity: 0.7, marginTop: 20 }}>Simply pay anywhere</h6>
      {/* <Col md={4}>md=4</Col> */}
      <p style={{ opacity: 0.5, marginTop: 20 }}>
        We're still working on making this experience better so we'd love to
        hear your feedback
      </p>
      <>
        <Button
          style={styles.btn_style}
          variant="warning"
          block
          onClick={() => onSubmit()}
        >
          Continue
        </Button>
      </>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currencylist: state.initial.currencyList,
    kyc_data:state.profile.kyc_data, 
  };
};
export default connect(mapStateToProps, {
  clearStatus: actions.clearStatus,
  kycCall:profileaction.kycCall
})(HomePage);

const styles = {
  root: {
    textAlign: "left"
  },
  logo_style: {
    marginTop: 20,
    height: 40,
    marginBottom: 20
  },
  btn_style: {
    borderRadius: 20
  }
};
