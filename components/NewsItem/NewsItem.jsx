import React from "react";

import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Photo from "@/components/Photo/Photo";

import styles from "./newsitem.module.css";

export default function NewsItem({ data }) {
  const text = data.textBody.split("\n\n");
  const imageComponent =
    data.images.length === 1 ? (
      <Photo name={data.images[0]} size={data.imageSize} />
    ) : (
      <ImageCarousel images={data.images} size={data.imageSize} />
    );

  return (
    <div className={styles.newsitem}>
      <h1 className={styles.newsitemTitle}>{data.title}</h1>
      <p className={styles.newsitemDate}>{data.date}</p>
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
