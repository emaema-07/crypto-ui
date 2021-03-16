import { setSignupCall, getUserDetailsCall } from "./network";

export async function setSignUpReq(params) {
  const url = setSignupCall().list;
  console.log('sign url', url);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    const json = await response.json();
    console.log('response',json)
    return json;
  } catch (error) {
    return error;
  }
}

export async function getLoginReq(params) {
  const url = getUserDetailsCall(params).list;
  try {
    const response = await fetch(url,);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
