import React from "react";
import { ChampionsBanner } from "../ChampionsBanner/ChampionsBanner";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      {/** <ChampionsBanner /> */}
      <Scoreboard />
    </header>
  );
};
