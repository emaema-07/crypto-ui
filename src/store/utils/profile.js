import { setSignupCall, getUserDetailsCall,getKycDetailsCall } from "./network";

export async function setSignUpReq(params) {
  const url = setSignupCall().list;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    const json = await response.json();
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

export async function getKycReq(params) {
  const url = getKycDetailsCall(params).list;
  try {
    const response = await fetch(url,);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
