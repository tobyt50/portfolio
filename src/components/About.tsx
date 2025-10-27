import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="max-w-5xl mx-auto mt-24 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 md:p-10 shadow-sm"
      >
        <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src="/assets/profile.jpg"
            alt="Matthew Tedunjaiye"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
            About Me
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            I’m a <span className="font-medium">Full-Stack Developer</span> specializing in
            TypeScript-driven architectures, scalable web platforms, and cloud
            deployment. I love building responsive, real-time systems and clean,
            efficient UI components.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            I’ve developed production-ready platforms like{" "}
            <span className="font-medium text-primary-600 dark:text-primary-400">
              Hava
            </span>{" "}
            and{" "}
            <span className="font-medium text-primary-600 dark:text-primary-400">
              PPALink
            </span>
            , focusing on performance, usability, and maintainability.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="mailto:tedunjaiyem@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-950 transition"
            >
              <Mail className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </a>
            <a
              href="https://github.com/tobyt50"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-950 transition"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </a>
            <a
              href="https://linkedin.com/in/tobyt50/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-950 transition"
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
