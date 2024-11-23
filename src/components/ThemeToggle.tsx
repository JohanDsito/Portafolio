"use client";

import { useState } from "react";

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 bg-teal-500 rounded-full text-white"
    >
      {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
}
