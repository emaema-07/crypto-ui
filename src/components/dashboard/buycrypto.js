import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import { InlineIcon } from '@iconify/react';
import { useHistory } from "react-router-dom";
import btcIcon from "@iconify/icons-cryptocurrency/btc";
import ethIcon from "@iconify/icons-cryptocurrency/eth";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/buyCrypto";
import { actions as curractions } from "../../store/reducers/currency";

const coinslist = [
  { name: "BTC - Bitcoin", icon: btcIcon, color: "#f69438" },
  { name: "ETH - Ethereum", icon: ethIcon, color: "#627eea" }
];

const BuyCrypto = props => {
  const history = useHistory();
  const [state, setState] = useState({
    currency: "BTC - Bitcoin",
    amount: null,
    count: null,
    selcoin: "BTC",
    userDetails: null,
    userToken: null
  });

  useEffect(() => {
    props.getCurrencies();
    const userToken = localStorage.getItem("auth_token");
    const userDetails = localStorage.getItem("current_user_details");
    setState({
      ...state,
      userDetails: JSON.parse(userDetails),
      userToken: userToken
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props && props.isSuccess) {
      history.push("/dashboard");
    }
  }, [props]); // eslint-disable-line

  useEffect(() => {
    if (props && props.currencylist) {
      const data = props.currencylist;
      const item = state.currency.split(" ", 1);
      setState({
        ...state,
        amount: data[item[0]].EUR,
        selcoin: state.currency.split(" ")[0]
      });
    }
  }, [props]); // eslint-disable-line react-hooks/exhaustive-deps

  const numberChange = event => {
    setState({ ...state, count: event.target.value });
  };
  const onSubmit = () => {
    const data = {
      token: state.userToken,
      value: {
        coin: state.currency,
        amount: state.count / state.amount,
        quantity: state.count,
        singlecoin_amount: state.amount,
        date: new Date(),
        type: "Buy",
        user_id: state.userDetails._id
      }
    };

    props.storeDetails(data);
    history.push("/add-account");
  };
  const handleChange = event => {
    if (props && props.currencylist) {
      const data = props.currencylist;
      const item = event.target.value.split(" ", 1);
      setState({
        ...state,
        currency: event.target.value,
        amount: data[item[0]].EUR,
        selcoin: event.target.value.split(" ", 1)
      });
    }
  };
  return (
    <div>
      <Form>
        <p style={{ textAlign: "left" }}>Currency</p>
        <Form.Control as="select" onChange={event => handleChange(event)}>
          {coinslist.map((item, index) => {
            return (
              <option value={item.name} key={index}>
                {/* <InlineIcon color={item.color} icon={item.icon} width={20} height={20} /> */}
                {item.name}
              </option>
            );
          })}
        </Form.Control>
        <Form.Group>
          <p style={{ textAlign: "left", marginTop: 10 }}>Amount</p>
          <Form.Control
            type="number"
            placeholder="Required"
            style={styles.textfield}
            onChange={numberChange}
          />
        </Form.Group>
      </Form>

      <p style={{ textAlign: "left" }}>Summary</p>
      <div style={styles.head}>
        <p>{state.selcoin} Price</p>

        <p>€{state.amount ? parseFloat(state.amount).toFixed(2) : 0}</p>
      </div>
      <div>
        {state.count && (
          <div style={styles.head}>
            <p>You Get</p>
            <p>
              ~{(state.count / state.amount).toFixed(6)}
              {state.selcoin}
            </p>
          </div>
        )}
      </div>

      <Button
        variant="warning"
        block
        style={styles.btn_style}
        onClick={() => onSubmit()}
      >
        Buy Now
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currencylist: state.currency.currencyList,
    isSuccess: state.buyCrypto.is_success
  };
};
export default connect(mapStateToProps, {
  orderDetails: actions.buyOrderDetails,
  getCurrencies: curractions.getCurrencies,
  storeDetails: actions.storeDetails,
})(BuyCrypto);

const styles = {
  head: {
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between"
  },
  head1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  head2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    border: "none",
    width: "20%",
    textAlign: "center"
  },
  btn_style: {
    marginTop: 40,
    borderRadius: 20
  }
};
