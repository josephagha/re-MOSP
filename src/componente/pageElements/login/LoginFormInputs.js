import React, { useState, useEffect } from "react";

import { isValidLoginData } from "../../../middleware/Validation";
import {
  getLoginData,
  setUserAuthenticated
} from "../../../middleware/Storage";

const LoginFormInputs = props => {
  const { value: paxId, bind: bindPaxId } = useInput();
  const {
    value: embarkationDate,
    bind: bindEmbarkationDate
    //reset: resetEmbarkationDate
  } = useInput();
  const {
    value: disembarkationDate,
    bind: bindDisembarkationDate
    // reset: resetDisembarkationDate
  } = useInput();
  const {
    value: bookingNumber,
    bind: bindBookingNumber
    //reset: resetBookingNumber
  } = useInput();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      isAllowToEnter();
    }
  });

  const isAllowToEnter = () => {
    if (loading) {
      isValidLoginData(
        paxId,
        embarkationDate,
        disembarkationDate,
        bookingNumber
      );
      let storagData = getLoginData();
      if (
        storagData.paxId != null &&
        storagData.embarkationDate != null &&
        storagData.disembarkationDate != null &&
        storagData.bookingNumber != null
      ) {
        setUserAuthenticated();
        window.location.href = `${window.location.origin}/product`;
      }
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setLoading(true);
    //resetPaxId();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group inputContainer">
          <input
            className="loginInput"
            type="number"
            {...bindPaxId}
            placeholder="paxId"
            required="required"
          />
          <label className="loginLabel">paxId</label>
          <div className="error"></div>
        </div>
        <div className="input-group inputContainer">
          <input
            className="loginInput"
            type="date"
            {...bindEmbarkationDate}
            required="required"
            placeholder="Beginn der Reise (01-01-2020)"
          />
          <label className="loginLabel">Beginn der Reise</label>
          <div className="error"></div>
        </div>
        <div className="input-group inputContainer">
          <input
            className="loginInput"
            type="date"
            {...bindDisembarkationDate}
            required="required"
            placeholder="End der Reise (01-02-2020)"
          />
          <label className="loginLabel">End der Reise</label>
          <div className="error"></div>
        </div>
        <div className="input-group inputContainer">
          <input
            className="loginInput"
            type="number"
            {...bindBookingNumber}
            required="required"
            placeholder="Booking Number"
          />
          <label className="loginLabel">Booking Number</label>
          <div className="error"></div>
        </div>
        {!loading ? (
          <button className="submit" type="submit">
            ANMELDEN
          </button>
        ) : (
          <button className="submit opacity50">Loading...</button>
        )}
      </form>
    </div>
  );
};

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

export default LoginFormInputs;
