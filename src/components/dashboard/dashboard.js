import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const Dashboard = () => {
    //   const history = useHistory();
    const [qrCode, setQrCode] = useState(false);
    return (
        <div>
            <div style={styles.head}>
        <Button style={{ borderRadius:'50px', backgroundColor: "#212529" }}>Verify</Button>
        <Button style={{ borderRadius:'50px', backgroundColor: "#fd7e14" }}>AR</Button>
        </div>
        <div >
            <Card style={{ width: '100%', height: "100%", backgroundColor: "#f8c717" }}>
                <Card.Body >
                    <div style={styles.head}>
                        <h4 style={{ textAlign: "left",color:"#f8f9fa" }}> SPENDL </h4>
                        <Button variant="light" style={{ borderRadius:'50px'}}>Load</Button>
                    </div>
                    <h2 style={{color:"#f8f9fa",textAlign: "center"}}>€0.00</h2>
                    <div style={styles.head}>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="4609********"
                            /></Form>

                            <h2 style={{color:"#f8f9fa"}}>VISA</h2>
                     </div>
                </Card.Body>
           </Card>
        </div>
        </div>
  );
};

export default Dashboard;

const styles = {
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
