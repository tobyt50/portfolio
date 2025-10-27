import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export const ProjectCard = ({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  image,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
          >
            <ExternalLink size={16} /> Live
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 text-sm font-medium"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};
