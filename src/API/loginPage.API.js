import { user, UrlHead } from "./Url";
import { getLoginDataFromLocalStorage } from "../middleware/Storage";

//GET
export const isReadyToEnter = async loginStatus => {
  try {
    let paxId = getLoginDataFromLocalStorage().paxId;
    let embarkationDate = getLoginDataFromLocalStorage().embarkationDate;
    let disembarkationDate = getLoginDataFromLocalStorage().disembarkationDate;
    let bookingNumber = getLoginDataFromLocalStorage().bookingNumber;

    let url = `${UrlHead}/getProductDetails?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}&productCode=mvp01`;

    const data = fetch(url, {
      headers: {
        Authorization: "Basic " + btoa(user)
      }
    });
    const items = await data.json();

    if (items) {
      loginStatus(true);
    } else {
      loginStatus(false);
    }

    // return items;
  } catch (error) {
    return error;
  }
};
