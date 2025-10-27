import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 hover:scale-105 transition"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-gray-600" />
      ) : (
        <Sun className="w-4 h-4 text-gray-900" />
      )}
    </button>
  );
};