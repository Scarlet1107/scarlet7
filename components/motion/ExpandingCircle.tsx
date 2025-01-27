"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const ExpandingCircle: React.FC = () => {
  const [isFinished, setIsFinished] = React.useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 3,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: [0.32, 0, 0.67, 0],
      },
    },
  };

  return (
    <div
      ref={ref}
      className="flex items-center justify-center overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        className="w-[min(90vw,90vh)] h-[min(90vw,90vh)] rounded-full border-2 border-white"
        style={{ backgroundColor: "transparent" }}
        initial="hidden"
        animate={isInView || !isFinished ? "visible" : "hidden"}
        variants={circleVariants}
        onAnimationComplete={() => setIsFinished(true)}
      />
    </div>
  );
};

export default ExpandingCircle;
