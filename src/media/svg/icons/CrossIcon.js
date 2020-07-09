import * as React from "react";

const CrossIcon = () => {
  return (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <defs>
      <mask id="a" x="0" y="0" width="50" height="50" maskUnits="userSpaceOnUse">
      <circle cx="25" cy="25" r="25" fill="#fff"/></mask>
  </defs>
      <circle cx="25" cy="25" r="25" fill="#e74502"/>
      <g mask="url(#a)">
        <polygon points="33.34 13.38 13.96 32.69 17.43 36.26 36.86 16.93 33.34 13.38" fill="#fff" />
      </g>
      <g mask="url(#a)">
        <polygon points="17.88 13.11 36.58 33.08 32.98 36.53 14.23 16.53 17.88 13.11" fill="#fff" />
      </g>
</svg>
  );
};

export default CrossIcon;



