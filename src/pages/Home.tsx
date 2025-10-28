import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AboutSection } from "../components/About";

export const Home = () => {
  const skillGroups = [
    {
      title: "Frontend",
      items: [
        "React (Vite + TypeScript)",
        "Tailwind CSS",
        "Framer Motion",
        "Zustand",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js (Express)",
        "Prisma ORM",
        "PostgreSQL (Neon)",
        "REST API Design",
        "Socket.IO (Realtime)",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "Vercel + Render",
        "S3 (iDrive e2)",
        "Cloudinary (Media)",
        "Stripe Integration",
        "SendGrid (Email)",
        "JWT Auth",
      ],
    },
  ];

  const name = "Matthew Tedunjaiye";
  const letters = Array.from(name);

  return (
    <section className="flex flex-col items-center justify-center text-center py-8 sm:py-12 md:py-16">
      {/* --- HERO --- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4"
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

        <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </motion.div>

      {/* --- SKILL GROUPS --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="mt-16 w-full max-w-5xl px-4 grid md:grid-cols-3 gap-6 text-sm"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-gray-900">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- ABOUT --- */}
      <AboutSection />
    </section>
  );
};