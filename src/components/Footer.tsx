import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-12 py-8 rounded-t-2xl bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        {/* Left: Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Matthew Tedunjaiye. Built with{" "}
          <span className="text-primary-600 dark:text-primary-400 font-medium">
            React + Vite
          </span>
          .
        </p>

        {/* Center: Explicit Email for visibility */}
        <a
          href="mailto:tedunjaiyem@gmail.com"
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
        >
          <Mail size={16} />
          tedunjaiyem@gmail.com
        </a>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tobyt50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/tobyt50/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
          >
            <Linkedin size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};