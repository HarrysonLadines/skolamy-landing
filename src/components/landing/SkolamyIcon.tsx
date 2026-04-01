"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const SkolamyIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Cuerpo */}
    <rect
      x="0" y="0" width="100" height="100"
      rx="30"
      fill="#2563eb"
    />
    {/* Ojito Izquierdo */}
    <motion.circle
      cx="35" cy="45" r="8"
      fill="white"
      animate={{ scaleY: [1, 0.1, 1] }}
      transition={{ repeat: Infinity, duration: 3, times: [0, 0.1, 0.2], delay: 1 }}
    />
    {/* Ojito Derecho */}
    <motion.circle
      cx="65" cy="45" r="8"
      fill="white"
      animate={{ scaleY: [1, 0.1, 1] }}
      transition={{ repeat: Infinity, duration: 3, times: [0, 0.1, 0.2], delay: 1.1 }}
    />
    {/* Sonrisa */}
    <path
      d="M40 70Q50 75 60 70"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);
