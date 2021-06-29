import { useState, useEffect } from "react";
// It is possible to use the rgbToHex, but it is easier to find it from the item itself
//import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb);

  /* To see the full hex code */
  const hexValue = `#${hexColor}`;

  // Timer for alert
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && (
        <p className={`color-alert ${index > 9 && "color-alert-light"}`}>
          Copied to clipboard!
        </p>
      )}
    </div>
  );
};

export default SingleColor;
