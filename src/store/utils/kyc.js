import { setKycCall } from "./network";

export async function setKycdetailsReq(params) {
  const url = setKycCall().list;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer"  +' '+ params.token,
      },
      body: JSON.stringify(params.data)
    });
    const json = await response.json();
    console.log('kyc created', json);
    return json;
  } catch (error) {
    return error;
  }
}
