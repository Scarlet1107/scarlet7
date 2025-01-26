"use client";
import { motion } from "motion/react";
import React, { ReactNode } from "react";

const HoverScale = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
};

export default HoverScale;
