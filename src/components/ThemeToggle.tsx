import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 hover:scale-105 transition-transform"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-gray-800" />
      ) : (
        <Sun className="w-4 h-4 text-gray-100" />
      )}
    </button>
  );
};
