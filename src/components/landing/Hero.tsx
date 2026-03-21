"use client";

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ChevronRight, TrendingUp, Users, CreditCard } from 'lucide-react';
import { Reveal, customEase, InteractiveButton } from './Shared';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section className="pt-52 pb-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: customEase }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/50 border border-white/50 text-[10px] font-bold mb-12 text-[#2e2928]/60 uppercase tracking-[0.25em] backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            Versión beta disponible
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
          />
          <InteractiveButton
            text="Ver características"
            hoverText="Explorar funciones"
            className="w-full sm:w-auto bg-[#f6f6f7] border-2 border-[#2e2928]/5 text-[#2e2928] rounded-full font-bold text-[16px] hover:bg-white hover:border-[#2e2928]/10 shadow-sm"
          />
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6, ease: customEase }}
        className="mt-40 max-w-6xl mx-auto px-4 md:px-0"
      >
        <motion.div
          style={{
            y: springY,
            rotateX: springRotateX,
            scale: springScale
          }}
          className="perspective-1000"
        >
          <div className="bg-gradient-to-br from-gray-500/5 to-transparent p-3 rounded-[3rem] border border-[#2e2928]/5 shadow-2xl shadow-[#2e2928]/5 backdrop-blur-3xl overflow-hidden relative group">
            <div className="bg-white rounded-[2.5rem] border border-[#2e2928]/5 shadow-inner overflow-hidden aspect-[16/10] flex flex-col relative z-10">
              <div className="h-14 border-b border-gray-50 bg-gray-50/30 flex items-center px-8 gap-4 backdrop-blur-md">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400/20 border border-red-400/10"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/20 border border-yellow-400/10"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400/20 border border-green-400/10"></div>
                </div>
              </div>
              <div className="flex-1 flex overflow-hidden">
                <aside className="w-64 border-r border-gray-50 p-8 space-y-8 hidden lg:block">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className={`h-10 rounded-xl w-full ${i === 1 ? 'bg-blue-50 border border-blue-100/50 shadow-sm' : 'bg-gray-50/50 opacity-40'}`}></div>
                    ))}
                  </div>
                </aside>
                <main className="flex-1 p-10 grid grid-cols-3 gap-8 overflow-hidden">
                  <div className="col-span-3 flex items-center justify-between mb-2">
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-gray-100 rounded-full"></div>
                      <div className="h-8 w-48 bg-[#2e2928] rounded-xl"></div>
                    </div>
                  </div>
                  <div className="col-span-2 space-y-8">
                    <div className="h-60 bg-gray-50/30 rounded-[2.5rem] border border-gray-100 p-8 flex flex-col justify-between overflow-hidden relative">
                      <div className="absolute -top-10 -right-10">
                        <TrendingUp className="size-48 text-blue-500/5 rotate-12" />
                      </div>
                      <div className="flex gap-4 relative z-10 items-end">
                        {[0.4, 0.6, 0.3, 0.8, 0.5, 0.9, 0.7].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h * 100}%` }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: customEase }}
                            className="flex-1 bg-blue-500 rounded-t-xl opacity-90 shadow-lg shadow-blue-500/20"
                          ></motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 bg-gray-50/20 border border-gray-100 rounded-[2.5rem] p-8 space-y-6">
                    <div className="h-6 w-32 bg-gray-100 rounded-full mb-4"></div>
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-gray-100/50 border border-gray-100/30"></div>
                        <div className="space-y-2 flex-1">
                          <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
