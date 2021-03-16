import { gettradeHistoryCall } from "./network";

export async function getTradeHistorty(params) {
  const url = gettradeHistoryCall(params.id).list;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + params.token //eslint-disable-line
      }
      // body : JSON.stringify(params)
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
