"use client";

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Sparkles,
  ChevronRight,
  TrendingUp,
  Users,
  CreditCard,
  LayoutDashboard,
  UserCheck,
  FileText,
  Bell,
  Settings,
  LogOut,
  Search,
  Plus,
  Send,
  History,
  GraduationCap,
  Calendar,
  Command,
  ArrowUpRight,
  Clock,
  AlertCircle,
  MoreVertical,
  MessageSquare
} from 'lucide-react';
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
          {/* Main Dashboard Container */}
          <div className="bg-[#f8fafc]/50 p-2 md:p-4 rounded-[3rem] border border-[#2e2928]/5 shadow-2xl backdrop-blur-3xl overflow-hidden relative group">
            <div className="bg-[#f8fafc] rounded-[2.5rem] border border-[#2e2928]/5 shadow-inner overflow-hidden aspect-[16/10] flex relative z-10 font-sans">

              <aside className="w-64 border-r border-gray-100 bg-white p-6 flex flex-col hidden lg:flex">
                <div className="flex items-center gap-3 mb-10 px-2 transition-transform hover:scale-105">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    <LayoutDashboard size={18} />
                  </div>
                  <span className="font-extrabold tracking-tighter text-xl text-[#2e2928]">SKOLAMY</span>
                </div>

                <nav className="space-y-1 mb-auto">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-3">Menú Principal</p>
                  {[
                    { icon: LayoutDashboard, label: "Panel", active: true },
                    { icon: Users, label: "Alumnos" },
                    { icon: UserCheck, label: "Representantes" },
                    { icon: CreditCard, label: "Pagos" },
                    { icon: FileText, label: "Cargos" },
                    { icon: Send, label: "Enviar notificaciones" },
                    { icon: Settings, label: "Configuración" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-indigo-50 text-indigo-600 font-bold shadow-sm' : 'text-gray-400 hover:bg-gray-50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={18} />
                        <span className="text-sm">{item.label}</span>
                      </div>
                      {item.active && <div className="w-1 h-3 bg-indigo-500 rounded-full" />}
                    </div>
                  ))}
                </nav>

                <div className="pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
                    <LogOut size={18} />
                    <span className="text-sm font-semibold">Cerrar Sesión</span>
                  </div>
                </div>
              </aside>

              {/* Main Area */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white/50 border-b border-gray-100 flex items-center justify-between px-10 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Bienvenido de nuevo, Admin
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex gap-4 text-gray-400">
                      <Search size={18} className="cursor-pointer hover:text-indigo-600 transition-colors" />
                      <div className="relative cursor-pointer hover:scale-110 transition-transform">
                        <Bell size={18} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pl-6 border-l border-gray-100 text-right cursor-default">
                      <div>
                        <p className="text-[11px] font-bold text-[#2e2928]">Don Harry</p>
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Director</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center bg-indigo-100 text-indigo-500 text-[10px] font-bold">
                        DH
                      </div>
                    </div>
                  </div>
                </header>

                <main className="flex-1 p-8 overflow-y-auto space-y-8 bg-[#f8fafc]/30 custom-scrollbar transform-gpu">
                  {/* Hero Dashboard Section */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-extrabold tracking-tight text-[#2e2928]">¡Buenas noches, <span className="text-indigo-600">Don Harry</span>!</h2>
                      <p className="text-[11px] font-semibold text-gray-400">Sábado, 21 de Marzo • <span className="text-indigo-400">Skolamy Control Panel</span></p>
                    </div>
                    <div className="px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-sm flex items-center gap-3 transition-transform hover:scale-105 cursor-default">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Estado del Sistema</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <p className="text-[10px] font-bold text-green-600">Operativo</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                    {[
                      { label: "Alumnos Activos", value: "145", icon: Users, color: "emerald", bg: "bg-emerald-500" },
                      { label: "Representantes", value: "110", icon: UserCheck, color: "indigo", bg: "bg-indigo-500" },
                      { label: "Cargos Pendientes", value: "32", icon: FileText, color: "slate", bg: "bg-slate-300" },
                      { label: "Pagos (Mes)", value: "85", icon: CreditCard, color: "emerald", bg: "bg-emerald-500" },
                      { label: "Deuda Global", value: "$ 110.428", icon: ArrowUpRight, color: "rose", bg: "bg-rose-500", highlight: true },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white p-5 rounded-[2rem] border border-gray-50 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 group transform-gpu">
                        <div className="flex justify-between items-start mb-4">
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest max-w-[80px] leading-tight">{stat.label}</p>
                          <div className={`w-8 h-8 ${stat.bg} rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12`}>
                            <stat.icon size={16} />
                          </div>
                        </div>
                        <h4 className={`text-2xl font-black tracking-tighter ${stat.highlight ? 'text-indigo-950' : 'text-[#2e2928]'}`}>{stat.value}</h4>
                      </div>
                    ))}
                  </div>

                  {/* Body Content: Grid Layout */}
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                    {/* Quick Actions Column */}
                    <div className="xl:col-span-8 space-y-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-[#2e2928] tracking-tight">Acciones Rápidas</h3>
                        <p className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em] cursor-pointer hover:underline">Ver Todas</p>
                      </div>

                      <div className="grid grid-cols-2 gap-5">
                        {[
                          { label: "Registrar Alumno", icon: Users, color: "bg-indigo-500" },
                          { label: "Registrar Pago", icon: CreditCard, color: "bg-emerald-500" },
                          { icon: Send, label: "Enviar Notificación", color: "bg-orange-500" },
                          { icon: History, label: "Generar Reporte", color: "bg-indigo-600" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 transition-all hover:shadow-indigo-100 hover:shadow-xl hover:scale-[1.02] group cursor-pointer transform-gpu"
                          >
                            <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform`}>
                              <item.icon size={20} />
                            </div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                          </div>
                        ))}
                      </div>

                      <button className="w-full py-5 rounded-[2rem] border-2 border-indigo-500/10 border-dashed text-indigo-600 font-bold text-[11px] uppercase tracking-widest hover:bg-indigo-50/50 transition-colors flex items-center justify-center gap-2 transform-gpu">
                        <Plus size={14} /> Personalizar Panel
                      </button>

                      <div className="bg-white p-8 rounded-[3rem] border border-gray-50 shadow-sm space-y-8 relative overflow-hidden group">
                        <div className="flex items-center justify-between relative z-10">
                          <div>
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Análisis de Ingresos</p>
                            <h3 className="text-xl font-bold text-[#2e2928] tracking-tight">Recaudación Semanal</h3>
                          </div>
                          <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                            <TrendingUp size={18} />
                          </div>
                        </div>

                        <div className="h-40 flex items-end gap-3 relative z-10 transform-gpu">
                          {[0.4, 0.6, 0.3, 0.8, 0.5, 0.9, 0.7, 0.85, 0.65, 0.75, 0.55, 0.8, 0.95, 0.7, 0.6, 0.8].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.03, ease: "easeOut" }}
                              className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity transform-gpu"
                            />
                          ))}
                          {/* SVG Line path approximation for look and feel */}
                          <svg className="absolute inset-x-0 bottom-0 h-full w-full pointer-events-none opacity-10" preserveAspectRatio="none">
                            <path d="M0 160 Q 200 40, 400 120 T 800 60 T 1200 80 V 160 H 0 Z" fill="url(#purpleGradient)" />
                            <defs>
                              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
                                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity Column */}
                    <div className="xl:col-span-4 bg-white/70 backdrop-blur-md rounded-[3rem] border border-gray-50 shadow-lg p-8 space-y-8 h-full">
                      <div className="space-y-4">
                        <p className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em]">Monitor de Eventos</p>
                        <h3 className="text-2xl font-bold text-[#2e2928] tracking-tight">Actividad Reciente</h3>
                      </div>

                      <div className="space-y-6">
                        {[
                          { name: "Maria Garcia", desc: "$ 45.00", time: "HACE 5 MIN", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-50" },
                          { name: "Juan Perez", desc: "Nuevo Alumno", time: "HACE 2 HORAS", icon: Users, color: "text-indigo-500", bg: "bg-indigo-50" },
                          { name: "Sistema", desc: "Respaldo completado", time: "HACE 4 HORAS", icon: History, color: "text-indigo-600", bg: "bg-indigo-50" },
                          { name: "Luis Gomez", desc: "Cuota vencida", time: "HOY, 08:00", icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-50" },
                          { name: "Ana Lopez", desc: "$ 120.00", time: "AYER", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-50" },
                        ].map((e, i) => (
                          <div key={i} className="flex items-center justify-between group cursor-pointer transition-all hover:translate-x-1 transform-gpu">
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 ${e.bg} rounded-full flex items-center justify-center ${e.color} shadow-sm transition-transform group-hover:scale-110`}>
                                <e.icon size={16} />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-[#2e2928]">{e.name}</p>
                                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-tighter">{e.desc}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <div className="flex items-center gap-1.5 text-[8px] font-black text-gray-300">
                                <Clock size={10} /> {e.time}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="w-full py-4 rounded-3xl bg-gray-50 text-gray-400 font-bold text-[9px] uppercase tracking-widest hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-transparent hover:border-indigo-100 transform-gpu">
                        Ver Historial Completo
                      </button>
                    </div>
                  </div>
                </main>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-10 right-10 px-4 py-3 bg-[#2e2928] rounded-2xl flex items-center gap-2 text-white shadow-2xl z-20 cursor-pointer shadow-indigo-500/10 transform-gpu"
              >
                <div className="relative">
                  <MessageSquare size={18} fill="currentColor" className="text-white/20" />
                  <Sparkles size={10} className="absolute -top-1 -right-1 text-blue-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Asistente IA</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
