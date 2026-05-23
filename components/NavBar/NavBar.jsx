"use client";

import { useEffect, useState } from "react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/Logo/Logo";
import { useMenu } from "../../contexts/MenuContext";

import styles from "./navbar.module.css";

const NAV_LINKS = [
  { name: "Schedule", path: "/schedule" },
  { name: "Standings", path: "/standings" },
  { name: "Stats", path: "/stats" },
  { name: "Info", path: "/information" },
  { name: "Gallery", path: "/gallery" },
];

export default function NavBar() {
  const currentPath = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const { menuActive, toggleMenu } = useMenu();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLine}>
        {windowWidth === null ? null : isDesktop ? (
          <>
            <Link href="/" className={styles.navbarLogo}>
              <Logo
                src="/assets/logos/wordmark-transparent.png"
                width={80}
                height={30}
                alt="League Logo"
              />
            </Link>

            {NAV_LINKS.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`${styles.navbarLink} ${
                  currentPath === path ? styles.navbarLinkActive : ""
                }`}
              >
                <h4>{name}</h4>
                <span className={styles.navbarHoverBar} />
              </Link>
            ))}

            <div className={styles.navbarContact}>
              <EnvelopeIcon style={{ width: 24, padding: 5 }} />
              <a href="mailto:cmhlniagara@gmail.com">cmhlniagara@gmail.com</a>
            </div>
          </>
        ) : (
          <>
            <button
              className={styles.navbarMenuButton}
              type="button"
              onClick={toggleMenu}
            >
              <div
                className={`${styles.navbarBurger} ${
                  menuActive ? styles.navbarBurgerOpen : ""
                }`}
              >
                <span />
                <span />
                <span />
              </div>
            </button>
            <Logo
              src="/assets/logos/wordmark-transparent.png"
              width={80}
              height={30}
              alt="League Logo"
            />
            <div className={styles.navbarContact}>
              <EnvelopeIcon style={{ width: 24, padding: 5 }} />
              <a href="mailto:cmhlniagara@gmail.com">cmhlniagara@gmail.com</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
