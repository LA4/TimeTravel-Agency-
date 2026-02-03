'use client'

import { motion } from 'framer-motion'

interface DestinationCardProps {
  title: string
  year: string
  description: string
  details: string[]
  index: number
  imageUrl: string
  isActive?: boolean
  onClick: (imageUrl: string) => void
  onClose?: () => void
}

export function DestinationCard({
  title,
  year,
  description,
  details,
  index,
  imageUrl,
  isActive = false,
  onClick,
  onClose,
}: DestinationCardProps) {
  // If active, render the expanded modal card
  if (isActive) {
    return (
      <motion.div
        layoutId={`card-${title}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-2xl backdrop-blur-3xl bg-white/5 border border-white/20 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Liquid glass reflection effect */}
          <div className="absolute -inset-[100%] top-0 block h-[200%] w-[100%] -rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-md pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="p-8 md:p-12 bg-black/90">
            <motion.h3
              layoutId={`title-${title}`}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
            >
              {title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold tracking-widest text-sm mb-6 uppercase"
            >
              {year}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 mb-8 leading-relaxed text-lg"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {details.map((detail, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  {detail}
                </div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-black font-bold transition-colors"
            >
              Réserver cette Époque
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Default compact card
  return (
    <motion.div
      layoutId={`card-${title}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group cursor-pointer relative"
      onClick={() => onClick(imageUrl)}
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] hover:border-primary/50 transition-all duration-500 p-8 h-full flex flex-col items-center justify-center text-center hover:bg-white/[0.1]">
        <motion.h3
          layoutId={`title-${title}`}
          className="text-3xl font-serif font-bold text-white group-hover:scale-105 transition-transform duration-300"
        >
          {title}
        </motion.h3>
        <p className="mt-2 text-primary/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
          Cliquez pour Explorer
        </p>
      </div>
    </motion.div>
  )
}
