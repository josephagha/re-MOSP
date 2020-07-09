import React from "react";
import { user, UrlHead } from "./Url";
import { getLoginDataFromLocalStorage } from "../middleware/Storage";
import auth from "../middleware/router/auth.route";

//GET Products
export const getAllProducts = async () => {
  let getAllProducts = true;
  if (auth.isAuthenticated() & getAllProducts) {
    try {
      let paxId = getLoginDataFromLocalStorage().paxId;
      let embarkationDate = getLoginDataFromLocalStorage().embarkationDate;
      let disembarkationDate = getLoginDataFromLocalStorage()
        .disembarkationDate;
      let bookingNumber = getLoginDataFromLocalStorage().bookingNumber;

      let url = `${UrlHead}/getAllProducts?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}`;
      const data = await fetch(url, {
        headers: {
          Authorization: "Basic " + btoa(user)
        }
      });
      const items = await data.json();
      console.log(items);

      //  return items;
    } catch (error) {
      console.log(error);
    }
  }
};
