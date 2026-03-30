"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Command } from 'lucide-react';
import { customEase } from './Shared';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const navHeight = 80;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let start: number | null = null;

    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={hidden ? "hidden" : (scrolled ? "scrolled" : "visible")}
      variants={{
        visible: {
          y: 0,
          backgroundColor: "rgba(246, 246, 247, 0)",
          borderColor: "rgba(46, 41, 40, 0)",
        },
        scrolled: {
          y: 0,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderColor: "rgba(46, 41, 40, 0.08)",
        },
        hidden: {
          y: "-100%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderColor: "rgba(46, 41, 40, 0.08)",
        },
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
    >
      <motion.div
        animate={{
          paddingTop: scrolled ? "16px" : "32px",
          paddingBottom: scrolled ? "16px" : "32px",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 flex-1">
          <motion.div
            whileHover={{ rotate: -10 }}
            className="w-8 h-8 bg-[#2e2928] rounded-lg flex items-center justify-center"
          >
            <Command className="text-white h-4 w-4" />
          </motion.div>
          <span className="font-bold tracking-tight text-xl text-[#2e2928]">Skolamy</span>
        </div>

        {/* Navigation Links - Capsule Style */}
        <div className="hidden md:flex items-center bg-[#f0f0f1]/50 p-1 rounded-2xl border border-gray-200/50 backdrop-blur-md">
          {['Inicio', 'Beneficios', 'Precios'].map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleScroll(e, id)}
                className="px-5 py-2 text-[13px] font-semibold text-gray-500 hover:text-black hover:bg-white rounded-xl transition-all duration-300"
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Right Action - Sharp Style */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#f0f0f1] text-[#2e2928] px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-white border border-gray-200/50 transition-all flex items-center gap-2"
            >
              Iniciar
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};
