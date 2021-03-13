import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const onSubmit = () => {
    history.push("/login");
  };
  return (
    <div style={styles.root}>
      <b>
        <h2 style={{ fontWeight: "bold" }}>Welcome to</h2>
      </b>
      <h4 style={{ color: "#ffc107" }}>Spendl</h4>
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

export default HomePage;

const styles = {
  root: {
    textAlign: "left"
  },
  btn_style: {
    borderRadius: 20
  }
};
