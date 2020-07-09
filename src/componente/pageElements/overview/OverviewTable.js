import React, { Fragment, useEffect, useState } from "react";

import { getProductOverview } from "../../../API/overviewPage.API";

import CheckRoundedIcon from "../../../media/svg/icons/CheckRoundedIcon";
import PendingIcon from "../../../media/svg/icons/PendingIcon";
import CrossIcon from "../../../media/svg/icons/CrossIcon";

import Preloader from "../../layout/Preloader";

import cruiseAndHelp from "../../../media/image/aida-cruise-and-help-s.jpg";

const OverviewTable = () => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductOverview().then(function(result) {
      if (result) {
        setArticles(result.articles);
        setLoading(true);
      }
    });
  }, []);

  if (loading) {
    return (
      <Fragment>
        {articles ? (
          articles.map(article => {
            return (
              <div className="overviewItemContainer" key={article.articleId}>
                <div className="overviewItemImage">
                  {productImg(article.productCode)}
                </div>

                <div className="overviewItemInfoContainer m0">
                  <div className="ml2 mt2">
                    <div className="donatioArtAndAmountContainer fontDarkBlue mb0">
                      {productName(article.productCode)}
                      <h2 className="fontL fontDarkBlue donatioAmount mr2 ">
                        {article.price}{" "}
                        {productCurrencyCode(article.currencyCode)}
                      </h2>
                    </div>

                    <p className="fontS fontDarkGrey mb0 ">
                      {date(article.reservationDate)}
                    </p>
                  </div>

                  <div className="overviewItemStatusContainer fontDarkBlue ml2 mt2">
                    {status(article.articleState)}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="fontm fontDarkBlue ">Ein Fehler aufgetreten !</p>
        )}
      </Fragment>
    );
  } else {
    return <Preloader />;
  }
};

export default OverviewTable;

const date = dateIn => {
  let dataArray = dateIn.slice(0, 10).split("-");
  let m = dataArray[1];
  let d = dataArray[2];
  let y = dataArray[0];
  let dateFormat = d + "." + m + "." + y;
  return dateFormat;
  //article.reservationDate.replace(/-/g, ".").slice(0, 10);
};

const status = articleState => {
  // Order Rejected -> Kontingent erschöpft
  // Order Requested -> Reservierung angefragt
  // Order Registered Checkin Pending -> Warten auf Gast-Checkin
  // Order Fidelio Sync Pending -> Einbuchung in Berarbeitung
  // Order Fidelio Confirmed -> Kauf bestätigt
  // Order Fidelio Rejected -> Reservierung nicht möglich
  // Cancellation Fidelio Sync Pending -> Stornierung in Bearbeitung
  // Cancellation Fidelio Confirmed -> Stornierung bestätigt
  // Cancellation Fidelio Rejected -> Stornierung nicht möglich
  // Cancelled -> Stornierung an Bord
  switch (articleState) {
    case "Order Rejected":
      return (
        <Fragment>
          <PendingIcon />
          <span className="fontS ml2">Kontingent erschöpft</span>
        </Fragment>
      );
    case "Order Requested":
      return (
        <Fragment>
          <PendingIcon />
          <span className="fontS ml2">Reservierung angefragt</span>
        </Fragment>
      );
    case "Order Registered Checkin Pending":
      return (
        <Fragment>
          <PendingIcon />
          <span className="fontS ml2">Warten auf Gast-Checkin</span>
        </Fragment>
      );
    case "Order Fidelio Sync Pending":
      return (
        <Fragment>
          <PendingIcon />
          <span className="fontS ml2">Einbuchung in Bearbeitung</span>
        </Fragment>
      );

    case "Order Fidelio Confirmed":
      return (
        <Fragment>
          <CheckRoundedIcon />
          <span className="fontS ml2">Kauf bestätigt</span>
        </Fragment>
      );
    case "Order Fidelio Rejected":
      return (
        <Fragment>
          <CrossIcon />
          <span className="fontS ml2">Reservierung nicht möglich</span>
        </Fragment>
      );
    case "Cancellation Fidelio Sync Pending":
      return (
        <Fragment>
          <PendingIcon />
          <span className="fontS ml2">Stornierung in Bearbeitung</span>
        </Fragment>
      );
    case "Cancellation Fidelio Confirmed":
      return (
        <Fragment>
          <CheckRoundedIcon />
          <span className="fontS ml2">Stornierung bestätigt</span>
        </Fragment>
      );
    case "Cancellation Fidelio Rejected":
      return (
        <Fragment>
          <CrossIcon />
          <span className="fontS ml2">Stornierung nicht möglich</span>
        </Fragment>
      );

    case "Cancelled":
    default:
      return (
        <Fragment>
          <CheckRoundedIcon />
          <span className="fontS ml2">Stornierung an Bord</span>
        </Fragment>
      );
  }
};

const productName = articleState => {
  switch (articleState) {
    case "MVP01":
      return <h2 className="fontM mb0 mr1 donatioArt">Cruise and help</h2>;
    default:
      return <h2 className="fontM mb0 mr1 donatioArt">else</h2>;
  }
};
const productImg = articleState => {
  switch (articleState) {
    case "MVP01":
      return <img src={cruiseAndHelp} alt="aida cruise And Help" />;
    default:
      return <img src={cruiseAndHelp} alt="aida cruise And Help" />;
  }
};
const productCurrencyCode = articleState => {
  switch (articleState) {
    case "EUR":
      return "€";
    default:
      return "$";
  }
};
