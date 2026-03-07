import React from "react";

import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Photo from "@/components/Photo/Photo";

import styles from "./newsitem.module.css";

export default function NewsItem({ title, date, images, imageSize, textBody }) {
  const text = textBody.split("\n\n");
  const imageComponent =
    images.length === 1 ? (
      <Photo name={images[0]} size={imageSize} />
    ) : (
      <ImageCarousel images={images} size={imageSize} />
    );

  return (
    <div className={styles.newsitem}>
      <h1 className={styles.newsitemTitle}>{title}</h1>
      <p className={styles.newsitemDate}>{date}</p>
      <div className={styles.newsitemBody}>
        {imageComponent}
        {text.map((paragraph, index) => (
          <p key={index}>
            {paragraph.split("\n").map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
