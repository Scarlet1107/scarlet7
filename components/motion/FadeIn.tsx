"use client";
import { motion } from "framer-motion";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }} // 初期状態: 透明かつ30px下
      whileInView={{ opacity: 1, y: 0 }} // 画面に入ったとき: 不透明かつ元の位置
      viewport={{ once: true }} // 一度だけアニメーションを実行
      transition={{ duration: 0.6, ease: "easeOut", delay }} // アニメーション設定
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
