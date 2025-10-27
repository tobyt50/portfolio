import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 rounded-xl">
        <Link
          to="/"
          className="font-semibold text-lg text-primary-600 dark:text-primary-400"
        >
          Matthew Tedunjaiye
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
