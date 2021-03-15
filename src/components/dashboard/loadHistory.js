import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { GrFormClose } from 'react-icons/gr';
import { MdHourglassEmpty } from 'react-icons/md';

const LoadHistory = () => {
    //   const history = useHistory();
    const [qrCode, setQrCode] = useState(false);
    return (
        <div>
            <div style={styles.head}>
        <Button style={{ borderRadius:'50px', backgroundColor: "#212529" }}>Verify</Button>
        <Button style={{ borderRadius:'50px', backgroundColor: "#fd7e14" }}>AR</Button>
        </div>
        <div >
            <Card style={{ width: '100%', height: "100%"}}>
                <Card.Body >
                <div style={styles.head}>
                    <h4 style={{textAlign: "left",}}>Load History</h4>
                    <GrFormClose/>
                    </div>
                    
                    <MdHourglassEmpty style={{height:"10%",width:"10%"}}/>
                    <p>seems like your load history box is empty</p>
                </Card.Body>
           </Card>
        </div>
        </div>
  );
};

export default LoadHistory;

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
