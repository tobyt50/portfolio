import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = ['/', '/projects', '/contact'];
  const currentIndex = routes.findIndex(route => route === location.pathname);
  const nextPath = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : location.pathname;
  const prevPath = currentIndex > 0 ? routes[currentIndex - 1] : location.pathname;

  const handleSwipeEnd = (_e: any, info: any) => {
    const swipeThreshold = 100;
    const velocityThreshold = 500;

    if (Math.abs(info.offset.x) > swipeThreshold && Math.abs(info.velocity.x) > velocityThreshold) {
      if (info.offset.x > 0 && prevPath !== location.pathname) {
        // Swipe right: go to previous page
        navigate(prevPath, { replace: true });
      } else if (info.offset.x < 0 && nextPath !== location.pathname) {
        // Swipe left: go to next page
        navigate(nextPath, { replace: true });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragEnd={handleSwipeEnd}
          initial={{ opacity: 0, y: 10, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -10, x: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1 px-4 sm:px-10 md:px-20 py-10 rounded-2xl bg-gray-50 dark:bg-zinc-950"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};