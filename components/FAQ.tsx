// components/FAQ.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Is the MVP really free? Any hidden fees?",
    answer: "Yes — 100% free. No equity taken, no fees, no future obligations. You own everything: code, design, IP, and revenue.",
  },
  {
    question: "How do you select which ideas to build?",
    answer: "We review every application within 48 hours. We accept only ideas with strong potential to solve real Ugandan problems in agriculture, health, education, fintech, logistics, or energy. Acceptance rate is ~5%.",
  },
  {
    question: "Do I need to be in Kampala?",
    answer: "Not at all. We’ve accepted founders from Gulu, Mbale, Mbarara, Arua, Fort Portal, Jinja, and beyond. As long as you have a strong idea and internet access, you qualify.",
  },
  {
    question: "Do I need to be technical?",
    answer: "No. Most accepted founders are non-technical: teachers, farmers, doctors, business owners. You bring the vision — we are the full technical team.",
  },
  {
    question: "What kind of startups do you support?",
    answer: "Any idea that can meaningfully improve life in Uganda — AgriTech, HealthTech, EduTech, FinTech, solar, water, logistics, mobile money tools, etc. If it helps Ugandans, we want to build it.",
  },
  {
    question: "What happens after the MVP is launched?",
    answer: "We help you pitch to top investors: Innovation Village, Hive Colab, Outbox, UNCDF, XL Africa, GrowthAfrica, and global VCs. Many alumni raise $25K–$500K within 6 months.",
  },
  {
    question: "Can I apply in Luganda, Swahili, or local languages?",
    answer: "Yes! We accept applications in English, Luganda, Swahili, Runyankole, Acholi, and other languages. Write in the language you’re most comfortable with.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="pb-6 pt-2 px-6 bg-slate-950">
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 text-yellow-500 font-medium tracking-wider mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Frequently Asked Questions
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything Ugandan founders ask us — answered clearly.
          </p>
        </motion.div>

        {/* Clean Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-medium text-white pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-4 border-t border-white/10">
                      <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-400">
            Still not sure? <span className="text-yellow-500 font-medium">Just apply — it takes 3 minutes and costs nothing.</span>
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexCkhaLbC0Iu5MQi60a9U5vncIgc7eA7K2ghTqh-fILIcWOA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 bg-yellow-500 text-black font-medium px-8 py-4 rounded-full hover:bg-yellow-400 transition"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}