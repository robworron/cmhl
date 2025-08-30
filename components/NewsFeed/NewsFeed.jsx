import React from "react";
import { Photo } from "../Photo/Photo";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";

import "./newsfeed.css";

const NewsFeed = ({ title, date, images, imageSize, textBody }) => {
  const text = textBody.split("\n\n");
  const imageComponent =
    images.length === 1 ? (
      <Photo name={images[0]} size={imageSize} />
    ) : (
      <ImageCarousel images={images} size={imageSize} />
    );

  return (
    <div className="newsfeed">
      <h1 className="newsfeed--title">{title}</h1>
      <p className="newsfeed--date">{date}</p>
      <div className="newsfeed--body">
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
};

export default NewsFeed;
