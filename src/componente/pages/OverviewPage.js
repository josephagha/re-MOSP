import React, { Fragment } from "react";

import OverviewTable from "../pageElements/overview/OverviewTable";
import ImageMedia from "../pageElements/ImageMedia";

import ArrowRight from "../../media/svg/icons/ArrowRight";
import { Link } from "react-router-dom";

const OverviewPage = () => {
  return (
    <Fragment>
      <div className="overviewContainer">
        <div className="overviewPart1Container ">
          <ImageMedia />
        </div>
        <div className="overviewPart2Container ">
          <div className="overviewContent">
            <Link to={"/product"} className="linkSendMeBack fontL ">
              <ArrowRight /> <span>zurück zur Spende</span>
            </Link>
            <div className="mt3 ">
              <h1 className="fontXl fontDarkBlue uppercase mb0">
                Übersicht & Kauf-Historie
              </h1>
              <p className="fontDarkGrey fontS mb4">
                Aktueller Status Ihrer Reservierungen.
              </p>
            </div>

            <OverviewTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OverviewPage;
