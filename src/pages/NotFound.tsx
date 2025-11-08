import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageTransition } from "@/lib/motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-gray-100"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <motion.div className="text-center space-y-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-5xl font-bold text-primary">404</h1>
        <p className="text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
