import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AboutSection } from "../components/About";

export const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-50">
          Hi, I’m <span className="text-primary-600 dark:text-primary-400">Matthew Tedunjaiye</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Full-Stack Developer crafting scalable platforms with{" "}
          <span className="font-semibold">TypeScript</span>,{" "}
          <span className="font-semibold">React</span>, and{" "}
          <span className="font-semibold">Node.js</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
          >
            Hire Me
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-14 flex flex-wrap justify-center gap-3 text-sm text-gray-500 dark:text-gray-400"
      >
        {[
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Vercel",
          "Tailwind CSS",
          "Framer Motion",
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
          >
            {tech}
          </span>
        ))}
      </motion.div>
      <AboutSection />
    </section>
  );
};
