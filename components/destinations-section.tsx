'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { DestinationCard } from './destination-card'
import { useState } from 'react'
import { KNOWLEDGE_BASE } from '@/app/api/chat/knowledge-base'

// Mapping des images pour chaque destination
// Mapping des images pour chaque destination
const destinationImages: Record<string, string> = {
  'Paris 1889': '/img/paris1889.png',
  'Crétacé -65M': '/img/cretace.png',
  'Florence 1504': '/img/Renaissance Florence 1504 .png',
}

// Construire les destinations à partir de la base de connaissances centralisée
const destinations = Object.entries(KNOWLEDGE_BASE.destinations).map(([name, data]) => ({
  title: name,
  year: data.period,
  imageUrl: destinationImages[name] || '/img/default.jpg',
  description: data.description,
  details: data.activities,
}))

export function DestinationsSection() {
  const [activeBackground, setActiveBackground] = useState<string | null>('/img/paris1889.png')
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null)

  return (
    <section id="destinations" className="relative py-24 px-6 bg-background overflow-hidden transition-all duration-700 h-screen">
      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        {activeBackground && (
          <motion.div
            key={activeBackground}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${activeBackground}")` }}
          />
        )}
      </AnimatePresence>

      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0 pointer-events-none opacity-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-[3px] text-sm mb-4 uppercase">
            Expériences Uniques
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Nos Destinations Signatures
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Chaque destination a été méticuleusement sélectionnée pour offrir des rencontres inoubliables avec les moments les plus captivants de l'histoire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              index={index}
              imageUrl={destination.imageUrl}
              onClick={(img) => {
                setActiveBackground(img)
                setSelectedDestination(destination)
              }}
            />
          ))}
        </div>

        {/* Modal Overlay for Selected Card */}
        <AnimatePresence>
          {selectedDestination && (
            <DestinationCard
              {...selectedDestination}
              index={0}
              imageUrl={selectedDestination.imageUrl}
              isActive={true}
              onClick={() => { }} // No-op for the modal itself
              onClose={() => setSelectedDestination(null)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
    </section>
  )
}
