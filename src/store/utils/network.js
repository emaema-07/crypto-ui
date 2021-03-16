// const baseRestUrl = 'http://localhost:5000/api/v1/';
const baseRestUrl = "https://spendl-api.herokuapp.com/api/v1/";
const baseRestUrl1 = "https://bumblepay-api.herokuapp.com/api/v1/";

export const getFirstCall = () => ({
  list: baseRestUrl
});

export const setSignupCall = () => ({
  list: baseRestUrl + "users"
});

export const setKycCall = () => ({
  list: baseRestUrl + "kycs"
});

export const getUserDetailsCall = data => ({
  list:
    baseRestUrl +
    "users/find?email=" +
    data.email +
    "&password=" +
    data.password
});

export const getCurrenciesCall = () => ({
  list: baseRestUrl1 + "currencies.json"
});

export const setbuyCryptoCall = () => ({
  list: baseRestUrl + "transaction"
});

export const gettradeHistoryCall = data => ({
  list: baseRestUrl + "trade-history?id=" + data
});

export const getKycDetailsCall = data => ({
  list: baseRestUrl + "users?email=" + data
});
