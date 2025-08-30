import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import "./dropdown.css";

const determineLogoSize = (width) => {
  if (width >= 1024) {
    return 20;
  } else {
    return 15;
  }
};

export const Dropdown = ({ dropdownSelection, initialState, selections }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [selectedOption, setSelectedOption] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value, label) => {
    setSelectedOption(label);
    dropdownSelection(label);
    setIsOpen(false);
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
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown--button" onClick={toggleDropdown}>
        <h6>{selectedOption}</h6>
        <div className="dropdown--divider"></div>
        <ChevronDownIcon style={{ width: determineLogoSize(windowWidth) }} />
      </button>
      {isOpen && (
        <div className="dropdown--content">
          {selections.map((selection, index) => (
            <div
              key={index}
              className="dropdown--option"
              onClick={() => handleSelect(selection, selection)}
            >
              <h6>{selection}</h6>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
