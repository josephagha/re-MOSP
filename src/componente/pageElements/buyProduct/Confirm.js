import React from "react";

import ArrowRight from "../../../media/svg/icons/ArrowRight";
import CheckMark from "../../../media/svg/icons/CheckMark";

import { postProductReservations } from "../../../API/productDetails.API";

const Confirm = ({
  isConfirm,
  nextStep,
  prevStep,
  changeIsConfirm,
  selectedPrice,
  writeOrderStatus
}) => {
  const productReservations = (selectedPrice, Status) => {
    postProductReservations(selectedPrice, Status);

    nextStep();
  };

  return (
    <div className="completeReservationContent">
      <span
        onClick={() => {
          prevStep();
        }}
        className="reservationSendMeBackLink fontL "
      >
        <ArrowRight /> <span>zurück</span>
      </span>

      <h1 className="reservationTitle fontDarkBlue fontXl">
        PRÜFEN & RESERVIERUNG
        <br /> ABSCHLIESSEN
      </h1>

      <div className="reservationForm mt12  ">
        <div className="mb6 ">
          <label>
            <input
              type="checkbox"
              value="ok"
              defaultChecked={isConfirm ? true : false}
            />
            <span
              className={isConfirm ? "checkmarkChecked" : "checkmark"}
              onClick={() => {
                changeIsConfirm();
              }}
            >
              <CheckMark />
            </span>
            <span className="checkmarkText  fontDarkBlue ml1 ">
              Ich stimme den{" "}
              <a
                href="https://www.aida.de/kreuzfahrt/agb.18598.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                allgemeinen Geschäftsbedingungen
              </a>{" "}
              zu.
            </span>
          </label>
        </div>
        <button
          className={
            "reservationButton  " +
            (isConfirm ? "" : "reservationButtonDisabled")
          }
          type="submit"
          disabled={isConfirm ? false : true}
          onClick={() => {
            if (isConfirm) {
              productReservations(selectedPrice, writeOrderStatus);
            }
          }}
        >
          JETZT KOSTENPFLICHTIG RESERVIEREN
        </button>
      </div>

      <div className="privacyPolicyParagraph mt7  fontDarkGrey fontXs">
        Detaillierte Informationen zu den{" "}
        <a
          href="https://www.aida.de/kreuzfahrt/datenschutz.18597.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          AIDA Datenschutzbestimmungen finden Sie hier
        </a>
        . Widerrufsbelehrung: Sie können Ihre Vertragserklärung innerhalb von
        zwei Wochen ohne Angabe von Gründen in Textform (z.B. Brief, E-Mail)
        oder durch Rückgabe der Ware widerrufen. Die Frist beginnt frühestens
        mit Erhalt dieser Belehrung. Zur Wahrung der Widerrufsfrist genügt die
        rechtzeitige Absendung des Widerrufs oder Rückgabe der Ware. Der
        Widerruf ist zu richten an: AIDA Cruises, Am Strande 3d, 18055 Rostock.
        Im Falle eines wirksamen Widerrufs sind die beiderseits empfangenen
        Leistungen zurückzugewähren. Können Sie uns die empfangene Leistung ganz
        oder teilweise oder nur in verschlechtertem Zustand zurückgewähren,
        müssen Sie uns insoweit Wertersatz leisten. Sie können die
        Wertersatzpflicht vermeiden, indem Sie die Ware nicht wie Ihr Eigentum
        in Gebrauch nehmen und alles unterlassen, was deren Wert beeinträchtigt.
      </div>
    </div>
  );
};

export default Confirm;
