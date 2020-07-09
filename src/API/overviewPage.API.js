import { user, UrlHead } from "./Url";
import { getLoginDataFromLocalStorage } from "../middleware/Storage";
import auth from "../middleware/router/auth.route";

//GET owerview
export const getProductOverview = async product => {
  if (auth.isAuthenticated()) {
    try {
      let paxId = getLoginDataFromLocalStorage().paxId;
      let embarkationDate = getLoginDataFromLocalStorage().embarkationDate;
      let disembarkationDate = getLoginDataFromLocalStorage()
        .disembarkationDate;
      let bookingNumber = getLoginDataFromLocalStorage().bookingNumber;

      let url = `${UrlHead}/getDetailsOfAllArticles?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}`;
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
  }
};
