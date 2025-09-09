import React, { useEffect, useRef, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import styles from "./dropdown.module.css";

const determineLogoSize = (width) => {
  if (width >= 1024) return 20;
  return 15;
};

export default function Dropdown({ onSelect, defaultValue, options }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (label) => {
    setSelectedOption(label);
    onSelect(label);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        <h6>{selectedOption}</h6>
        <div className={styles.dropdownDivider}></div>
        <ChevronDownIcon style={{ width: determineLogoSize(windowWidth) }} />
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {options.map((selection, index) => (
            <div
              key={index}
              className={styles.dropdownOption}
              onClick={() => handleSelect(selection)}
            >
              <h6>{selection}</h6>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
