export async function getCurrenciesReq() {
  const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BAT,BTC,BCH,LINK,DAI,DASH,LTC,OMG,XRP,ETH,DOGE,USDT,ADA,BCH,TUSD,USDC,UTK&tsyms=EUR";
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log('currency respo', json);
    
    return json;
  } catch (error) {
    return error;
  }
}
