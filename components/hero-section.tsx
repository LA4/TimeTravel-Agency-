'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';

const PLAYLIST = [
  '/video/Teaser_Rencontre_Romantique_Année_.mp4',
  '/video/Vidéo_promotionnelle_Florence_en_secondes.mp4',
  '/video/Cinematic_Video_Generation_Cretace.mp4',
];

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Reload the video element to ensure the new source is picked up
      video.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % PLAYLIST.length);
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder with Nebula-Clock Fusion */}

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-1000"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
      >
        <source src={PLAYLIST[currentVideoIndex]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-blue-950/30 to-slate-900/40" />

      {/* Nebula effect layers */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/15 rounded-full filter blur-3xl opacity-25 animate-pulse" /> */}




      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Liquid glass reflection effect */}
          <div className="absolute -inset-[100%] top-0 block h-[200%] w-[100%] -rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-semibold tracking-[3px] text-sm mb-4 uppercase drop-shadow-sm">
              Votre voyage personnalisé
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg"
          >
            Time Travel Agency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Votre voyage personnalisé. Curated historical experiences crafted for the most discerning travelers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#destinations"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-block"
            >
              View Destinations
            </a>
          </motion.div>
        </div>
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
