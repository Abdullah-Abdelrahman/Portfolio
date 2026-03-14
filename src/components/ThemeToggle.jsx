import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggle = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <button
      onClick={toggle}
      className={cn(
        "fixed   top-5 right-5 max-sm:top-[8%]",
        "z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-8 w-8 text-yellow-400" />
      ) : (
        <Moon className="h-8 w-8 text-blue-900" />
      )}
    </button>
  );
}

export default ThemeToggle;
