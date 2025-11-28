// components/ForInvestors.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Globe, ArrowBigDown, ArrowDown } from 'lucide-react'

export default function ForInvestors() {
  return (
    <section id="for-investors" className="py-8 px-6 bg-slate-950 relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-600/5 rounded-full blur-3xl" />
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
            <TrendingUp className="w-5 h-5" />
            For Investors & Funders
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Invest in the Next
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">
              Ugandan Unicorn
            </span>
          </h2>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We’re building Uganda’s strongest pipeline of tech startups — in AgriTech, FinTech, HealthTech, Logistics, and more. Many are already generating revenue and ready for seed investment.
          </p>
        </motion.div>

        {/* Investor Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {[
            { icon: Users, value: '38+', label: 'Startups in Pipeline' },
            { icon: TrendingUp, value: '$2.3M+', label: 'Raised by Alumni' },
            { icon: Globe, value: '18+', label: 'Districts Represented' },
          ].map((stat, i) => {
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
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-green-600/10 flex items-center justify-center border border-white/10">
                  <Icon className="w-10 h-10 text-yellow-500" />
                </div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
                <p className="text-lg text-gray-400">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Investor Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className=" bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
            <h3 className="flex flex-col items-center gap-4 text-3xl md:text-4xl font-bold text-white text-center mb-10">
  <span>Register Your Interest as an Investor</span>
  
  <motion.div
    animate={{ y: [0, 10, 0] }}           // moves down 10px then back
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  >
    <ArrowDown className="w-10 h-10 text-yellow-500" />
  </motion.div>
</h3>

            <form
              action="https://formsubmit.co/simufix@gmail.com"
              method="POST"
              className="space-y-8"
            >
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="Full Name"
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition"
                />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="Organization"
                  placeholder="Organization / Fund (if any)"
                  className="w-full px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition"
                />
                <select
                  name="Investment Focus"
                  required
                  className="w-full px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-yellow-500/50 transition"
                >
                  <option value="">Investment Focus</option>
                  <option value="Angel Investor">Angel Investor</option>
                  <option value="Venture Capital">Venture Capital</option>
                  <option value="Corporate Venture">Corporate Venture</option>
                  <option value="Grants / Foundations">Grants / Foundations</option>
                  <option value="Diaspora Investor">Diaspora Investor</option>
                  <option value="Family Office">Family Office</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                name="Message"
                placeholder="Tell us about your investment thesis, check size, or sectors of interest in Uganda (optional but helpful)"
                rows={4}
                className="w-full px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition resize-none"
              />

              {/* Hidden FormSubmit Magic */}
              <input type="hidden" name="_subject" value="New Investor Registration – BuildrHive UG" />
              <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : 'https://next-solution-ug.vercel.app/'}/thank-you-investor`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for registering as an investor at BuildrHive UG! We'll send you our first deal flow soon. – The BuildrHive Team" />

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 bg-yellow-500 text-black font-semibold text-lg px-12 py-5 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-500/30"
                >
                  Join as an Investor
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </form>

            <p className="text-center text-gray-500 text-sm mt-8">
              You’ll receive deal flow, pitch decks, and founder intros directly to your inbox.
            </p>
          </div>
        </motion.div>

        {/* Trust Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 text-gray-400 text-lg"
        >
          Past investors include diaspora angels, GrowthAfrica, UNCDF, and corporate partners.
        </motion.p>
      </div>
    </section>
  )
}