import React from "react";
import Image from "next/image";

import "./photo.css";

export const Photo = ({ name, size }) => {
  const imageSrc =
    name === "logos/logo-transparent-white.png" ? logo : `/assets/${name}`;
  return (
    <div className="photo">
      <img src={imageSrc} className={`photo--${size}`} />
    </div>
  );
};
