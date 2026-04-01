"use client";

import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const customEase = [0.16, 1, 0.3, 1] as any;
export const mainColor = "#2e2928";
export const bgColor = "#f6f6f7";

export const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const target = e.target as HTMLElement;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null;
        setHovered(isClickable);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 40, stiffness: 800 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: hovered ? 1.1 : 1,
      }}
      className="fixed pointer-events-none z-[9999] w-4 h-4 bg-[#2e2928] rounded-full hidden md:block"
    />
  );
};

export const Reveal = ({ children, width = "fit-content", delay = 0, y = 30 }: { children: React.ReactNode; width?: "fit-content" | "100%"; delay?: number; y?: number }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.1 + delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const GridBackground = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
);

export const InteractiveButton = ({
  text,
  hoverText,
  className = "",
  icon: Icon,
  px = "px-10",
  py = "py-5",
  onClick,
  href,
  target,
}: {
  text: string;
  hoverText?: string;
  className?: string;
  icon?: any;
  px?: string;
  py?: string;
  onClick?: (e: any) => void;
  href?: string;
  target?: string;
}) => {
  const content = (
    <motion.div
      variants={{
        initial: { y: 0 },
        hover: { y: "-100%" }
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="w-full"
    >
      <div className={`flex items-center justify-center gap-2 ${px} ${py} whitespace-nowrap`}>
        {text} {Icon && <Icon className="size-5 group-hover:translate-x-1 transition-transform" />}
      </div>
      <div className={`flex items-center justify-center gap-2 ${px} ${py} absolute top-full left-0 w-full whitespace-nowrap bg-inherit text-inherit`}>
        {hoverText || text} {Icon && <Icon className="size-5" />}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        onClick={onClick}
        whileHover="hover"
        initial="initial"
        whileTap={{ scale: 0.96 }}
        className={`relative overflow-hidden group block text-center ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      className={`relative overflow-hidden group ${className}`}
    >
      {content}
    </motion.button>
  );
};
