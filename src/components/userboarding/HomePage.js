import React from 'react';
import { Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";



const HomePage = () => {

    const history = useHistory();

    const onSubmit = () =>{

        history.push("/login");
    }
    return (
        <div style={styles.root}>
            <b><h2>Welcome to</h2></b>
            <h4 >Spendl</h4>
            <h6>Simply  pay anywhere</h6>
            {/* <Col md={4}>md=4</Col> */}
            <p>We're still working on making this experience 
                better so we'd love to hear your feedback</p>
            <>
                <Button variant="warning"  block onClick ={ () => onSubmit()} >
                    Continue
                </Button>
            </>
        </div>
        
    )
}

export default HomePage;

const styles = {
    root: {
        textAlign: 'left',
    },
}