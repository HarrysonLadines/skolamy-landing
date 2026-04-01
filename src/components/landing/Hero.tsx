"use client";

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Reveal, customEase, InteractiveButton } from './Shared';
import Image from 'next/image';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section id="inicio" className="pt-52 pb-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: customEase }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/50 border border-white/50 text-[10px] font-bold mb-12 text-[#2e2928]/60 uppercase tracking-[0.25em] backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            Versión beta
          </div>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </motion.div>
        <Reveal width="100%">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-[100px] font-semibold tracking-[-0.06em] text-[#2e2928] mb-10 leading-[0.9] inline-block">
              Gestión educativa <br className="hidden md:block" />
              Diseñada a medida
            </h1>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.1}>
          <p className="max-w-2xl mx-auto text-lg md:text-[24px] text-gray-500 font-medium leading-[1.3] mb-14 tracking-tight">
            Control financiero, académico y comunicación en una plataforma de alto rendimiento.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: customEase }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 relative"
        >
          <InteractiveButton
            text="Reservar Demo"
            hoverText="¡Hablemos ahora!"
            className="w-full sm:w-auto bg-[#2e2928] text-[#f6f6f7] rounded-full font-bold text-[16px] shadow-2xl shadow-[#2e2928]/20"
            icon={ChevronRight}
            href="https://wa.me/3435263119?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20demo%20de%20Skolamy"
            target="_blank"
          />
          <InteractiveButton
            text="Ver características"
            hoverText="Explorar funcionalidades"
            className="w-full sm:w-auto bg-[#f6f6f7] border-2 border-[#2e2928]/5 text-[#2e2928] rounded-full font-bold text-[16px] hover:bg-white hover:border-[#2e2928]/10 shadow-sm"
            href="#beneficios"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: customEase }}
        className="mt-40 max-w-[1400px] mx-auto px-4 md:px-0"
      >
        <motion.div
          style={{
            y: springY,
            rotateX: springRotateX,
            scale: springScale,
            willChange: "transform"
          }}
          className="perspective-1000 transform-gpu"
        >
          <div className="bg-[#f8fafc]/50 p-2 md:p-4 rounded-[3rem] border border-[#2e2928]/5 shadow-2xl backdrop-blur-3xl overflow-hidden relative group">
            <div className="bg-[#f8fafc] rounded-[2.5rem] border border-[#2e2928]/5 shadow-inner overflow-hidden aspect-[16/10] flex relative z-10 font-sans">
              <Image src="/skolamy-dashboard.png" alt="Skolamy Dashboard" fill className="object-contain drop-shadow-sm rounded-xl" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
