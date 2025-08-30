import React from "react";
import PropTypes from "prop-types";

import "./button.css";

export const Button = ({ primary, backgroundColour, size, label, onClick }) => {
  const mode = primary ? "button--primary" : "button--secondary";

  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      style={backgroundColour && { backgroundColor: backgroundColour }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,

  backgroundColour: PropTypes.string,

  size: PropTypes.oneOf(["mobile", "tablet", "laptop", "desktop"]),

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColour: null,
  primary: false,
  size: "mobile",
};
