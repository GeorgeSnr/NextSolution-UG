// components/InvestorNetwork.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe } from 'lucide-react'
import Image from 'next/image'

const partners = [
  {
    name: 'MTN Uganda',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/New-mtn-logo.jpg',
    url: 'https://mtn.co.ug'
  },
  {
    name: 'Mastercard Foundation',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/450px-MasterCard_Logo.svg.png?20140711182052',
    url: 'https://mastercardfdn.org'
  },
  {
    name: 'Stanbic Bank Uganda',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKca0-RNw3O8aZCdZGa3upWcCoBzkRY7Czg&s',
    url: 'https://stanbicbank.co.ug'
  },
  {
    name: 'Absa Bank Uganda',
    logo: 'data:image/png;base64,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',
    url: 'https://absa.co.ug'
  },
  {
    name: 'dfcu Bank',
    logo: 'data:image/jpeg;base64,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',
    url: 'https://dfcugroup.com'
  },
  {
    name: 'GrowthAfrica',
    logo: 'https://www.africagrant.com/wp-content/uploads/2022/05/Africa.jpg',
    url: 'https://growthafrica.com'
  },
  {
    name: 'JICA-Uganda',
    logo: 'https://www.jica.go.jp/english/assets/img/logo-en.png',
    url: 'https://www.jica.go.jp/english/overseas/uganda/office'
  },
  {
    name: 'Uganda Investment Authority',
    logo: 'https://ugandainvest.go.ug/wp-content/uploads/2025/06/cropped-UIA-Logo-PNG-Dark-2000x1152-1.png',
    url: 'https://ugandainvest.go.ug'
  },
  {
    name: 'Innovation Village',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaXS-t0vS61tRQ5fEGzlydvpeCpV1n8LlZw&s',
    url: 'https://innovationvillage.africa'
  },
  {
    name: 'NITA Uganda',
    logo: 'https://nita.go.ug/sites/default/files/styles/large/public/2023-08/image-nita_0.png?itok=-qzfplP9',
    url: 'https://nita.go.ug'
  },
  {
    name: 'Hive Colab',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMFg2-v77SH-6xhBhsODK6BpqxsX5u4Jxog&s',
    url: 'https://hivecolab.org'
  },
  {
    name: 'Global VCs (TLcom, Future Africa, 500 Global)',
    logo: 'https://pbs.twimg.com/profile_images/1678715646077485056/-0tQTzNP_400x400.jpg',
    url: 'https://tlcomcapital.com'
  },
]

export default function InvestorNetwork() {
  return (
    <section id="investors" className="py-8 px-6 bg-slate-950">
      {/* Subtle glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
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
            Backed by Uganda’s Most Active Startup Funders (2025)
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Investor & Sponsor Network
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            These are the organizations actively writing checks, giving grants, and opening doors for Ugandan founders today.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          {partners.map((partner, i) => (
            <motion.a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all duration-500"
            >
              <div className="w-32 h-20 mb-4 relative flex items-center justify-center">
                <Image width={80} height={80}
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-white font-medium text-center text-sm leading-tight">
                {partner.name}
              </h3>
              <Globe className="w-4 h-4 text-gray-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Value + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-gray-300">
              <div className="text-4xl font-bold text-yellow-500 mb-2">Warm Intros</div>
              <p className="text-sm">Direct emails to decision-makers at MTN, Stanbic, Mastercard Foundation</p>
            </div>
            <div className="text-gray-300">
              <div className="text-4xl font-bold text-yellow-500 mb-2">Grant Access</div>
              <p className="text-sm">Apply to $20K–$500K programs from UIA, UNCDF, GrowthAfrica</p>
            </div>
            <div className="text-gray-300">
              <div className="text-4xl font-bold text-yellow-500 mb-2">No Equity Taken</div>
              <p className="text-sm">We only help you win — never dilute your cap table</p>
            </div>
          </div>

          <a
            href="#for-investors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('for-investors')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-4 bg-yellow-500 text-black font-semibold text-lg px-10 py-5 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-500/25"
          >
            Are You an Investor? Join the Network
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
          </a>

          <p className="mt-6 text-gray-500">
            Founders: Apply below to get access to these connections
          </p>
        </motion.div>
      </div>
    </section>
  )
}