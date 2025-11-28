// components/WhyChoose.tsx
import { motion } from 'framer-motion'

const stats = [
  { value: "38+", label: "Ugandan MVPs Built" },
  { value: "100%", label: "Founder Ownership" },
  { value: "4–8", label: "Weeks to Launch" },
  { value: "5%", label: "Acceptance Rate" },
]

const testimonials = [
  { name: "Okello Denis", role: "BodaLink UG", quote: "From Gulu to raising $150K — all because BuildrHive believed in me first." },
  { name: "Akinyi Mercy", role: "MilkFlow UG", quote: "As a woman founder, they gave me a chance no one else did. Now 200+ farmers use my app." },
]

export default function WhyChoose() {
  return (
    <section className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold text-white mb-12">Built for Ugandan Founders</h2>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-bold text-yellow-500 mb-2">{stat.value}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-800/50 border border-white/10 rounded-2xl p-8"
              >
                <p className="text-gray-300 italic mb-6">“{t.quote}”</p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-yellow-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}