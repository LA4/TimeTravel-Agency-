'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder with Nebula-Clock Fusion */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient background with nebula image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/nebula-background.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-blue-950/40 to-slate-900/40" />

        {/* Nebula effect layers */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/15 rounded-full filter blur-3xl opacity-25 animate-pulse" />

        {/* Animated clock grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f5e6d3" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating clock face icon */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-primary/40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="85" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12
              const rad = (angle * Math.PI) / 180
              const x1 = 100 + 85 * Math.cos(rad)
              const y1 = 100 + 85 * Math.sin(rad)
              const x2 = 100 + 95 * Math.cos(rad)
              const y2 = 100 + 95 * Math.sin(rad)
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2" />
              )
            })}
            <line x1="100" y1="100" x2="100" y2="40" strokeWidth="3" />
            <line x1="100" y1="100" x2="120" y2="100" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-semibold tracking-[3px] text-sm mb-4 uppercase">
            Luxury Temporal Journeys
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 leading-tight text-balance"
        >
          Chronos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Step beyond the boundaries of time. Curated historical experiences crafted for the most discerning travelers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-3 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 hover:border-primary rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            Begin Your Journey
          </button>
          <button className="px-8 py-3 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.2] rounded-full font-semibold transition-all duration-300">
            View Destinations
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-primary text-sm font-semibold tracking-widest uppercase">
          Scroll to Explore
        </div>
        <svg
          className="w-5 h-5 text-primary mx-auto mt-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
