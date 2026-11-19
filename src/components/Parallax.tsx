"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Parallax({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={className ? `parallax ${className}` : "parallax"}>
      <motion.div className={reduce ? "parallax__inner is-still" : "parallax__inner"} style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
