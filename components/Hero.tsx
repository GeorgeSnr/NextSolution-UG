// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "For Free — No Equity"

  useEffect(() => {
    let index = 0
    let isDeleting = false
    let timeout: NodeJS.Timeout

    const type = () => {
      if (!isDeleting && index <= fullText.length) {
        setDisplayText(fullText.substring(0, index))
        index++
      } else if (isDeleting && index >= 0) {
        setDisplayText(fullText.substring(0, index))
        index--
      }

      if (index > fullText.length) {
        isDeleting = true
        timeout = setTimeout(type, 2000) // pause at full text
      } else if (index === 0 && isDeleting) {
        isDeleting = false
        timeout = setTimeout(type, 500)
      } else {
        timeout = setTimeout(type, isDeleting ? 50 : 100)
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 mt-20">
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-1 text-yellow-500 font-medium tracking-wider">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Proudly Ugandan • Backed by MTN-Uganda & Mastercard Foundation
          </span>
        </motion.div>

        {/* Hero Headline with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            We Build Your MVP
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-1 h-12 ml-2 bg-yellow-500 align-middle"
              />
            </span>
          </h1>

          {/* MVP Explanation */}
          <p className="mt-2 text-lg md:text-xl text-gray-500 font-light">
            MVP = <span className="text-yellow-500 font-medium">Minimum Viable Product</span>
            <span className="text-gray-600 ml-2">— your app, live in weeks, not years</span>
          </p>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          If your idea can transform agriculture, healthcare, education, or fintech in Uganda —
          we’ll build your entire product at zero cost & find investors for you. You keep 100% ownership.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 flex flex-col items-center gap-6"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexCkhaLbC0Iu5MQi60a9U5vncIgc7eA7K2ghTqh-fILIcWOA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold text-lg px-10 py-5 rounded-full hover:bg-yellow-400 transition-all shadow-xl hover:shadow-yellow-500/30"
          >
            Apply in 3 Minutes
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
          </a>
          <p className="text-gray-400">
            38+ Ugandan MVPs built • Next cohort opens soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}