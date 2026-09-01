import React from "react";
import classNames from "classnames";

import styles from "./button.module.css";

export default function Button({
  primary = false,
  backgroundColour = null,
  size = "Small",
  label,
  onClick,
  textColour = null,
}) {
  const buttonClass = classNames(styles.button, styles[`button${size}`], {
    [styles.buttonPrimary]: primary,
    [styles.buttonSecondary]: !primary,
  });

  const inlineStyles = {};

  if (backgroundColour) {
    inlineStyles.backgroundColor = backgroundColour;
  }

  if (textColour) {
    inlineStyles.color = textColour;
  }

  return (
    <button
      type="button"
      className={buttonClass}
      style={inlineStyles}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
