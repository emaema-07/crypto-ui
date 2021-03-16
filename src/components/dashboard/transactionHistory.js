import React, {useState, useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import { GrFormClose } from 'react-icons/gr';
import { MdHourglassEmpty } from 'react-icons/md';
import { connect } from 'react-redux';
import {actions} from '../../store/reducers/tradeHistory';
import Moment from 'moment';

const TransactionHistory = (props) => {

  const [state, setState] = useState({
    data: null
  })

  useEffect(() => {
    const userToken = localStorage.getItem("auth_token");
    const userDetails = localStorage.getItem("current_user_details");
    props.getTradeHistory({token: userToken, id: userDetails && JSON.parse(userDetails)._id});
  },[]); // eslint-disable-line

  useEffect(() => {
    if(props && props.tradeHistory){
      setState({...state, data: props.tradeHistory})
    }
  },[props]) // eslint-disable-line
 
  return (
    <div>
      {/* <div style={styles.head}>
        <Button style={{ borderRadius: '50px', backgroundColor: "#212529" }}>Verify</Button>
        <Button style={{ borderRadius: '50px', backgroundColor: "#fd7e14" }}>AR</Button>
      </div> */}
      <div style={{marginTop: 20}} >
        <Card style={{ width: '100%', height: "100%", border: 0 }}>
          <Card.Body >
            <div style={styles.head}>
              <h4 style={{ textAlign: "left", }}>Transaction History</h4>
              <GrFormClose style={{height: 30, width: 30}}/>
            </div>
            {state.data && state.data.length > 0 ? 
      <div>
        {state.data && state.data.length > 0 &&state.data.map((item, i) => {
        return (
        <div style={styles.head1} >
          
            <p style={{ fontWeight: 'bold'}}>
              {item.type === "Buy" ? <p> Bought {item.coin && String(item.coin.split(" ", 1))}</p>  : <p> Sold { item.coin && String(item.coin.split(" ", 1))}</p> }</p>
            <p >{Moment(item.transaction_date).format('DD-MM-YYYY')}</p>
          
          <p >~{item.amount ? parseFloat(item.amount).toFixed(2) : 0}</p>
        </div>)})}
        </div>
            :<>
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
    textAlign: "left",
    display: "flex",
    justifyContent: 'space-between',
    marginTop:"15%"
  }
};
