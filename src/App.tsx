import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";

// Lazy load routes for performance optimization
const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const Projects = lazy(() => import("./pages/Projects").then((m) => ({ default: m.Projects })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-800 border-t-primary-500 rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;