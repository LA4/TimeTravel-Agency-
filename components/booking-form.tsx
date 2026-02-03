'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BookingFormProps {
    destinationTitle: string
    onCancel: () => void
    onSuccess: () => void
}

export function BookingForm({ destinationTitle, onCancel, onSuccess }: BookingFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        onSuccess()
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
        >
            <h3 className="text-3xl font-serif font-bold text-white mb-2">
                Réserver votre Voyage
            </h3>
            <p className="text-primary/80 text-sm mb-6 uppercase tracking-wider">
                Destination : {destinationTitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Nom Complet</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.1] transition-all"
                            placeholder="Jules Verne"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.1] transition-all"
                            placeholder="jules@chronos.time"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Date de Départ</label>
                        <input
                            type="date"
                            required
                            className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.1] transition-all [color-scheme:dark]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Voyageurs</label>
                        <select
                            className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.1] transition-all"
                        >
                            <option value="1" className="bg-slate-900">1 Voyageur</option>
                            <option value="2" className="bg-slate-900">2 Voyageurs</option>
                            <option value="3" className="bg-slate-900">3 Voyageurs</option>
                            <option value="4" className="bg-slate-900">4+ Voyageurs</option>
                        </select>
                    </div>
                </div>

                <div className="pt-4 flex gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors font-medium"
                        disabled={isSubmitting}
                    >
                        Retour
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-black font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                Traitement...
                            </>
                        ) : (
                            'Confirmer la demande'
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    )
}
