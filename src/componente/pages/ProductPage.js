import React, { useState, useEffect, Fragment } from "react";

import ImageMedia from "../pageElements/ImageMedia";

import ProductMedia from "../pageElements/buyProduct/selectPrice/ProductMedia";
import ProductDetails from "../pageElements/buyProduct/selectPrice/ProductDetails";
import ProductOptions from "../pageElements/buyProduct/selectPrice/ProductOptions";

import Confirm from "../pageElements/buyProduct/Confirm";
import Feedback from "../pageElements/buyProduct/Feedback";

import ArrowLeft from "../../media/svg/icons/ArrowLeft";

import { Link } from "react-router-dom";

import Preloader from "../layout/Preloader";
import { getProductDetails } from "../../API/productDetails.API";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);

  const [currencyCode, setCurrencyCode] = useState("");
  const [prices, setPrices] = useState([]);
  const [bookable, setBookable] = useState(false);

  const [selectedPrice, setSelectedPrice] = useState(0);
  const [isConfirm, setIsConfirm] = useState(false);
  const [orderStatus, setOrderStatus] = useState();

  const [step, setStep] = useState(1);

  useEffect(() => {
    getProductDetails().then(next => {
      if (next) {
        setCurrencyCode(next.currencyCode);
        setPrices(next.prices);
        setBookable(next.bookable);

        setLoading(true);
      } else {
        window.location.href = `${window.location.origin}/badLink`;
      }
    });
  }, []);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const changeSelectedPrice = e => {
    setSelectedPrice(e);
  };

  const changeIsConfirm = () => {
    setIsConfirm(!isConfirm);
  };

  const writeOrderStatus = e => {
    setOrderStatus(e);
  };

  const switchStep = () => {
    switch (step) {
      default:
      case 1:
        return (
          <Fragment>
            <ProductDetails />
            <ProductOptions
              currencyCode={currencyCode}
              prices={prices}
              bookable={bookable}
              selectedPrice={selectedPrice}
              changeSelectedPrice={changeSelectedPrice}
              nextStep={nextStep}
            />
          </Fragment>
        );
      case 2:
        return (
          <Confirm
            selectedPrice={selectedPrice}
            isConfirm={isConfirm}
            nextStep={nextStep}
            prevStep={prevStep}
            changeIsConfirm={changeIsConfirm}
            writeOrderStatus={writeOrderStatus}
          />
        );

      case 3:
        if (orderStatus !== undefined) {
          return <Feedback orderStatus={orderStatus} />;
        } else {
          return (
            <Fragment>
              <div className="feedbackContainer  ">
                <Preloader />
              </div>

              <Link to={"/overview"} className="FeedbackOverviewLink">
                <span>Übersicht &amp; Kauf-Historie</span> <ArrowLeft />
              </Link>
            </Fragment>
          );
        }
    }
  };

  if (loading) {
    return (
      <div className="productContainer">
        <div className="productPart1ContainerMobile">
          <ProductMedia />
        </div>
        <div className="productPart1Container">
          <ImageMedia />
        </div>
        <div className="productPart2Container ">{switchStep()}</div>
      </div>
    );
  } else {
    return <Preloader />;
  }
};

export default ProductPage;
