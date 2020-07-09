import React, { Fragment } from "react";

import ImageMedia from "../ImageMedia";

import ProductMedia from "./selectPrice/ProductMedia";
import ProductDetails from "./selectPrice/ProductDetails";
import ProductOptions from "./selectPrice/ProductOptions";

const SelectPrice = ({
  currencyCode,
  prices,
  selectedPrice,
  bookable,
  changeSelectedPrice,
  nextStep
}) => {
  return (
    <Fragment>
      <div className="productContainer">
        <div className="productPart1ContainerMobile">
          <ProductMedia />
        </div>
        <div className="productPart1Container">
          <ImageMedia />
        </div>
        <div className="productPart2Container ">
          <ProductDetails />
          <ProductOptions
            currencyCode={currencyCode}
            prices={prices}
            bookable={bookable}
            selectedPrice={selectedPrice}
            changeSelectedPrice={changeSelectedPrice}
            nextStep={nextStep}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SelectPrice;
