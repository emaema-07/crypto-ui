import React, { useState } from 'react';
import { Button, Form, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";



const LoginPage = () => {
    const [login,setLogin] = useState(true)
    const history = useHistory();

    const onSubmit = () =>{

        history.push("/verify");
    }

    return (
        <div> 
            <div style={styles.head}>
            <div style={styles.head1}><span onClick = { () => setLogin(false)}>Signup</span></div>
            <div style={styles.head1}><span onClick = { () => setLogin(true)}>Login </span></div>
            </div>

            <p style={styles.root}>Use your existing Spendl account details to login and use your card</p>
            { login ? 
            <Form>
                <Form.Group >
                    <p style={{ textAlign: 'left' }}>Email</p>
                    <Form.Control type="email" placeholder="Required" style={styles.textfield}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <p style={{ textAlign: 'left' }}>Password</p>
                    <Form.Control type="password" placeholder="Required" style={styles.textfield}/>
                </Form.Group>
                <Button variant="warning"  block onClick ={ () => onSubmit()}>
                    Log in
                </Button>
            </Form>:
            <Form>
            <Form.Group >
                <p style={{ textAlign: 'left' }}>Email</p>
                <Form.Control type="email" placeholder="Required" style={styles.textfield}/>
            </Form.Group>
            <Button variant="warning"  block onClick ={ () => onSubmit()}>
                Sign Up
            </Button>
        </Form>
            
            }

        <p >Need an account?</p>
        <p>Sign UP here</p>
        </div>
    )
}

export default LoginPage;

const styles = {
    root: {
        textAlign: 'left',
    },
    textfield: {
        border : '2px',
        borderBottom: '1px solid ',
    },
    head: {
        textAlign: 'left',
        display:'flex',
        fontSize:24,
    },
    head1: {
        padding: 5,
    },
}