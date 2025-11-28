// components/HowItWorks.tsx

"use client"
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  { title: "Apply with your idea", desc: "3-minute form. Tell us your vision and why Uganda needs it." },
  { title: "We review in 48 hours", desc: "Our team of Ugandan tech leaders selects the strongest ideas." },
  { title: "We build your MVP — free", desc: "Full design, development, and launch in 4–8 weeks." },
  { title: "Get funded faster", desc: "Warm intros to Innovation Village, UNCDF, GrowthAfrica, and more." },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From idea to investor-ready product — in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-yellow-500/30 transition-all"
            >
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-yellow-500">{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}