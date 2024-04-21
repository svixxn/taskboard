"use client";

import React, { useState, useEffect } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

function DarkModeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <div className="flex gap-2 items-center">
      <Switch
        className="hidden md:block"
        id="dark-mode-toggler"
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
      />
      <Label htmlFor="dark-mode-toggler" className="cursor-pointer">
        Dark Mode
      </Label>
    </div>
  );
}

export default DarkModeSwitcher;
