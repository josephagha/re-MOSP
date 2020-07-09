import React, { Fragment } from "react";

const ProductDetails = () => {
  let nova;

  switch (window.location.host) {
    case "novatest-mospmvp.aida.de:8080":
    case "novatest-mospmvp.aida.de:9000":
      nova = "https://api.novatest-mospmvp.aida.de/api";
      break;
    case "nova-mospmvp.aida.de:8080":
    case "nova-mospmvp.aida.de:9000":
      nova = "https://api.mospmvp.nova.aida.de/api";
      break;
    default:
      nova = false;
      break;
  }

  let info = (
    <span>
      {" "}
      Nähere Informationen finden Sie{" "}
      <a
        className="fontBlue"
        href="https://aida.de/cruise-and-help"
        target="_blank"
        rel="noopener noreferrer"
      >
        hier
      </a>
      .
    </span>
  );

  return (
    <Fragment>
      <div className=" titleOfTheProduct">
        <h1 className="fontXl fontDarkBlue uppercase">
          Helfen Sie mit – jeder Euro zählt!
        </h1>
      </div>

      <div className=" ProductTextcontainer">
        <p className="fontM fontDarkBlue productText ">
          Kommen Sie mit an Bord und seien auch Sie Teil unserer Initiative AIDA
          Cruise & Help - gemeinsam können wir etwas bewegen! AIDA ist in den
          schönsten Reiseregionen der Welt unterwegs. Unsere Gäste und unsere
          internationale Crew sind eine Familie. Deshalb ist es für uns
          selbstverständlich, Verantwortung zu übernehmen – nicht nur für unsere
          Familie, sondern auch für die Menschen und Regionen, die unsere
          Unterstützung brauchen. Im Rahmen unserer Initiative AIDA Cruise &
          Help engagieren wir uns in sozialen und kulturellen Projekten,
          regional wie international. So ist es uns beispielsweise gelungen,
          gemeinsam mit unseren Gästen, unserer Crew und unseren Partnern im
          Jahr 2019 bislang den Bau von fünf Schulen in Schwellenländern zu
          finanzieren.
          {!nova ? info : null}
        </p>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
