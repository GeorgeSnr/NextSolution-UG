// components/WhyChoose.tsx
'use client'

import { motion } from 'framer-motion'
import { Users, Award, Zap, Star } from 'lucide-react'

const stats = [
  { value: '38+', label: 'Ugandan MVPs Built', icon: Users },
  { value: '100%', label: 'You Keep Full Ownership', icon: Award },
  { value: '4–8', label: 'Weeks to Launch', icon: Zap },
]

const testimonials = [
  {
    quote: "I came from Gulu with just an idea for a boda app. NextSolution UG built it for free. Today it’s live in 7 districts and we raised $150K.",
    author: "Okello Denis",
    role: "BodaLink UG • Gulu",
  },
  {
    quote: "As a woman founder in Mbarara, no one believed in me. NextSolution UG did. Now my dairy app serves 200+ farmers and we’re funded.",
    author: "Akinyi Mercy",
    role: "MilkFlow UG • Raised $85K",
  },
  {
    quote: "I’m a teacher from Mbale with zero tech skills. They built my EduTech platform. Now 42 schools use it. Uganda is rising.",
    author: "Wanyama Isaac",
    role: "SmartClass UG • Mbale",
  },
  {
    quote: "From a village in Arua with no electricity — to a solar app used by 200+ homes. NextSolution UG believed in me first.",
    author: "Fatuma Amina",
    role: "SolarWatch UG • Arua",
  },
]

export default function WhyChoose() {
  return (
    <section className="py-10 px-6 bg-slate-950">
      {/* Subtle ambient glows — Ugandan soul, barely visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 text-yellow-500 font-medium tracking-wider mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Built for Ugandan founders, by Ugandans
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Why Founders
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Choose NextSolution UG
            </span>
          </h2>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We don’t just build products. We build <span className="text-yellow-500 font-medium">Ugandan futures</span> — 
            from villages to global stages.
          </p>
        </motion.div>

        {/* Stats — Clean & Powerful */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-yellow-500/10 to-transparent flex items-center justify-center border border-white/10">
                  <Icon className="w-10 h-10 text-yellow-500" />
                </div>
                <div className="text-6xl md:text-7xl font-black text-white mb-3">
                  {stat.value}
                </div>
                <p className="text-xl text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials — Emotional & Real */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-yellow-500/20 transition-all duration-500"
            >
              <Star className="w-6 h-6 text-yellow-500 mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                “{t.quote}”
              </p>
              <div>
                <p className="font-semibold text-white text-lg">{t.author}</p>
                <p className="text-yellow-500 font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Emotional Close */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24"
        >
          <p className="text-2xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-relaxed">
            Your village. Your idea. Your future.
          </p>
          <p className="mt-6 text-xl text-gray-400">
            NextSolution UG exists for <span className="text-yellow-500 font-medium">one reason</span>: 
            to help the next generation of Ugandan founders win.
          </p>
        </motion.div>
      </div>
    </section>
  )
}