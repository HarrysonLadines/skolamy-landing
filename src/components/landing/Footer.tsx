"use client";

import React from 'react';
import { Command } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-24 border-t border-[#2e2928]/5 bg-[#f6f6f7] relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2e2928] rounded-xl flex items-center justify-center shadow-lg shadow-[#2e2928]/10">
              <Command className="h-6 w-6 text-white" />
            </div>
            <span className="font-extrabold tracking-tighter text-2xl text-[#2e2928]">Skolamy</span>
          </div>
          <p className="text-gray-400 text-lg font-medium max-w-xs leading-relaxed">Elevando el estándar global de la educación moderna.</p>
        </div>

        <div className="flex flex-wrap gap-12 text-[12px] font-black text-gray-400 uppercase tracking-[0.3em]">
          <span className="hover:text-[#2e2928] transition-colors">Privacidad</span>
          <span className="hover:text-[#2e2928] transition-colors">Seguridad</span>
          <span className="hover:text-[#2e2928] transition-colors">Términos</span>
        </div>

        <p className="text-[12px] font-black text-gray-300 uppercase tracking-[0.3em]">
          © 2026 Skolamy
        </p>
      </div>
    </footer>
  );
};
