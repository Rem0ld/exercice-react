// useDarkMode.js
import { useEffect, useState } from "react";

const root = document.getElementById("root");

/**
 * Hook that will set dark theme and update class on root element
 * @returns
 */
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const setTheme = (mode) => {
    window.localStorage.setItem("dark-mode", mode);
    setIsDark(mode);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    root.classList.toggle("dark-mode");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("dark-mode");
    if (localTheme) {
      setIsDark(localTheme);
    } else {
      setTheme(false);
      root.classList.remove("dark-mode");
    }
  }, []);

  return [isDark, toggleTheme];
};
