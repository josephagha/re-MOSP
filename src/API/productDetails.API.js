import { user, UrlHead } from "./Url";
import { getLoginDataFromLocalStorage } from "../middleware/Storage";
import auth from "../middleware/router/auth.route";

//GET Products
export const getProductDetails = async product => {
  if (auth.isAuthenticated()) {
    try {
      let paxId = getLoginDataFromLocalStorage().paxId;
      let embarkationDate = getLoginDataFromLocalStorage().embarkationDate;
      let disembarkationDate = getLoginDataFromLocalStorage()
        .disembarkationDate;
      let bookingNumber = getLoginDataFromLocalStorage().bookingNumber;
      let productCode = product;
      if (!productCode) {
        productCode = "mvp01";
      }

      let url = `${UrlHead}/getProductDetails?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}&productCode=${productCode}`;

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

//POST Requests
export const postProductReservations = async (data, Status) => {
  if (auth.isAuthenticated()) {
    try {
      let paxId = getLoginDataFromLocalStorage().paxId;
      let embarkationDate = getLoginDataFromLocalStorage().embarkationDate;
      let disembarkationDate = getLoginDataFromLocalStorage()
        .disembarkationDate;
      let bookingNumber = getLoginDataFromLocalStorage().bookingNumber;
      let productCode = data.productCode;
      if (!productCode) {
        productCode = "mvp01";
      }

      const allData = JSON.stringify({
        paxId: paxId,
        embarkationDate: embarkationDate,
        disembarkationDate: disembarkationDate,
        bookingNumber: bookingNumber,
        price: data,
        productCode: productCode
      });

      let url = `${UrlHead}/checkoutArticles`;

      fetch(url, {
        method: "post",
        headers: {
          Authorization: "Basic " + btoa(user),
          "content-type": "application/json"
        },
        body: allData
      }).then(res => {
        if (res.ok) {
          Status(true);
        } else {
          Status(false);
        }
      });
    } catch (error) {
      return error;
    }
  }
};
