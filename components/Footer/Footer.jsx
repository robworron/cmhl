import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import "./footer.css";

const leagueLogo = "/assets/logos/logo-transparent-white.png";
const axemenLogo = "/assets/logos/axemen-transparent.png";
const bulldogsLogo = "/assets/logos/bulldogs-transparent.png";
const gullsLogo = "/assets/logos/gulls-transparent.png";
const jagrbombsLogo = "/assets/logos/jagrbombs-transparent.png";
const mightyDrunksLogo = "/assets/logos/mightydrunks-transparent.png";
const rockiesLogo = "/assets/logos/rockies-transparent.png";
const seamenLogo = "/assets/logos/seamen-transparent.png";
const toonieTuesdayLogo = "/assets/logos/toonietuesday-transparent.png";

export const Footer = () => (
  <footer className="footer">
    <div className="footer--red-line" />
    <div className="footer--white-line" />
    <div className="footer--logos">
      <div className="footer--team-logos">
        <img src={axemenLogo} alt="Axemen" className="footer--team-logo" />
        <img src={bulldogsLogo} alt="Bulldogs" className="footer--team-logo" />
        <a
          href="https://www.instagram.com/gullsnia"
          className="footer--team-logo"
        >
          <img src={gullsLogo} alt="Gulls" className="footer--team-logo" />
        </a>
        <a
          href="https://www.instagram.com/jagr.bombss"
          className="footer--team-logo"
        >
          <img
            src={jagrbombsLogo}
            alt="Jagrbombs"
            className="footer--team-logo"
          />
        </a>
      </div>
      <img src={leagueLogo} alt="CMHL" className="footer--league-logo" />
      <div className="footer--team-logos">
        <img
          src={mightyDrunksLogo}
          alt="Mighty Drunks"
          className="footer--team-logo"
        />
        <img src={rockiesLogo} alt="Rockies" className="footer--team-logo" />
        <a
          href="https://www.instagram.com/seamen_hockey"
          className="footer--team-logo"
        >
          <img src={seamenLogo} alt="Seamen" className="footer--team-logo" />
        </a>
        <a
          href="https://www.instagram.com/toonie.tuesday"
          className="footer--team-logo"
        >
          <img
            src={toonieTuesdayLogo}
            alt="Toonie Tuesday"
            className="footer--team-logo"
          />
        </a>
      </div>
    </div>
    <p>est. 2023</p>
    <h4 style={{ marginBottom: 0 }}>
      Website Designed & Developed by Robert Worron
    </h4>
    <div className="footer--email-info">
      <EnvelopeIcon style={{ width: 24, padding: 3 }} />
      <h5 style={{ margin: 0 }}>rworron94@gmail.com</h5>
    </div>
  </footer>
);
