// app/thank-you-investor/page.tsx   (or pages/thank-you-investor.tsx)
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail, Flag } from 'lucide-react'
import Link from 'next/link'

export default function ThankYouInvestor() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-20">
      {/* Subtle background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <CheckCircle2 className="w-24 h-24 md:w-32 md:h-32 text-yellow-500 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Thank You for Joining
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">
            Uganda’s Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-12"
        >
          Your registration has been received. We’ll be in touch within 48 hours with our latest deal flow, 
          pitch decks, and exclusive founder introductions from across Uganda.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-4 bg-yellow-500 text-black font-semibold text-lg px-10 py-5 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-500/30"
          >
            Return to Home
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
          </Link>

          <a
            href="mailto:investors@buildrhive.ug"
            className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition"
          >
            <Mail className="w-5 h-5" />
            investors@nextsolution.ug
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-20 flex items-center justify-center gap-4 text-gray-500"
        >
          <Flag className="w-8 h-8 text-yellow-500" />
          <p className="text-lg">
            Proudly building the next generation of Ugandan unicorns — <strong>one free MVP at a time</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}