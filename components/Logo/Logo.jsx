import React from "react";

import Image from "next/image";

export default function Logo({ src, width, height, alt = "CMHL Image" }) {
  return <Image src={src} width={width} height={height} alt={alt} />;
}
