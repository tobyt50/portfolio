import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 rounded-xl relative flex items-center justify-end">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};