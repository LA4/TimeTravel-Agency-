'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { DestinationCard } from './destination-card'
import { useState } from 'react'

const destinations = [
  {
    title: ' Paris 1889 ',
    year: 'Exposition Universelle & Belle Époque',
    imageUrl: './img/paris1889.jpg', // Placeholder - user to update
    description:
      'Experience the zenith of imperial grandeur. Witness gladiatorial spectacles in the Colosseum, attend exclusive gatherings in marble palaces, and navigate the vibrant Forum where politics and philosophy intertwine.',
    details: [
      'Exclusive Colosseum viewing',
      'Imperial palace access',
      'Symposium dinners',
      'Forum guided expeditions',
    ],
  },
  {
    title: 'Crétacé -65M années',
    year: 'Derniers jours des dinosaures',
    description:
      'Immerse yourself in an era of unparalleled elegance. Attend grand balls, explore intellectually stimulating salons, and experience the height of British sophistication during Queen Victoria\'s golden jubilee.',
    details: [
      'Grand ballroom galas',
      'West End theatre nights',
      'Botanical garden tours',
      'Private library access',
    ],
    imageUrl: './img/cretace.jpg', // Placeholder
  },
  {
    title: 'Renaissance Florence 1504 ',
    year: 'Âge d’or artistique',
    description:
      'Venture into a dazzling future metropolis. Navigate neon-soaked streets, experience cutting-edge technology, and immerse yourself in a culture that seamlessly blends tradition with advancement.',
    details: [
      'Rooftop skyline tours',
      'Cyberpunk district exploration',
      'Tech showcase events',
      'Fusion cuisine experiences',
    ],
    imageUrl: './img/Renaissance Florence 1504.jpg', // Placeholder
  },
]

export function DestinationsSection() {
  const [activeBackground, setActiveBackground] = useState<string | null>('/img/paris1889.jpg')

  return (
    <section id="destinations" className="relative py-24 px-6 bg-background overflow-hidden transition-all duration-700">
      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        {activeBackground && (
          <motion.div
            key={activeBackground}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${activeBackground})` }}
          />
        )}
      </AnimatePresence>

      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-[3px] text-sm mb-4 uppercase">
            Curated Experiences
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Our Signature Destinations
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each destination has been meticulously curated to provide unforgettable encounters with history's most captivating moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              index={index}
              onClick={(img) => setActiveBackground(img)}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
    </section>
  )
}
