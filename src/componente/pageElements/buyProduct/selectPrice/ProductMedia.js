import React, { Fragment } from "react";
import cruiseAndHelp from "../../../../media/image/aida-cruise-and-help-s.jpg";

const ProductMedia = props => {
  return (
    <Fragment>
      <img
        src={cruiseAndHelp}
        className=" imgProductMedia "
        alt="aida cruise And Help"
      />
    </Fragment>
  );
};

export default ProductMedia;
