export let UrlHead;
export let user;

switch (window.location.host) {
  case "private information":
  case "private information":
    UrlHead = "private information";
    user = "private information";
    break;
  case "private information":
  case "private information":
    UrlHead = "private information";
    user = "private information";
    break;
  case "private information":
  case "private information":
    UrlHead = "private information";
    user = "private information";
    break;
  case "private information":
  case "private information":
    UrlHead = "private information";
    user = "private information";
    break;
  default:
    UrlHead = "private information";
    user = "private information";
    break;
}

export const isGoodApi = async url => {
  try {
    const data = await fetch(url, {
      headers: {
        Authorization: "Basic " + btoa(user)
      }
    });
    const items = await data.json();

    return items;
  } catch (error) {
    return error;
  }
};

export const isGoodUrl = (
  paxId,
  embarkationDate,
  disembarkationDate,
  bookingNumber
) => {
  let url = `${UrlHead}/getProductDetails?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}&productCode=mvp01`;

  return isGoodApi(url);
};
