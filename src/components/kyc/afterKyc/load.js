import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ImQrcode } from 'react-icons/im';
import { GrFormClose } from 'react-icons/gr';

const Load = () => {
//   const history = useHistory();
  const [qrCode, setQrCode] = useState(false);
  return (
    <div >
        <>
        <div  style={styles.root}>
          <b>
            <h2 >Load</h2>
          </b>
          <GrFormClose/>
          </div>
          <div style={styles.head}>
            <div style={styles.head1} >
              <p style={styles.head1}>Payout</p>
              <p style={styles.head1}>200.00</p>
            </div>
            <div style={styles.head1}>
              <p style={styles.head1}>Fee </p>
              <p style={styles.head1}>5.80 </p>
            </div>
          </div>
          <div style={styles.head}>
            <div style={styles.head1}>
              <p style={styles.head1}>Rate</p>
              <p style={styles.head1}>200.00</p>
            </div>
            <div style={styles.head1}>
              <p style={styles.head1}>Time Left</p>
              <p style={styles.head1}>5.80 </p>
            </div>
          </div>
        </>
        <div>
         {!qrCode ?   
         <div>
          <Form>
            <Form.Group>
              <p style={{ textAlign: "left" }}>Send this amount</p>
              <Form.Control
                type="email"
                placeholder="Required"
                style={styles.textfield}
              />
            </Form.Group>
            <Form.Group>
              <p style={{ textAlign: "left" }}>To this address</p>
            <div style={styles.head}>
              <Form.Control
                type="email"
                placeholder="Required"
                style={styles.textfield}
              />
            <ImQrcode style={{height:"50px"}} onClick = { () => setQrCode(true)}/>
            </div>
            </Form.Group>
          </Form>
          </div> : 
          <div >
          <ImQrcode style={{height:"40%",width:"40%"}}/>
          </div>}
        </div>
    </div>
  );
};

export default Load;

const styles = {
  root: {
    textAlign: "left",
    display: "flex",
    justifyContent: 'space-between'
  },
  head: {
    textAlign: "left",
    display: "flex",
     justifyContent: 'space-between'
  },
  head1: {
    padding: 5,
    display: "flex",
  }
};
