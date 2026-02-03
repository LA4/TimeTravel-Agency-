'use client'

import React from "react"
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function ChronosChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }])
    } catch (error) {
      console.error('Erreur:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Désolé, une erreur est survenue. Veuillez réessayer.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-96 h-[600px] rounded-2xl backdrop-blur-xl bg-card/80 border border-white/[0.1] shadow-2xl shadow-primary/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-transparent border-b border-white/[0.1] p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-serif font-bold text-lg">
                  Boutty le Concierge
                </h3>
                <p className="text-xs text-gray-400">
                  Votre guide personnel de voyage dans le temps
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-3">⏰</div>
                    <p className="text-gray-300 text-sm">
                      Bienvenue. Comment puis-je vous aider aujourd'hui ?
                    </p>
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${message.role === 'user'
                        ? 'bg-primary/30 text-white border border-primary/50'
                        : 'bg-white/[0.05] text-gray-200 border border-white/[0.1]'
                      }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 p-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.1] p-4">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez-moi vos questions sur les voyages temporels..."
                  className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-primary/20 hover:bg-primary/30 disabled:opacity-50 text-primary border border-primary/30 rounded-lg text-sm font-semibold transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Float Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/40 flex items-center justify-center text-white text-2xl hover:shadow-xl hover:shadow-primary/60 transition-shadow"
      >
        {isOpen ? '×' : '💬'}
      </motion.button>
    </div>
  )
}