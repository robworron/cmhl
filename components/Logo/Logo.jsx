import React from "react";
import Image from "next/image";

export const Logo = ({ src, width, height, alt }) => {
  const imageSrc = `/assets/logos/${src}.png`;
  return <Image src={imageSrc} width={width} height={height} alt={alt} />;
};
