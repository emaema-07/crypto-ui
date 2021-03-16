import React, {useState, useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import { GrFormClose } from 'react-icons/gr';
import { MdHourglassEmpty } from 'react-icons/md';
import { connect } from 'react-redux';
import {actions} from '../../store/reducers/tradeHistory';

const TransactionHistory = (props) => {

  const [state, setState] = useState({
    data: null
  })

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userDetails = localStorage.getItem("user_details");
    props.getTradeHistory({token: userToken, id: userDetails && JSON.parse(userDetails)._id});
  },[]); // eslint-disable-line

  useEffect(() => {
    if(props && props.tradeHistory){
      setState({...state, data: props.tradeHistory})
    }
  },[props]) // eslint-disable-line
  return (
    <div>
      <div style={styles.head}>
        <Button style={{ borderRadius: '50px', backgroundColor: "#212529" }}>Verify</Button>
        <Button style={{ borderRadius: '50px', backgroundColor: "#fd7e14" }}>AR</Button>
      </div>
      <div >
        <Card style={{ width: '100%', height: "100%" }}>
          <Card.Body >
            <div style={styles.head}>
              <h4 style={{ textAlign: "left", }}>Transaction History</h4>
              <GrFormClose />
            </div>
            {state.data && state.data.length > 0 ?
            
            <div style={styles.head}>
            <p> Bought BTC</p>
            <p >15/09/2021</p>
            <p >€2000</p>
            </div>:
            <>
            <MdHourglassEmpty style={{ height: "10%", width: "10%" }} />
              <p>seems like your Transaction History box is empty</p> </>
            }
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      tradeHistory: state.tradeHistory.tradeHistory,
    }
  }
  export default connect(
    mapStateToProps,
    {
      getTradeHistory: actions.getTradeHistory,
    },
  )(TransactionHistory);

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
