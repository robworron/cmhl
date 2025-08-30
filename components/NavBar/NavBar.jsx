"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Logo } from "../Logo/Logo";
import { useMenu } from "../../contexts/MenuContext";
import { usePathname } from "next/navigation";

import "./navbar.css";

const NAV_LINKS = [
  { name: "Schedule", path: "/schedule" },
  { name: "Standings", path: "/standings" },
  { name: "Stats", path: "/stats" },
  { name: "Info", path: "/info" },
  { name: "Gallery", path: "/gallery" },
];

const getLogoSize = (width) => {
  if (width >= 1440) return { w: 120, h: 45 };
  if (width >= 1024) return { w: 100, h: 35 };
  return { w: 80, h: 30 };
};

const NavBar = () => {
  const currentPath = usePathname();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const { menuActive, toggleMenu } = useMenu();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoSize = getLogoSize(windowWidth);
  const isDesktop = windowWidth >= 1024;

  return (
    <div className="navbar">
      <div className="navbar--black-line" />
      <div className="navbar--white-line" />
      <div className="navbar--red-line">
        {isDesktop ? (
          <>
            <Link href="/" className="navbar--logo">
              <Logo
                src="wordmark-transparent"
                width={logoSize.w}
                height={logoSize.h}
                alt="League Logo"
              />
            </Link>

            {NAV_LINKS.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`navbar--link ${
                  currentPath === path ? "active" : ""
                }`}
              >
                <h4>{name}</h4>
                <span className="navbar--hover-bar" />
              </Link>
            ))}

            <div className="navbar--contact">
              <EnvelopeIcon style={{ width: 24, padding: 5 }} />
              <p>cmhlniagara@gmail.com</p>
            </div>
          </>
        ) : (
          <>
            <button
              className="navbar--menu-button"
              type="button"
              onClick={toggleMenu}
            >
              <div className={`navbar--burger ${menuActive ? "open" : ""}`}>
                <span />
                <span />
                <span />
              </div>
            </button>
            <Logo
              src="wordmark-transparent"
              width={logoSize.w}
              height={logoSize.h}
              alt="League Logo"
            />
            <div className="navbar--contact">
              <EnvelopeIcon style={{ width: 24, padding: 5 }} />
              <p>cmhlniagara@gmail.com</p>
            </div>
          </>
        )}
      </div>
      <div className="navbar--white-line" />
      <div className="navbar--black-line" />
    </div>
  );
};

export default NavBar;
