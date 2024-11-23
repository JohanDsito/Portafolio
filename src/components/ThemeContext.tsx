"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  // Verificar el tema guardado en localStorage al cargar la aplicación
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Función para alternar entre modo oscuro y claro
  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook para usar el contexto en otros componentes
export function useTheme() {
  return useContext(ThemeContext);
}
