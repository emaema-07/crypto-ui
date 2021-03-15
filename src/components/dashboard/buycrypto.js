import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { GrFormClose } from 'react-icons/gr';
import { MdFlashOn } from 'react-icons/md';
import { InlineIcon } from '@iconify/react';
import btcIcon from '@iconify/icons-cryptocurrency/btc';

const BuyCrypto = () => {
    //   const history = useHistory();
    const [qrCode, setQrCode] = useState(false);
    return (
        <div>
           
           <Form>
               
                <p style={{ textAlign: 'left' }}>Currency</p>
                    <Form.Control as="select">
                        <option>Choose</option>
                        <option>Albania	</option>
                        <option>Algeria	</option>
                        <option>india </option>
                        <option>Colombia </option>
                    </Form.Control>
                <Form.Group >
                    <p style={{ textAlign: 'left' }}>Amount</p>
                    <Form.Control type="email" placeholder="Required" style={styles.textfield}/>
                </Form.Group>
            </Form>
                <Button variant="warning" block  style={{marginTop:"8px"}} >
                    Buy Now
                </Button>
        </div>
    );
};

export default BuyCrypto;

const styles = {
    head: {
        textAlign: "left",
        display: "flex",
        justifyContent: 'space-between'
    },
    head1: {
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    head2: {
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        border:"none",
        width:"20%",
        textAlign: "center",
    },
};
