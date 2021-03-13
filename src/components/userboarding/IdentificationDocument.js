import React, { useState,useEffect } from 'react';
import { Button, Form, Spinner,ProgressBar } from "react-bootstrap";
import { useHistory } from "react-router-dom";



const IdentificationDocument = () => {

    const history = useHistory();
    const [document,setDocument] = useState(false)
    const [load,setLoad] = useState(false)
    const [complete,setComplete] = useState(false)

    const onSubmit = () =>{

        history.push("/");
    }

   const completedDocument = () => {
       const intervalId = setInterval(() => {
        setComplete(true)
    }, 5000);

   }

    useEffect(() => {
    const intervalId = setInterval(() => {
        setLoad(true)
        completedDocument()
    }, 5000);
    
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div style={styles.root}>
             <p>Step 3/3</p>
            <ProgressBar variant="warning" style={{height:"8px"}} now={100} />
            <b><h2>Identification Document</h2></b>
           {!document ?
           <>
            <h5>Grab your national ID card or passport for identification</h5>
            <h6>For successful verification, please make sure of the following</h6>
            <p>1.Take off your glasses</p>
            <p>2.Your document is up to date</p>
            <p>3.Your document conatins latin characters</p>
            <h6>Resident permits and driving licenses are not applicable</h6>
                <Button variant="warning"  block onClick ={ () => setDocument(true)} >
                    Continue
                </Button>
            </>:
            complete ? 
            <div style={{textAlign:"center",marginTop:"20%"}}>
            <h6>Verification completed</h6>
             <p>Congrats! You've been approved</p>
             <Button variant="warning"  block onClick ={ () => onSubmit()} >
                    Load Your Card
                </Button>
            </div>:
            !load ? 
            <div style={{textAlign:"center",marginTop:"20%"}}>
            <h6>Upload from your mobile phone</h6>
            <p>Click the link we sent to +xxx420 and follow instruction on screen.</p>
            <Spinner animation="border" variant="warning" />
            <p>I didn't receive a link</p>
            </div>:
             <div style={{textAlign:"center",marginTop:"20%"}}>
             <h6>Documents received </h6>
             <p>Your identity is being verified, please wait</p>
             <Spinner animation="border" variant="warning" />
             <p>wait in lobby</p>
             </div>
            
           }

        </div>
        
    )
}

export default IdentificationDocument;

const styles = {
    root: {
        textAlign: 'left',
    },
}