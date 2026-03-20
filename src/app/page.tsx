"use client";

import React from 'react';
import { CustomCursor, GridBackground, mainColor, bgColor } from '@/components/landing/Shared';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

export default function ScholarLanding() {
  return (
    <div className={`min-h-screen bg-[${bgColor}] text-[${mainColor}] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 relative cursor-none`}>
      <CustomCursor />
      <GridBackground />
      <Navbar />

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}