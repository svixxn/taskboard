"use client";

import { useEffect } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", isDark);
  });
  return <div>{children}</div>;
};

export default ThemeProvider;
