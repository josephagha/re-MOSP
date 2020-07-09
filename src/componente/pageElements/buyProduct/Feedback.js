import React, { Fragment } from "react";
import ArrowLeft from "../../../media/svg/icons/ArrowLeft";
import CheckRoundedIcon from "../../../media/svg/icons/CheckRoundedIcon";
import PendingIcon from "../../../media/svg/icons/PendingIcon";

import { Link } from "react-router-dom";

const Feedback = ({ orderStatus }) => {
  if (orderStatus) {
    return (
      <Fragment>
        <div className="feedbackContainer  ">
          <CheckRoundedIcon />
          <h1 className="fontXl fontDarkBlue mt6 textCenter">
            Vielen Dank für Ihre Spende
          </h1>
          <p className="fontM fontDarkBlue mt4 textCenter">
            Sie können den Spendenbetrag ab Reisebeginn auf Ihrer Bordrechnung
            ansehen.
          </p>
        </div>

        {/* <a href="https://aida.de" className="fontM  mt9 button-outline">
          zurück zu MyAIDA
        </a> */}
        <Link to={"/"} className="fontM  mt9 button-outline">
          zurück
        </Link>

        <Link to={"/overview"} className="FeedbackOverviewLink">
          <span>Übersicht &amp; Kauf-Historie</span> <ArrowLeft />
        </Link>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="feedbackContainer  ">
          <PendingIcon />
          <h1 className="fontXl fontDarkBlue mt6 textCenter">Oops!</h1>
          <p className="fontM fontDarkBlue mt4 textCenter">
            Es hat leider nicht geklappt!
          </p>
        </div>

        <Link to={"/"} className="fontM  mt9 button-outline">
          zurück
        </Link>

        <Link to={"/overview"} className="FeedbackOverviewLink">
          <span>Übersicht &amp; Kauf-Historie</span> <ArrowLeft />
        </Link>
      </Fragment>
    );
  }
};

export default Feedback;
