"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, Receipt, TrendingUp, MessageCircle, MapPin, Globe } from 'lucide-react';
import { Reveal, customEase, bgColor } from './Shared';

export const Features = () => {
  return (
    <section className={`py-24 px-6 bg-[${bgColor}]`}>
      <div className="max-w-7xl mx-auto">
        <Reveal delay={0.1}>
          <h2 className="text-6xl md:text-8xl font-semibold text-[#2e2928] mb-8 tracking-[-0.06em] leading-[0.85]">
            Potencia sin <br /> complicaciones.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl font-medium mb-20 tracking-tight leading-relaxed">
            Cada detalle ha sido diseñado para la velocidad y la claridad operativa.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">

          {/* Feature 1: Cobros Smart & Conciliación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: customEase }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white rounded-[3.5rem] p-12 flex flex-col justify-between border border-gray-100 group hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] transition-all duration-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="max-w-xs">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors duration-500">
                  <CheckCircle className="text-blue-600 size-8 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-4xl font-bold tracking-tighter mb-6 text-[#2e2928]">Cobros <span className="text-blue-600">Smart</span></h3>
                <p className="text-gray-400 font-medium leading-relaxed text-lg mb-8">
                  Cero conciliaciones manuales. El sistema sabe exactamente quién pagó qué.
                </p>
              </div>

              {/* Visual: Smart Match Animation */}
              <div className="flex-1 w-full bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100 group-hover:bg-white transition-colors duration-500 relative overflow-hidden h-64 flex flex-col justify-center items-center">
                <motion.div 
                  animate={{ x: [0, 40, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-10 p-3 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center gap-3"
                >
                  <div className="size-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <CreditCard className="size-4 text-green-600" />
                  </div>
                  <span className="text-xs font-bold text-gray-500">Transferencia #829</span>
                </motion.div>

                <motion.div 
                  animate={{ x: [0, -40, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 right-10 p-3 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center gap-3"
                >
                  <div className="size-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Receipt className="size-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-bold text-gray-500">Deuda: Matrícula 2026</span>
                </motion.div>

                <motion.div
                  animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="z-10 bg-blue-600 text-white p-4 rounded-full shadow-xl shadow-blue-200"
                >
                  <CheckCircle className="size-8" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Análisis Predictivo de Deuda */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: customEase }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-[#2e2928] rounded-[3.5rem] p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-[#2e2928]/10"
          >
            <div className="z-10">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 backdrop-blur-md">
                <TrendingUp className="text-[#f6f6f7] size-7" />
              </div>
              <h3 className="text-4xl font-bold tracking-tighter mb-6 text-[#f6f6f7]">Predictivo Deuda</h3>
              <p className="text-gray-400 font-medium leading-relaxed text-xl">
                Anticípate a la morosidad antes de que ocurra con proyecciones de flujo de caja.
              </p>
            </div>
            
            {/* Visual: Mini Projections Chart */}
            <div className="mt-12 flex items-end gap-2 h-32">
              {[40, 60, 45, 80, 55, 75, 90].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`flex-1 rounded-t-lg ${i > 4 ? 'bg-blue-500/40 border-t-2 border-dashed border-blue-400' : 'bg-blue-500'}`}
                />
              ))}
            </div>
            
            <div className="absolute top-0 right-0 p-12">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
            </div>
          </motion.div>

          {/* Feature 3: WhatsApp Bot con IA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: customEase }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white rounded-[3rem] p-12 flex flex-col border border-gray-100 group hover:bg-gray-50/50 transition-all duration-700"
          >
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 border border-green-100 group-hover:scale-110 transition-transform">
              <MessageCircle className="text-green-600 size-7" />
            </div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4 text-[#2e2928]">WhatsApp Bot IA</h3>
            <p className="text-gray-400 font-medium text-lg leading-snug mb-8">
              Tu secretaria 24/7 en el bolsillo de cada representante.
            </p>

            {/* Visual: Chat Simulation */}
            <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm ml-auto max-w-[80%] border border-gray-100">
                <p className="text-[10px] font-bold text-[#2e2928]">¿Cuál es mi saldo actual?</p>
              </div>
              <div className="bg-green-500 p-3 rounded-2xl rounded-tl-none shadow-sm mr-auto max-w-[80%]">
                <p className="text-[10px] font-bold text-white">¡Hola! Tu saldo al día de hoy es de $150. ¿Deseas el link de pago?</p>
              </div>
            </div>
          </motion.div>

          {/* Feature 4: Expediente Georeferenciado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: customEase }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-blue-600 rounded-[3.5rem] p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group shadow-2xl shadow-blue-600/10"
          >
            <div className="md:flex-1 z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20 backdrop-blur-md">
                <MapPin className="text-white size-7" />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter mb-4 text-white">Georeferenciación</h3>
              <p className="text-blue-100 font-medium text-xl leading-relaxed">
                Conoce dónde están tus alumnos, optimiza tus rutas de transporte y campañas.
              </p>
            </div>

            {/* Visual: Map Mockup with Dots */}
            <div className="w-full md:w-80 bg-white/10 backdrop-blur-2xl border border-white/20 p-2 rounded-[2.5rem] group-hover:scale-105 transition-transform duration-700 relative h-48 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <Globe className="w-full h-full text-white" />
              </div>
              {/* Student Density Dots */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="absolute size-3 bg-white rounded-full shadow-lg shadow-white/50"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`
                  }}
                >
                  <div className="absolute inset-0 animate-ping rounded-full bg-white opacity-40"></div>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/50 to-transparent pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
