"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { customEase, InteractiveButton } from './Shared';

export const CTA = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-[#f6f6f7]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: customEase }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white rounded-[4rem] p-16 md:p-32 text-center relative border border-[#2e2928]/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        <h2 className="text-6xl md:text-[84px] font-bold text-[#2e2928] mb-12 tracking-[-0.06em] relative z-10 leading-[0.9] max-w-4xl mx-auto">
          El futuro de su gestión comienza hoy.
        </h2>

        <p className="text-gray-400 text-xl md:text-2xl font-medium mb-16 max-w-xl mx-auto leading-relaxed tracking-tight">
          Sin configuraciones complejas. Solo eficiencia pura para su institución.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <InteractiveButton
            text="Empezar ahora"
            hoverText="¡Vamos allá! →"
            className="w-full sm:w-auto bg-[#2e2928] text-white rounded-full font-bold text-lg shadow-xl shadow-black/5"
            px="px-12"
            py="py-6"
            href="https://wa.me/3435263119?text=Hola,%20estoy%20listo%20para%20empezar%20con%20Skolamy"
            target="_blank"
          />
          <InteractiveButton
            text="Agendar llamada"
            hoverText="Agendar llamada →"
            className="w-full sm:w-auto bg-white text-[#2e2928] border border-[#2e2928]/10 rounded-full font-bold text-lg hover:bg-gray-50 shadow-sm"
            px="px-12"
            py="py-6"
            href="https://wa.me/3435263119?text=Hola,%20quisiera%20agendar%20una%20llamada%20para%20conocer%20Skolamy"
            target="_blank"
          />
        </div>

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      </motion.div>
    </section>
  );
};
