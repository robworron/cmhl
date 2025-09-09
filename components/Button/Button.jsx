import React from "react";
import classNames from "classnames";

import styles from "./button.module.css";

export default function Button({
  primary = false,
  backgroundColour = null,
  size = "Small",
  label,
  onClick,
}) {
  const buttonClass = classNames(styles.button, styles[`button${size}`], {
    [styles.buttonPrimary]: primary,
    [styles.buttonSecondary]: !primary,
  });

  return (
    <button
      type="button"
      className={buttonClass}
      style={
        backgroundColour ? { backgroundColor: backgroundColour } : undefined
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}
