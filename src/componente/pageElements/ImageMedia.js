import React, { Fragment } from "react";
import cruiseAndHelp from "../../media/image/aida-cruise-and-help-m.jpg";
import cruiseAndHelpBigImg from "../../media/image/aida-cruise-and-help-b.jpg";

let img;

if (window.innerWidth > 1150) {
  img = cruiseAndHelpBigImg;
} else {
  img = cruiseAndHelp;
}

const ImageMedia = props => {
  return (
    <Fragment>
      <img src={img} className=" imgProductMedia " alt="aida cruise And Help" />
    </Fragment>
  );
};

export default ImageMedia;
