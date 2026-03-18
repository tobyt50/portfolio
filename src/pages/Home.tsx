import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { AboutSection } from "../components/About";

export const Home = () => {
  // Base arrays
  const baseFrontend = [
    "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Next.js", "Responsive Design"
  ];
  const baseBackendCloud = [
    "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Socket.IO", "Vercel", "Stripe", "AWS S3", "JWT Auth"
  ];

  // Quadrupled arrays to ensure the marquee never runs out of content on ultra-wide screens
  const frontendSkills = [...baseFrontend, ...baseFrontend, ...baseFrontend, ...baseFrontend];
  const backendCloudSkills = [...baseBackendCloud, ...baseBackendCloud, ...baseBackendCloud, ...baseBackendCloud];

  const name = "Matthew Tedunjaiye";
  const letters = Array.from(name);

  return (
    <section className="flex flex-col items-center justify-center text-center py-4 sm:py-8 md:py-10 overflow-hidden">
      {/* --- HERO --- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-900 leading-tight">
          Hi, I’m{" "}
          <span className="text-primary-600 dark:text-primary-400 inline-flex items-baseline">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, delay: index * 0.05 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Full-Stack Developer crafting scalable, real-time web platforms with{" "}
          <span className="font-semibold">TypeScript</span>,{" "}
          <span className="font-semibold">React</span>, and{" "}
          <span className="font-semibold">Node.js</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition w-full sm:w-auto"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 transition w-full sm:w-auto"
          >
            Hire Me
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 transition w-full sm:w-auto"
          >
            View CV
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400 font-medium">
          <a href="mailto:tedunjaiyem@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-2">
            <Mail size={16} /> tedunjaiyem@gmail.com
          </a>
          <a href="https://github.com/tobyt50/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-2">
            <Github size={16} /> github.com/tobyt50/
          </a>
          <a href="https://linkedin.com/in/tobyt50/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-2">
            <Linkedin size={16} /> linkedin.com/in/tobyt50/
          </a>
        </div>
      </motion.div>

      {/* --- INFINITE MARQUEE --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12 w-full max-w-[100vw] overflow-hidden relative flex flex-col gap-4 py-4 mask-edges"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        {/* Row 1: Scrolling Left (Slower speed: 50s) */}
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            className="flex gap-4 px-2"
          >
            {frontendSkills.map((tech, index) => (
              <span
                key={`row1-${index}`}
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-medium text-sm whitespace-nowrap shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolling Right (Fixed logic, Slower speed: 60s) */}
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            className="flex gap-4 px-2"
          >
            {backendCloudSkills.map((tech, index) => (
              <span
                key={`row2-${index}`}
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-medium text-sm whitespace-nowrap shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* --- ABOUT --- */}
      <AboutSection />
    </section>
  );
};