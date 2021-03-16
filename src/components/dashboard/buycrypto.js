import React, { useState,useEffect } from "react";
import {  Button, Form } from "react-bootstrap";
import { InlineIcon } from '@iconify/react';
import btcIcon from '@iconify/icons-cryptocurrency/btc';
import ethIcon from '@iconify/icons-cryptocurrency/eth';
import dogeIcon from '@iconify/icons-cryptocurrency/doge';
import usdtIcon from '@iconify/icons-cryptocurrency/usdt';
import bchIcon from '@iconify/icons-cryptocurrency/bch';
import adaIcon from '@iconify/icons-cryptocurrency/ada';
import batIcon from '@iconify/icons-cryptocurrency/bat';
import linkIcon from '@iconify/icons-cryptocurrency/link';
import daiIcon from '@iconify/icons-cryptocurrency/dai';
import dashIcon from '@iconify/icons-cryptocurrency/dash';
import ltcIcon from '@iconify/icons-cryptocurrency/ltc';
import omgIcon from '@iconify/icons-cryptocurrency/omg';
import xrpIcon from '@iconify/icons-cryptocurrency/xrp';
import tusdIcon from '@iconify/icons-cryptocurrency/tusd';
import usdcIcon from '@iconify/icons-cryptocurrency/usdc';
import utkIcon from '@iconify/icons-cryptocurrency/utk';
import { connect } from 'react-redux';
import {actions} from '../../store/reducers/initial';

const coinslist = [
    { name: 'BTC - Bitcoin', icon: btcIcon, color: '#f69438' },
    { name: 'DOGE - Dogecoin', icon: dogeIcon, color: '#c3a634' },
    { name: 'ETH - Ethereum', icon: ethIcon, color: '#627eea' },
    { name: 'USDT - Tether (ERC-20)', icon: usdtIcon, color: '#35a17b' },
    { name: 'ADA - Cardano', icon: adaIcon, color: '#0d1e31' },
    { name: 'BCH - Bitcoin Cash', icon: bchIcon, color: '#42c48b' },
    { name: 'BAT - Basic Attention Token', icon: batIcon, color: '#fa533b' },
    { name: 'LINK - Chainlink', icon: linkIcon, color: '#2e66da' },
    { name: 'DAI - Dai', icon: daiIcon, color: '#fab238' },
    { name: 'DASH - Dash', icon: dashIcon, color: '#028ce7' },
    { name: 'LTC - Litecoin', icon: ltcIcon, color: '#a5a8a9' },
    { name: 'OMG - OMG Network', icon: omgIcon, color: '#101010' },
    { name: 'XRP - Ripple', icon: xrpIcon, color: '#222222' },
    { name: 'TUSD - TrueUSD', icon: tusdIcon, color: '#7ac7bc' },
    { name: 'USDC - USD Coin', icon: usdcIcon, color: '#2775ca' },
    { name: 'UTK - Utrust', icon: utkIcon, color: '#31377a' },
  
  ]

const BuyCrypto = (props) => {
    //   const history = useHistory();
    const [currency, setCurrency] = useState("BTC - Bitcoin");
    const [amount, setAmount] = useState(null);
    const [count, setCount] = useState(null);
    const [selcoin, setCoin] = useState("BTC");

    useEffect(() => {
        props.getCurrencies();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      useEffect(() => {
        if (props && props.currencylist) {
          const data = props.currencylist;
          setCoin(currency.split(" ")[0]);
          const item = currency.split(" ", 1);
          setAmount(data[item[0]].EUR);
        }
      }, [props]); // eslint-disable-line react-hooks/exhaustive-deps

      const numberChange = event => {
        setCount(event.target.value);
      };
      const onSubmit = () => {
        const data = {
          currency: currency,
          amount: count / amount,
          total: count,
          singlecoin_amount: amount
        };
       
        props.orderDetails(data);
       
      };
    const handleChange = (event) => {
        if(props && props.currencylist){
          const data = props.currencylist;
          setCoin(event.target.value.split(" ", 1))
        const item = event.target.value.split(" ", 1);
        setCurrency(event.target.value);
        setAmount(data[item[0]].EUR);
        }
      };
    return (
        <div>   
             <Form>
                <p style={{ textAlign: 'left' }}>Currency</p>
                    <Form.Control as="select" onChange={event => handleChange(event)}>
                        {coinslist.map((item, index) => {
                            return (
                                <option value={item.name}>
                            {/* <InlineIcon color={item.color} icon={item.icon} width={20} height={20} /> */}
                            { item.name}
                        </option>
                            )
                        })
                    }
                    </Form.Control>
                    
                <Form.Group >
                    <p style={{ textAlign: 'left' }}>Amount</p>
                    <Form.Control type="number" placeholder="Required" style={styles.textfield}  onChange={numberChange}/>
                </Form.Group>
            </Form>

            <p >
            Summary
          </p>
          <div >
            <p >
              {selcoin} Price
            </p>

            <p>
              €{amount ? parseFloat(amount).toFixed(2) : 0}
            </p>

            <p>You Get</p>

            {count && (
                  <p>
                    ~{(count / amount).toFixed(6)}
                    {selcoin}
                  </p>
                )}
          </div>

                <Button variant="warning" block  style={{marginTop:"8px"}} onClick={() => onSubmit()}>
                    Buy Now
                </Button>
        </div>
    );
};


const mapStateToProps = (state) => {
    console.log(state.initial.currencyList,'state.initial.currencyList')
    return {
      currencylist: state.initial.currencyList
    }
  }
  export default connect(
    mapStateToProps,
    {
      orderDetails: actions.buyOrderDetails,
      getCurrencies : actions.getCurrencies,
    },
  )(BuyCrypto);

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
