"use client";

import { createContext, useState, useEffect, useContext } from "react";

const WindowWidthContext = createContext(0);

export function WindowWidthProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
}

export function useWindowWidth() {
  return useContext(WindowWidthContext);
}
