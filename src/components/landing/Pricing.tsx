"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Command, Sparkles, ArrowRight } from 'lucide-react';
import { Reveal, customEase, InteractiveButton } from './Shared';

export const Pricing = () => {
  return (
    <section id="precios" className="py-32 px-6 bg-[#f6f6f7] relative overflow-hidden">
      {/* Elementos de fondo decorativos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-600 text-[11px] font-bold mb-6 uppercase tracking-[0.2em]">
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-semibold text-[#2e2928] tracking-[-0.05em] leading-[0.9]">
              Un solo plan.<br />
              <span className="text-gray-400">Todo incluido.</span>
            </h2>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="w-full max-w-4xl"
        >
          <div className="bg-white rounded-[3rem] p-2 border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative group overflow-hidden">
            {/* Gradiente en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative bg-white rounded-[2.5rem] border border-gray-50/50 flex flex-col md:flex-row overflow-hidden isolate">

              {/* Columna Izquierda: Información y Precio */}
              <div className="p-10 md:p-14 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-[#2e2928] rounded-2xl flex items-center justify-center shadow-lg shadow-[#2e2928]/20">
                      <Command className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2e2928] tracking-tight">Plan Integral</h3>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Para instituciones</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl md:text-6xl font-black text-[#2e2928] tracking-tighter">Personalizado</span>
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      El volumen de tu institución define la tarifa. Sin costos ocultos, sin comisiones sorpresa. Paga por lo que realmente usas.
                    </p>
                  </div>
                </div>

                <InteractiveButton
                  text="Contactar a Ventas"
                  hoverText="Obtener Presupuesto"
                  className="w-full bg-[#2e2928] text-white rounded-2xl font-bold py-5 mt-4 shadow-xl shadow-[#2e2928]/10 group-hover:scale-[1.02] transition-transform"
                  icon={ArrowRight}
                />
              </div>

              {/* Columna Derecha: Beneficios */}
              <div className="bg-gray-50/50 p-10 md:p-14 flex-1 border-t md:border-t-0 md:border-l border-gray-100 relative z-10">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-8">¿Qué incluye el plan?</h4>

                <ul className="space-y-5">
                  {[
                    "Panel administrativo completo",
                    "Gestión de alumnos y representantes",
                    "Módulo avanzado de cobranzas",
                    "Cuenta corriente y reportes",
                    "Bot preventivo de IA",
                    "Soporte prioritario 24/7"
                  ].map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-600 font-semibold">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
