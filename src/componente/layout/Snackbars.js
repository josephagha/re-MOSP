import React from "react";
import ExclamationMark from "../../media/svg/icons/ExclamationMark";

const Snackbars = ({ erorrMessage, classList }) => {
  return (
    <div className={classList}>
      <span className="errorMessageIcon">
        <ExclamationMark />
      </span>{" "}
      <span className="errorMessageText">{erorrMessage}</span>
    </div>
  );
};

export default Snackbars;
