"use client";

import React from 'react';
import { SkolamyIcon } from './SkolamyIcon';

export const Footer = () => {
  return (
    <footer className="py-24 border-t border-[#2e2928]/5 bg-[#f6f6f7] relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 p-1.5 flex items-center justify-center">
                <SkolamyIcon />
              </div>
            </div>
            <span className="font-extrabold tracking-tighter text-2xl text-[#2e2928]">Skolamy</span>
          </div>
          <p className="text-gray-400 text-lg font-medium  leading-relaxed">Elevando el estándar global de la educación moderna.</p>
        </div>

        <p className="text-[12px] font-black text-gray-300 uppercase tracking-[0.3em]">
          © 2026 Skolamy
        </p>
      </div>
    </footer>
  );
};
