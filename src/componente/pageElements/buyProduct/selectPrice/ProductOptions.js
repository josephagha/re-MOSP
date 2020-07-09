import React, { Fragment } from "react";

import ArrowLeft from "../../../../media/svg/icons/ArrowLeft";

import { Link } from "react-router-dom";

const ProductOptions = ({
  currencyCode,
  prices,
  selectedPrice,
  bookable,
  changeSelectedPrice,
  nextStep
}) => {
  if (bookable) {
    return (
      <Fragment>
        <div className="productOptionsContener">
          <div className="productOptions ">
            {prices
              ? prices.map(price => {
                  return (
                    <label
                      className={
                        "optionButton " +
                        (selectedPrice === price.priceFrom
                          ? "selectedLabel"
                          : "")
                      }
                      onClick={() => {
                        changeSelectedPrice(price.priceFrom);
                      }}
                      htmlFor={price.priceFrom}
                      key={price.priceFrom}
                    >
                      {price.priceFrom}{" "}
                      {currencyCode === "EUR" ? "€" : currencyCode}
                      <input
                        className="optionInput "
                        type="radio"
                        name="donationValue"
                        value={price.priceFrom}
                        defaultChecked={selectedPrice === price.priceFrom}
                      />
                    </label>
                  );
                })
              : "Ein Fehler aufgetreten"}

            <button
              className={
                "orderButton mt2 " +
                (selectedPrice === 0 ? "orderButtonDisabled" : "")
              }
              type="submit"
              disabled={selectedPrice === 0 ? true : false}
              onClick={() => {
                nextStep();
              }}
            >
              RESERVIEREN
            </button>

            <Link to={"/overview"} className="overviewLink mt4">
              <span>Übersicht &amp; Kauf-Historie</span> <ArrowLeft />
            </Link>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="productOptionsContener2">
          <div className=" ProductTextcontainer">
            <p className="textCenter fontL fontDarkBlue mt12">
              Der Artikel ist momentan nicht verfügbar!
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default ProductOptions;
