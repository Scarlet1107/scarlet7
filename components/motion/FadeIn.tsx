import { motion } from "framer-motion";

import { ReactNode } from "react";

const FadeIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }} // 初期状態: 不透明度0、20px下に配置
      animate={{ opacity: 1, y: 0 }} // アニメーション後: 不透明度1、位置0
      transition={{ duration: 0.5, ease: "easeOut" }} // 0.5秒で滑らかに
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
