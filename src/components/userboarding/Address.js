import React, {useState} from 'react';
import { Button, ProgressBar, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";



const Address = () => {

    const history = useHistory();

    const onSubmit = () => {

        history.push("/document");
    }
    return (
        <div style={styles.root}>
             <p>Step 2/3</p>
            <ProgressBar variant="warning" style={{height:"8px"}} now={60} />
          
           <>
            <b><h2>Home Address</h2></b>
            <p>Please enter your home address</p>
            <Form>
                <Form.Group >
                    <p style={{ textAlign: 'left' }}>Street</p>
                    <Form.Control type="email" placeholder="Required" style={styles.textfield}/>
                </Form.Group>
                <div style={styles.head}>
                <div style={styles.head1}>
                    <span >City </span>
                    <Form.Control type="text" placeholder="Required" style={styles.textfield} />
                </div>
                <div style={styles.head1}>
                    <span >State </span>
                    <Form.Control type="text" placeholder="Required" style={styles.textfield} />
                </div>
                <div style={styles.head1}>
                    <span >Zip </span>
                    <Form.Control type="text" placeholder="Required" style={styles.textfield} />
                </div>
                </div>
                <span >Country</span>
                    <Form.Control as="select">
                        <option>Choose</option>
                        <option>Albania	</option>
                        <option>Algeria	</option>
                        <option>india </option>
                        <option>Colombia </option>
                    </Form.Control>
            </Form>
                <Button variant="warning" block  style={{marginTop:"8px"}} onClick = { () => onSubmit()}>
                    Next
                </Button>
            </>
        </div>

    )
}

export default Address;

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
    textfield: {
        border : '2px',
        borderBottom: '1px solid ',
    },
}