"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right";

const getHidden = (direction: Direction) => ({
  opacity: 0,
  y: direction === "up" ? 32 : 0,
  x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
  filter: "blur(10px)",
});

const variants: Variants = {
  hidden: (direction: Direction) => getHidden(direction),
  visible: (custom: { delay: number; direction: Direction }) => ({
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={{ delay, direction }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
