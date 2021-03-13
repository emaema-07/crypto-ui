import React, { useState } from 'react';
import { Button, Form, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";



const VerifyEmail = () => {
    const history = useHistory();

    const onSubmit = () =>{

        history.push("/phone-verify");
    }

    return (
        <div> 
            <h2 >Verify Your Email</h2>
          <p>We have sent a confirmation code to demo@gmail.com</p>
            <Form>
            <Form.Group >
                <p style={{ textAlign: 'left' }}>Confirmation code</p>
                <Form.Control type="email" placeholder="Required" style={styles.textfield}/>
            </Form.Group>
            <Button variant="warning"  block onClick = { () => onSubmit()}>
              Next
            </Button>
        </Form>
        <p style={{padding:'5px'}}>Resend code</p>
        <p>Cancel</p>
        </div>
    )
}

export default VerifyEmail;

const styles = {
    textfield: {
        border : '2px',
        borderBottom: '1px solid ',
    },
}