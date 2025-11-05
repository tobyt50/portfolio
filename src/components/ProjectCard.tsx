import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play, X } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;  // thumbnail
  gif?: string;   // optional gif preview
  demoUrl?: string; // optional embedded video
}

export const ProjectCard = ({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  image,
  gif,
  demoUrl,
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // --- Mobile swipe detection for GIF preview ---
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) setHovered(!hovered);
    }
    setTouchStartX(null);
  };

  // prevent scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showDemo ? "hidden" : "auto";
  }, [showDemo]);

  return (
    <>
      {/* ---- Card ---- */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={hovered && gif ? gif : image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />

          {demoUrl && (
            <button
              type="button"
              onClick={() => setShowDemo(true)}
              title={`Play ${title} demo`}
              aria-label={`Play ${title} demo`}
              className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium shadow-sm transition"
            >
              <Play size={14} aria-hidden="true" />
              <span>Demo</span>
            </button>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-800"
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
              <ExternalLink size={16} aria-hidden="true" /> <span>Live</span>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm font-medium"
            >
              <Github size={16} aria-hidden="true" /> <span>Code</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* ---- Demo Modal ---- */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} demo video`}
          >
            <div className="relative w-[90%] max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={demoUrl}
                title={`${title} demo`}
                className="w-full h-full rounded-2xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                title="Close demo"
                aria-label="Close demo"
                className="absolute top-3 right-3 p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
