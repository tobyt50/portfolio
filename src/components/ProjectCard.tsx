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

  // --- GIF Preloading Logic ---
  // Preloads the GIF into browser cache immediately so there's zero lag on hover
  useEffect(() => {
    if (gif) {
      const img = new Image();
      img.src = gif;
    }
  }, [gif]);

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
        className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative aspect-video overflow-hidden shrink-0">
          <img
            src={hovered && gif ? gif : image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
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

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-800"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto border-t border-gray-100 dark:border-gray-800 pt-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live site for ${title}`}
              className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition"
            >
              <ExternalLink size={16} aria-hidden="true" /> <span>Live Site</span>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title}`}
              className="flex items-center gap-1.5 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm font-medium transition"
            >
              <Github size={16} aria-hidden="true" /> <span>Source Code</span>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} demo video`}
          >
            <div className="relative w-[90%] max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={demoUrl}
                title={`${title} demo`}
                className="w-full h-full rounded-2xl"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                title="Close demo"
                aria-label="Close demo"
                className="absolute top-3 right-3 md:top-4 md:right-4 p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition shadow-md border border-white/10"
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