import React, {useState} from 'react';
import { Button, Row, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";



const PhoneVerify = () => {

    const history = useHistory();
    const [code,setCode] = useState(false)

    const onSubmit = () => {

        history.push("/address");
    }
    return (
        <div style={styles.root}>
           <Form>
                <Form.Group controlId="formBasicRange">
                    <Form.Label>Step 1/3</Form.Label>
                    <Form.Control type="range" />
                </Form.Group>
            </Form>
           {!code ? 
           <>
            <b><h2>Phone Verification</h2></b>
            <p>Please enter your phone number for verification</p>
            <div style={styles.head}>
                <div style={styles.head1}>
                    <span >Country</span>
                    <Form.Control as="select">
                        <option>Afghanistan	+93</option>
                        <option>Albania	+355</option>
                        <option>Algeria	+213</option>
                        <option>india +91</option>
                        <option>Colombia +57</option>
                    </Form.Control>
                </div>
                <div style={styles.head1}>
                    <span >Number </span>
                    <Form.Control type="number" placeholder="Required" style={styles.textfield} />
                </div>
            </div>
            
                <Button variant="warning" block onClick={() => setCode(true)} >
                    Next
                </Button>
            </>:

            <div> 
            <h2 >Phone Verification</h2>
          <p>We have sent a confirmation code to +351916019420</p>
            <Form>
            <Form.Group >
                <p style={{ textAlign: 'left' }}>Confirmation code</p>
                <Form.Control type="email" placeholder="Required" style={styles.textfield}/>
            </Form.Group>
            <Button variant="warning"  block onClick={() => onSubmit()}>
              Next
            </Button>
        <p >Resend code</p>
        <p>Change Number</p>
        </Form>
        </div>}
        </div>

    )
}

export default PhoneVerify;

const styles = {
    root: {
        textAlign: 'left',
    },
    head: {
        textAlign: 'left',
        display: 'flex',
    },
    head1: {
        padding: 5,
    },
}