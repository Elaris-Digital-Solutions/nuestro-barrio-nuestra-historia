import { motion } from 'framer-motion';
import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export const Reveal = ({ 
  children, 
  width = "fit-content",
  direction = "up",
  delay = 0 
}: RevealProps) => {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 75 };
      case "down":
        return { opacity: 0, y: -75 };
      case "left":
        return { opacity: 0, x: 75 };
      case "right":
        return { opacity: 0, x: -75 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
    }
  };

  return (
    <div style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: getInitial(),
          visible: getAnimate()
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 0.8,
          delay,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
