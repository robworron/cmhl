import React from "react";
import Image from "next/image";

import "./championsbanner.css";

export const ChampionsBanner = () => {
  const winnersLogo = "/assets/logos/axemen-transparent.png";
  const trophyImage = "/assets/league/league-cup.png";

  return (
    <div className="champions-banner">
      <div className="champions-banner--logo">
        <Image
          src={winnersLogo}
          fill
          style={{ objectFit: "contain" }}
          alt="Winners Logo"
        />
      </div>
      <h1>2024-25 CMHL CHAMPIONS</h1>
      <div className="champions-banner--trophy">
        <Image
          src={trophyImage}
          fill
          style={{ objectFit: "contain" }}
          alt="CMHL Trophy"
        />
      </div>
    </div>
  );
};
