import React from "react";

import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Photo from "@/components/Photo/Photo";

import styles from "./newsfeed.module.css";

export default function NewsFeed({ title, date, images, imageSize, textBody }) {
  const text = textBody.split("\n\n");
  const imageComponent =
    images.length === 1 ? (
      <Photo name={images[0]} size={imageSize} />
    ) : (
      <ImageCarousel images={images} size={imageSize} />
    );

  return (
    <div className={styles.newsfeed}>
      <h1 className={styles.newsfeedTitle}>{title}</h1>
      <p className={styles.newsfeedDate}>{date}</p>
      <div className={styles.newsfeedBody}>
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
