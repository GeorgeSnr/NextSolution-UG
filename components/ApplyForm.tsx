// components/ApplyForm.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useState } from 'react'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSexCkhaLbC0Iu5MQi60a9U5vncIgc7eA7K2ghTqh-fILIcWOA/viewform'

export default function ApplyForm() {
  const [isOpening, setIsOpening] = useState(false)

  const handleApply = () => {
    setIsOpening(true)
    window.open(FORM_URL, '_blank', 'noopener,noreferrer')
    setTimeout(() => setIsOpening(false), 2000)
  }

  return (
    <section id="apply" className="relative py-10 px-6 bg-slate-950 overflow-hidden">
      {/* Subtle background glows — Ugandan colors, very soft */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 text-yellow-500 font-medium tracking-wider mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Made for Ugandan founders — by Ugandans
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Your MVP.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Built for Free.
            </span>
          </h2>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            If your idea can improve agriculture, healthcare, education, or financial access in Uganda — 
            we’ll build your full product at <span className="text-yellow-500 font-medium">zero cost</span> and 
            <span className="text-yellow-500 font-medium"> zero equity taken</span>.
          </p>
        </motion.div>

        {/* Main CTA — Clean & Powerful */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={handleApply}
            disabled={isOpening}
            className="group relative inline-flex items-center gap-5 bg-yellow-500 text-black font-semibold text-lg md:text-xl px-12 py-6 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-500/30 disabled:opacity-80 disabled:cursor-not-allowed"
          >
            <span className="relative flex items-center gap-5">
              {isOpening ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Opening Application...
                </>
              ) : (
                <>
                  Apply in 3 Minutes
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
                </>
              )}
            </span>
          </button>

          {/* Subtle badge */}
          <div className="mt-6 inline-flex items-center gap-4 text-sm text-gray-400 font-medium">
            <span className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-full">
              100% Free
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-full">
              No Equity Taken
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-full">
              Ugandan Founders Only
            </span>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm md:text-base"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Applications reviewed by Ugandan tech leaders
          </span>
          <span>•</span>
          <span>Backed by Innovation Village & Hive Colab alumni</span>
          <span>•</span>
          <span>Founders from 18+ districts already accepted</span>
        </motion.div>

        {/* Final urgency — subtle but effective */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-yellow-500 font-medium text-lg"
        >
          Only a few spots left this month
        </motion.p>
      </div>
    </section>
  )
}