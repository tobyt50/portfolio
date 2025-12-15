import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto py-3">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-900">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A selection of my best work - real-world applications showcasing my
          skills in React, Node.js, and TypeScript.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};