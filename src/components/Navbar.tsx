import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Github, Linkedin } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 rounded-xl relative flex items-center justify-between md:justify-end">

        {/* Mobile/Left-aligned Global Social Links */}
        <div className="flex items-center gap-3 md:hidden">
          <a href="https://github.com/tobyt50" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/tobyt50/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
            <Linkedin size={18} />
          </a>
        </div>

        {/* Center Nav Links with Framer Motion Active Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${isActive
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-primary-50 dark:bg-primary-950/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right side global actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 mr-2 border-r border-gray-200 dark:border-gray-800 pr-4">
            <a href="https://github.com/tobyt50" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/tobyt50/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
              <Linkedin size={18} />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};