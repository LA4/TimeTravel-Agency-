'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { BookingForm } from './booking-form'

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
  const [isBooking, setIsBooking] = useState(false)
  const [reservationSuccess, setReservationSuccess] = useState(false)

  // Reset state when closing
  const handleClose = () => {
    setIsBooking(false)
    setReservationSuccess(false)
    if (onClose) onClose()
  }

  // If active, render the expanded modal card
  if (isActive) {
    return (
      <motion.div
        layoutId={`card-${title}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <motion.div
          className="relative w-full max-w-2xl backdrop-blur-3xl bg-white/5 border border-white/20 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Liquid glass reflection effect */}
          <div className="absolute -inset-[100%] top-0 block h-[200%] w-[100%] -rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-md pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="p-8 md:p-12 bg-black/90 min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {reservationSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400 border border-green-500/50">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">Demande Reçue</h3>
                  <p className="text-gray-300 mb-8 max-w-md mx-auto">
                    Votre demande de réservation pour <span className="text-primary">{title}</span> a bien été enregistrée. Nos agents temporels vous contacteront sous peu.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all font-semibold"
                  >
                    Fermer
                  </button>
                </motion.div>
              ) : isBooking ? (
                <BookingForm
                  key="form"
                  destinationTitle={title}
                  onCancel={() => setIsBooking(false)}
                  onSuccess={() => setReservationSuccess(true)}
                />
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
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
                    onClick={() => setIsBooking(true)}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-black font-bold transition-colors"
                  >
                    Réserver cette Époque
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
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
