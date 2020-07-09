import React, { useState, useEffect } from "react";
import { getLoginData } from "../Validation";
import Preloader from "../../componente/layout/Preloader";

const LoginLink = ({ location }) => {
  const [loading, setLoading] = useState(false);

  let request = location.search
    .toLowerCase()
    .replace(/\?/g, "")
    .split("&");

  let paxId;
  let embarkationDate;
  let disembarkationDate;
  let bookingNumber;

  request.forEach(element => {
    if (element.includes("paxid=")) {
      paxId = element.replace("paxid=", "");
    } else if (element.includes("disembarkationdate=")) {
      disembarkationDate = element.replace("disembarkationdate=", "");
    } else if (element.includes("bookingnumber=")) {
      bookingNumber = element.replace("bookingnumber=", "");
    } else if (element.includes("embarkationdate=")) {
      embarkationDate = element.replace("embarkationdate=", "");
    }
  });

  useEffect(() => {
    getLoginData(
      paxId,
      embarkationDate,
      disembarkationDate,
      bookingNumber
    ).then(next => {
      if (next) {
        setLoading(true);
        window.location.href = `${window.location.origin}/product`;
      } else {
        window.location.href = `${window.location.origin}/badLink`;
      }
    });
  });

  if (loading) {
    return "";
  } else {
    return <Preloader />;
  }
};

export default LoginLink;
