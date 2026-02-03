'use client'

import { motion } from 'framer-motion'

interface DestinationCardProps {
  title: string
  year: string
  description: string
  details: string[]
  index: number
}

export function DestinationCard({
  title,
  year,
  description,
  details,
  index,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-2xl hover:shadow-primary/10">
        {/* Glass morphism effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-primary font-semibold tracking-widest text-sm">
                {year}
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed text-balance">
            {description}
          </p>

          <div className="space-y-3">
            {details.map((detail, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-400 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                {detail}
              </div>
            ))}
          </div>

          <button className="mt-8 px-6 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/60 font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            Explore Destination
          </button>
        </div>
      </div>
    </motion.div>
  )
}
