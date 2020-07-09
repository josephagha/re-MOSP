import React from "react";

const Preloader = () => {
  return (
    <div className="spinnerCenter blockCenter mt12">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;
