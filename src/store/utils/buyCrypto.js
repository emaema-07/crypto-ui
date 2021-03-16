import { setbuyCryptoCall } from "./network";

export async function setBuyCryptoReq(params) {
  const url = setbuyCryptoCall().list;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + params.token //eslint-disable-line
      },
      body: JSON.stringify(params.value)
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
