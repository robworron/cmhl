import React from "react";

import Image from "next/image";

import styles from "./photo.module.css";

export default function Photo({ name, size }) {
  const imageSrc =
    name === "logos/logo-transparent-white.webp" ? logo : `/assets/${name}`;
  return (
    <div className={styles.photo}>
      <Image
        src={imageSrc}
        fill
        alt={name}
        style={{ objectFit: "contain" }}
        className={styles[`photo${size}`]}
      />
    </div>
  );
}
