"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive((prev) => !prev);
  const closeMenu = () => setMenuActive(false);

  return (
    <MenuContext.Provider value={{ menuActive, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
